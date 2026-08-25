import { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { storage } from '../lib/storage';
import { CURRICULUM, getChapterById } from '../data/curriculum';
import { useAuth } from './AuthContext';
import { fetchUserProgress, upsertUserProgress } from '../lib/progressApi';
import { generateId, nextReviewState } from '../lib/flashcardUtils';
import {
  COINS_PER_LEVEL,
  getDailyRewardForDay,
  getShopItem,
  levelFromXp,
  MILESTONES,
  SHOP_ITEMS,
  xpIntoLevelFromXp,
} from '../lib/gamificationUtils';

const UserDataContext = createContext();

const DEFAULT_STATE = {
  subscription: { plan: 'free', since: null }, // 'free' | 'pro'
  examLevel: 'kozep', // 'kozep' | 'emelt'
  progress: {}, // { [moduleId]: { [chapterId]: { completed: true, completedAt } } }
  // { [quizKey]: { best, last, lastAt, attempts } } - quizKey = chapterId
  // fejezet-kviznel, "module:<moduleId>" modulzaro tesztnel.
  quizResults: {},
  // Sajat, privat tanulokartya-paklik es -kartyak. decks: [{ id, name,
  // description, subject, createdAt }], cards: [{ id, deckId, front,
  // back, srsBox, lastReviewedAt, dueAt, createdAt }].
  flashcards: { decks: [], cards: [] },
  // Kizarolag kviz-eredmeny alapjan no (lasd awardXp) - fejezet
  // elolvasasanak megjeloleseert NEM jar XP. A szint a xp-bol
  // szarmaztatott: level = floor(xp / 100) + 1, fix 100 XP/szint.
  xp: 0,
  // Jatekos, kizarolag aktivitassal szerezheto virtualis penznem -
  // szintlepesert es napi jutalomert jar, SOHA nem vasarolhato.
  coins: 0,
  streak: { current: 0, longest: 0, lastActiveDate: null },
  // Profil-oldal: avatar-valasztas, merfoldkovek, napi jutalmak, erme-bolt.
  gamification: {
    avatarId: 'avatar-1',
    unlockedMilestones: {}, // { [milestoneId]: isoDate }
    claimedDailyRewards: {}, // { [napszam]: isoDate }
    lastDailyClaimDate: null,
    ownedShopItems: [], // [itemId]
    activeShopItems: [], // [itemId] - jelenleg bekapcsolt kozmetikai extrak
  },
};

const todayISO = () => new Date().toISOString().slice(0, 10);

// Régi mentéseknél hiányozhat egy-egy újabb mező (pl. examLevel) - ez
// biztosítja, hogy mindig legyen érvényes alapérték minden kulcshoz.
const withDefaults = (data) => ({ ...DEFAULT_STATE, ...data });

export const UserDataProvider = ({ children }) => {
  const { user, isAuthenticated, loading: authLoading } = useAuth();

  // A "data" (tanulasi allapot) es a "source" (hova mentunk: local/cloud)
  // EGYETLEN state-objektumban el, hogy egy useEffect-agban sose kelljen
  // ket kulon setState-et hivni (a React Compiler linter ezt jelzi).
  const [bundle, setBundle] = useState(() => ({
    data: withDefaults(storage.get('user-data', DEFAULT_STATE)),
    source: 'local', // 'local' -> vendeg, localStorage | 'cloud' -> Supabase
  }));
  const isSyncingRef = useRef(false);

  // Amint eldol az auth-allapot, betoltjuk (vagy letrehozzuk) a megfelelo
  // progressz-forrast. Elso bejelentkezeskor a helyi (vendeg) progresszt
  // egyszer atvisszuk a felhobe, hogy ne vesszen el semmi.
  useEffect(() => {
    if (authLoading) return;

    if (!isAuthenticated || !user) {
      setBundle({ data: withDefaults(storage.get('user-data', DEFAULT_STATE)), source: 'local' });
      return;
    }

    let cancelled = false;

    (async () => {
      isSyncingRef.current = true;
      const { data: remote } = await fetchUserProgress(user.id);
      if (cancelled) return;

      let nextData = remote ? withDefaults(remote) : remote;
      if (!nextData) {
        nextData = withDefaults(storage.get('user-data', DEFAULT_STATE));
        await upsertUserProgress(user.id, nextData);
        if (cancelled) return;
      }

      setBundle({ data: nextData, source: 'cloud' });
      isSyncingRef.current = false;
    })();

    return () => {
      cancelled = true;
    };
  }, [isAuthenticated, authLoading, user]);

  // Mentes a megfelelo helyre. A betoltes alatti setState-eket nem irjuk
  // vissza (isSyncingRef), hogy ne irjuk felul onmagunkat feleslegesen.
  useEffect(() => {
    if (isSyncingRef.current) return;

    if (bundle.source === 'cloud' && user?.id) {
      upsertUserProgress(user.id, bundle.data);
    } else if (bundle.source === 'local') {
      storage.set('user-data', bundle.data);
    }
  }, [bundle, user?.id]);

  // Merfoldko-kiertekeles: minden allapotvaltozas utan ujra lefut, es
  // Coin-jutalommal egyutt feloldja azokat, amik meg nincsenek feloldva,
  // de mar teljesulnek. Idempotens - miutan feloldotta oket, a kovetkezo
  // lefutasnal mar nincs ujonnan teljesulo mérföldkő, igy nem hurkol.
  // Ugyanaz a "setState hatasban" minta, mint a fenti auth-szinkronnal -
  // ez itt is szandekos: tobb, egymastol fuggetlen allapotszelet (kviz,
  // szint, streak, tanulokartya) egyuttes, egy helyen tortenő figyeleset
  // igenyli, kulon-kulon minden mutalo hivas utani checkMilestones()
  // hivas sokkal torekenyebb es konnyen elfelejtheto lenne.
  useEffect(() => {
    if (isSyncingRef.current) return;
    const newlyUnlocked = MILESTONES.filter(
      (m) => !bundle.data.gamification.unlockedMilestones[m.id] && m.check(bundle.data)
    );
    if (newlyUnlocked.length === 0) return;

    setBundle((prev) => {
      const unlocked = { ...prev.data.gamification.unlockedMilestones };
      let coinBonus = 0;
      for (const m of newlyUnlocked) {
        if (!unlocked[m.id]) {
          unlocked[m.id] = new Date().toISOString();
          coinBonus += m.coinReward;
        }
      }
      if (coinBonus === 0) return prev;
      return {
        ...prev,
        data: {
          ...prev.data,
          coins: prev.data.coins + coinBonus,
          gamification: { ...prev.data.gamification, unlockedMilestones: unlocked },
        },
      };
    });
  }, [bundle.data]);

  // Az Erme-boltban aktivalt akcentszin-tema (ha van) DOM-attributumkent
  // valik lathatova - index.css [data-theme] szabalyai ez alapjan iraljak
  // felul a --color-primary-* valtozokat. Ez a React allapot (aktiv
  // shop-elem) es egy kulso rendszer (a DOM/CSS) szinkronizalasa - nem
  // setState, tehat nem esik a fenti ket effektre vonatkozo figyelmeztetes
  // ala.
  useEffect(() => {
    const activeTheme = SHOP_ITEMS.find(
      (item) => item.type === 'theme' && bundle.data.gamification.activeShopItems.includes(item.id)
    );
    if (activeTheme) {
      document.documentElement.setAttribute('data-theme', activeTheme.themeId);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [bundle.data.gamification.activeShopItems]);

  const updateData = useCallback((updater) => {
    setBundle((prev) => ({ ...prev, data: updater(prev.data) }));
  }, []);

  // --- Elofizetes -----------------------------------------------------
  // FONTOS: ez egyelore egy DEMO-jellegu kapcsolo, nincs mogotte valodi
  // fizetesi folyamat. Eles inditas elott egy tenyleges fizetesi
  // szolgaltatora (pl. Stripe) kell cserelni.
  const subscribe = useCallback(
    (plan) => {
      updateData((prev) => ({
        ...prev,
        subscription: { plan, since: new Date().toISOString() },
      }));
    },
    [updateData]
  );

  const unsubscribe = useCallback(() => {
    updateData((prev) => ({
      ...prev,
      subscription: { plan: 'free', since: null },
    }));
  }, [updateData]);

  const setExamLevel = useCallback(
    (level) => {
      updateData((prev) => ({ ...prev, examLevel: level }));
    },
    [updateData]
  );

  const isPremium = bundle.data.subscription.plan !== 'free';

  // --- Hozzaferes-vezerles (paywall) -----------------------------------
  const canAccessChapter = useCallback(
    (moduleId, chapterId) => {
      const chapter = getChapterById(moduleId, chapterId);
      if (!chapter) return false;
      return chapter.isFree || isPremium;
    },
    [isPremium]
  );

  // --- Streak (napi aktivitas) + fejezet-progressz ------------------------
  const markChapterComplete = useCallback(
    (moduleId, chapterId) => {
      updateData((prev) => {
        const today = todayISO();
        const { lastActiveDate, current, longest } = prev.streak;

        let newStreak = prev.streak;
        if (lastActiveDate !== today) {
          let newCurrent = 1;
          if (lastActiveDate) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (lastActiveDate === yesterday.toISOString().slice(0, 10)) {
              newCurrent = current + 1;
            }
          }
          newStreak = {
            current: newCurrent,
            longest: Math.max(longest, newCurrent),
            lastActiveDate: today,
          };
        }

        return {
          ...prev,
          streak: newStreak,
          progress: {
            ...prev.progress,
            [moduleId]: {
              ...prev.progress[moduleId],
              [chapterId]: { completed: true, completedAt: new Date().toISOString() },
            },
          },
        };
      });
    },
    [updateData]
  );

  const isChapterComplete = useCallback(
    (moduleId, chapterId) => Boolean(bundle.data.progress[moduleId]?.[chapterId]?.completed),
    [bundle.data.progress]
  );

  const getModuleProgress = useCallback(
    (moduleId) => {
      const module = CURRICULUM.find((m) => m.id === moduleId);
      if (!module || module.chapters.length === 0) return 0;
      const completed = module.chapters.filter((c) =>
        isChapterComplete(moduleId, c.id)
      ).length;
      return Math.round((completed / module.chapters.length) * 100);
    },
    [isChapterComplete]
  );

  const resetProgress = useCallback(() => {
    updateData(() => DEFAULT_STATE);
  }, [updateData]);

  // --- Kviz-eredmenyek (fejezet- es modulzaro teszt) -------------------
  const recordQuizResult = useCallback(
    (quizKey, percent) => {
      updateData((prev) => {
        const existing = prev.quizResults[quizKey];
        return {
          ...prev,
          quizResults: {
            ...prev.quizResults,
            [quizKey]: {
              best: existing ? Math.max(existing.best, percent) : percent,
              last: percent,
              lastAt: new Date().toISOString(),
              attempts: (existing?.attempts || 0) + 1,
            },
          },
        };
      });
    },
    [updateData]
  );

  const getQuizResult = useCallback(
    (quizKey) => bundle.data.quizResults[quizKey] || null,
    [bundle.data.quizResults]
  );

  // --- Gamifikacio: XP, szint, coin --------------------------------------
  // Kizarolag kviz-eredmeny hivja (lasd QuizRunner) - a szint fix 100
  // XP-nkent lep, es minden szintlepes 100 Coin jutalmat ad automatikusan.
  const awardXp = useCallback(
    (amount) => {
      if (!amount || amount <= 0) return;
      updateData((prev) => {
        const newXp = prev.xp + amount;
        const levelsGained = levelFromXp(newXp) - levelFromXp(prev.xp);
        return {
          ...prev,
          xp: newXp,
          coins: prev.coins + Math.max(0, levelsGained) * COINS_PER_LEVEL,
        };
      });
    },
    [updateData]
  );

  const level = levelFromXp(bundle.data.xp);
  const xpIntoLevel = xpIntoLevelFromXp(bundle.data.xp);

  const setAvatarId = useCallback(
    (avatarId) => {
      updateData((prev) => ({
        ...prev,
        gamification: { ...prev.gamification, avatarId },
      }));
    },
    [updateData]
  );

  // Minden merfoldkohoz hozza fuzi, hogy fel van-e mar oldva (es mikor) -
  // a Profil oldal ebbol allitja ossze a listat, kiemelt/halvanyitott
  // megjelenitessel.
  const getMilestones = useCallback(
    () =>
      MILESTONES.map((m) => ({
        ...m,
        unlocked: Boolean(bundle.data.gamification.unlockedMilestones[m.id]),
        unlockedAt: bundle.data.gamification.unlockedMilestones[m.id] || null,
      })),
    [bundle.data.gamification.unlockedMilestones]
  );

  // --- Napi jutalmak -----------------------------------------------------
  // A jelenlegi streak-nap alapjan jaro jutalom, naponta csak egyszer
  // igenyelheto le (lastDailyClaimDate orzi, mikor tortent az utolso
  // igenyles).
  const claimDailyReward = useCallback(() => {
    updateData((prev) => {
      const today = todayISO();
      if (prev.gamification.lastDailyClaimDate === today) return prev;
      const day = prev.streak.current || 1;
      const reward = getDailyRewardForDay(day);
      return {
        ...prev,
        coins: prev.coins + reward.coins,
        gamification: {
          ...prev.gamification,
          lastDailyClaimDate: today,
          claimedDailyRewards: {
            ...prev.gamification.claimedDailyRewards,
            [today]: { day, coins: reward.coins },
          },
        },
      };
    });
  }, [updateData]);

  const getDailyRewardStatus = useCallback(() => {
    const today = todayISO();
    const day = bundle.data.streak.current || 1;
    return {
      day,
      reward: getDailyRewardForDay(day),
      alreadyClaimedToday: bundle.data.gamification.lastDailyClaimDate === today,
      totalClaimed: Object.keys(bundle.data.gamification.claimedDailyRewards).length,
    };
  }, [bundle.data.streak, bundle.data.gamification.lastDailyClaimDate, bundle.data.gamification.claimedDailyRewards]);

  // --- Erme-bolt: kizarolag kozmetikai extrak, SOHA nem tanulasi tartalom
  const purchaseShopItem = useCallback(
    (itemId) => {
      updateData((prev) => {
        const item = getShopItem(itemId);
        if (!item) return prev;
        if (prev.gamification.ownedShopItems.includes(itemId)) return prev;
        if (prev.coins < item.price) return prev;
        return {
          ...prev,
          coins: prev.coins - item.price,
          gamification: {
            ...prev.gamification,
            ownedShopItems: [...prev.gamification.ownedShopItems, itemId],
          },
        };
      });
    },
    [updateData]
  );

  // Dekoraciok fuggetlenul be/kikapcsolhatok, temabol viszont csak egy
  // lehet aktiv egyszerre - uj tema bekapcsolasa automatikusan lekapcsolja
  // a korabban aktivat.
  const toggleShopItem = useCallback(
    (itemId) => {
      updateData((prev) => {
        const item = getShopItem(itemId);
        if (!item || !prev.gamification.ownedShopItems.includes(itemId)) return prev;
        const isActive = prev.gamification.activeShopItems.includes(itemId);
        let nextActive;
        if (isActive) {
          nextActive = prev.gamification.activeShopItems.filter((id) => id !== itemId);
        } else if (item.type === 'theme') {
          const themeIds = SHOP_ITEMS.filter((i) => i.type === 'theme').map((i) => i.id);
          nextActive = [...prev.gamification.activeShopItems.filter((id) => !themeIds.includes(id)), itemId];
        } else {
          nextActive = [...prev.gamification.activeShopItems, itemId];
        }
        return {
          ...prev,
          gamification: { ...prev.gamification, activeShopItems: nextActive },
        };
      });
    },
    [updateData]
  );

  // --- Tanulokartyak: paklik es kartyak (privat, csak a tulajdonose) ----
  const createDeck = useCallback(
    ({ name, description = '', subject = '' }) => {
      const id = generateId();
      updateData((prev) => ({
        ...prev,
        flashcards: {
          ...prev.flashcards,
          decks: [
            ...prev.flashcards.decks,
            { id, name, description, subject, createdAt: new Date().toISOString() },
          ],
        },
      }));
      return id;
    },
    [updateData]
  );

  const updateDeck = useCallback(
    (deckId, updates) => {
      updateData((prev) => ({
        ...prev,
        flashcards: {
          ...prev.flashcards,
          decks: prev.flashcards.decks.map((d) => (d.id === deckId ? { ...d, ...updates } : d)),
        },
      }));
    },
    [updateData]
  );

  const deleteDeck = useCallback(
    (deckId) => {
      updateData((prev) => ({
        ...prev,
        flashcards: {
          decks: prev.flashcards.decks.filter((d) => d.id !== deckId),
          cards: prev.flashcards.cards.filter((c) => c.deckId !== deckId),
        },
      }));
    },
    [updateData]
  );

  const createCard = useCallback(
    (deckId, { front, back }) => {
      const id = generateId();
      updateData((prev) => ({
        ...prev,
        flashcards: {
          ...prev.flashcards,
          cards: [
            ...prev.flashcards.cards,
            {
              id,
              deckId,
              front,
              back,
              srsBox: 1,
              lastReviewedAt: null,
              dueAt: new Date().toISOString(),
              createdAt: new Date().toISOString(),
            },
          ],
        },
      }));
      return id;
    },
    [updateData]
  );

  const updateCard = useCallback(
    (cardId, updates) => {
      updateData((prev) => ({
        ...prev,
        flashcards: {
          ...prev.flashcards,
          cards: prev.flashcards.cards.map((c) => (c.id === cardId ? { ...c, ...updates } : c)),
        },
      }));
    },
    [updateData]
  );

  const deleteCard = useCallback(
    (cardId) => {
      updateData((prev) => ({
        ...prev,
        flashcards: {
          ...prev.flashcards,
          cards: prev.flashcards.cards.filter((c) => c.id !== cardId),
        },
      }));
    },
    [updateData]
  );

  // A felhasznalo visszajelzese (hard/medium/easy) alapjan atszamolja a
  // kartya kovetkezo eseekessegi datumat es doboz-szintjet.
  const reviewCard = useCallback(
    (cardId, feedback) => {
      updateData((prev) => {
        const card = prev.flashcards.cards.find((c) => c.id === cardId);
        if (!card) return prev;
        const nextState = nextReviewState(card, feedback);
        return {
          ...prev,
          flashcards: {
            ...prev.flashcards,
            cards: prev.flashcards.cards.map((c) => (c.id === cardId ? { ...c, ...nextState } : c)),
          },
        };
      });
    },
    [updateData]
  );

  const getDecks = useCallback(() => bundle.data.flashcards.decks, [bundle.data.flashcards.decks]);

  const getDeckCards = useCallback(
    (deckId) => bundle.data.flashcards.cards.filter((c) => c.deckId === deckId),
    [bundle.data.flashcards.cards]
  );

  return (
    <UserDataContext.Provider
      value={{
        subscription: bundle.data.subscription,
        isPremium,
        subscribe,
        unsubscribe,
        examLevel: bundle.data.examLevel,
        setExamLevel,
        canAccessChapter,
        markChapterComplete,
        isChapterComplete,
        getModuleProgress,
        recordQuizResult,
        getQuizResult,
        createDeck,
        updateDeck,
        deleteDeck,
        createCard,
        updateCard,
        deleteCard,
        reviewCard,
        getDecks,
        getDeckCards,
        xp: bundle.data.xp,
        coins: bundle.data.coins,
        level,
        xpIntoLevel,
        awardXp,
        avatarId: bundle.data.gamification.avatarId,
        setAvatarId,
        getMilestones,
        claimDailyReward,
        getDailyRewardStatus,
        ownedShopItems: bundle.data.gamification.ownedShopItems,
        activeShopItems: bundle.data.gamification.activeShopItems,
        purchaseShopItem,
        toggleShopItem,
        streak: bundle.data.streak,
        resetProgress,
        progressSource: bundle.source,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
