import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { storage } from '../lib/storage';
import { getChapterById, CURRICULUM } from '../data/curriculum';

const UserDataContext = createContext();

const DEFAULT_STATE = {
  subscription: { plan: 'free', since: null }, // 'free' | 'pro' | 'mentor'
  progress: {}, // { [moduleId]: { [chapterId]: { completed: true, completedAt } } }
  xp: 0,
  streak: { current: 0, longest: 0, lastActiveDate: null },
};

const todayISO = () => new Date().toISOString().slice(0, 10);

export const UserDataProvider = ({ children }) => {
  const [state, setState] = useState(() => storage.get('user-data', DEFAULT_STATE));

  useEffect(() => {
    storage.set('user-data', state);
  }, [state]);

  // --- Előfizetés -----------------------------------------------------
  // FONTOS: ez egyelőre egy LOKÁLIS, DEMO-jellegű kapcsoló, nincs mögötte
  // valódi fizetési folyamat. Éles indulás előtt egy tényleges fizetési
  // szolgáltatóra (pl. Stripe) kell cserélni, ami a szerver oldalon
  // validálja az előfizetés állapotát.
  const subscribe = useCallback((plan) => {
    setState((prev) => ({
      ...prev,
      subscription: { plan, since: new Date().toISOString() },
    }));
  }, []);

  const unsubscribe = useCallback(() => {
    setState((prev) => ({
      ...prev,
      subscription: { plan: 'free', since: null },
    }));
  }, []);

  const isPremium = state.subscription.plan !== 'free';

  // --- Hozzáférés-vezérlés (paywall) -----------------------------------
  const canAccessChapter = useCallback(
    (moduleId, chapterId) => {
      const chapter = getChapterById(moduleId, chapterId);
      if (!chapter) return false;
      return chapter.isFree || isPremium;
    },
    [isPremium]
  );

  // --- Streak (napi aktivitás) ------------------------------------------
  const registerActivity = useCallback(() => {
    setState((prev) => {
      const today = todayISO();
      const { lastActiveDate, current, longest } = prev.streak;

      if (lastActiveDate === today) return prev; // már regisztráltuk ma

      let newCurrent = 1;
      if (lastActiveDate) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastActiveDate === yesterday.toISOString().slice(0, 10)) {
          newCurrent = current + 1; // folytatódik a streak
        }
      }

      return {
        ...prev,
        streak: {
          current: newCurrent,
          longest: Math.max(longest, newCurrent),
          lastActiveDate: today,
        },
      };
    });
  }, []);

  // --- Fejezet-progressz -------------------------------------------------
  const markChapterComplete = useCallback(
    (moduleId, chapterId) => {
      registerActivity();
      setState((prev) => {
        const alreadyDone = prev.progress[moduleId]?.[chapterId]?.completed;
        return {
          ...prev,
          xp: alreadyDone ? prev.xp : prev.xp + 20,
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
    [registerActivity]
  );

  const isChapterComplete = useCallback(
    (moduleId, chapterId) => Boolean(state.progress[moduleId]?.[chapterId]?.completed),
    [state.progress]
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
    setState(DEFAULT_STATE);
  }, []);

  return (
    <UserDataContext.Provider
      value={{
        subscription: state.subscription,
        isPremium,
        subscribe,
        unsubscribe,
        canAccessChapter,
        markChapterComplete,
        isChapterComplete,
        getModuleProgress,
        xp: state.xp,
        streak: state.streak,
        resetProgress,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
