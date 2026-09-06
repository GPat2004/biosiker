import { CURRICULUM } from '../data/curriculum';

// XP/szint alapszabályok: FIX 100 XP/szint, sosem progresszív - a szint
// mindig a teljes életút-XP-ből származtatott, nincs külön tárolt mező.
export const LEVEL_XP = 100;
export const levelFromXp = (xp) => Math.floor(xp / LEVEL_XP) + 1;
export const xpIntoLevelFromXp = (xp) => xp % LEVEL_XP;

// Kviz-eredmény alapján járó XP - kizárólag ez a forrás (fejezet
// elolvasásának megjelöléséért NEM jár XP). Minden kvíz-típusra
// (fejezet-kvíz, modulzáró teszt) egységesen ugyanígy számol.
export const xpForScore = (percent) => {
  if (percent >= 100) return 25;
  if (percent >= 90) return 15;
  if (percent >= 80) return 10;
  return 0;
};

export const COINS_PER_LEVEL = 100;

// Anonim, semleges illusztrált avatarok - ikon+színpár, NEM valós fénykép.
export const AVATARS = [
  { id: 'avatar-1', icon: 'Cat', color: 'from-pink-500 to-rose-500' },
  { id: 'avatar-2', icon: 'Bird', color: 'from-sky-500 to-blue-500' },
  { id: 'avatar-3', icon: 'Fish', color: 'from-cyan-500 to-teal-500' },
  { id: 'avatar-4', icon: 'Rabbit', color: 'from-purple-500 to-fuchsia-500' },
  { id: 'avatar-5', icon: 'Turtle', color: 'from-emerald-500 to-green-500' },
  { id: 'avatar-6', icon: 'Squirrel', color: 'from-amber-500 to-orange-500' },
  { id: 'avatar-7', icon: 'Ghost', color: 'from-slate-500 to-slate-700' },
  { id: 'avatar-8', icon: 'Rocket', color: 'from-indigo-500 to-violet-500' },
];

export const getAvatar = (avatarId) => AVATARS.find((a) => a.id === avatarId) ?? AVATARS[0];

// --- Merfoldkovek --------------------------------------------------------
// Minden mérföldkő egy tiszta `check(state)` predikátummal dönti el, hogy
// a felhasználó teljes tanulási állapota (UserDataContext bundle.data)
// alapján el van-e érve - így egyetlen, egységes helyen (lásd
// UserDataContext checkMilestones) lehet mindet kiértékelni, bármelyik
// releváns adat (kvíz, streak, szint, tanulókártya) változásakor.
const count100PercentQuizzes = (quizResults) =>
  Object.values(quizResults).filter((r) => r.best === 100).length;

const totalQuizAttempts = (quizResults) =>
  Object.values(quizResults).reduce((sum, r) => sum + (r.attempts || 0), 0);

const isModuleFullyMastered = (quizResults) =>
  CURRICULUM.some((mod) => {
    const keys = [...mod.chapters.map((c) => c.id), `module:${mod.id}`];
    return keys.length > 0 && keys.every((k) => (quizResults[k]?.best ?? 0) >= 80);
  });

const claimedDailyRewardCount = (gamification) => Object.keys(gamification.claimedDailyRewards || {}).length;

export const MILESTONES = [
  {
    id: 'first-step',
    name: 'Az első lépés',
    description: 'Teljesítsd az első kvízedet (bármilyen eredménnyel).',
    coinReward: 20,
    check: (s) => Object.keys(s.quizResults).length > 0,
  },
  {
    id: 'first-100',
    name: 'Első 100%',
    description: 'Érj el először 100%-os eredményt egy kvízen.',
    coinReward: 50,
    check: (s) => count100PercentQuizzes(s.quizResults) >= 1,
  },
  {
    id: 'brain-master',
    name: 'Brain Master',
    description: 'Érj el 5 db 100%-os kvíz-eredményt.',
    coinReward: 150,
    check: (s) => count100PercentQuizzes(s.quizResults) >= 5,
  },
  {
    id: 'iron-mind',
    name: 'Vasfej',
    description: 'Érj el 20 db 100%-os kvíz-eredményt.',
    coinReward: 400,
    check: (s) => count100PercentQuizzes(s.quizResults) >= 20,
  },
  {
    id: 'diligent',
    name: 'Szorgalmas',
    description: 'Tölts ki összesen 10 kvízt (próbálkozásszám, nem egyedi fejezet).',
    coinReward: 60,
    check: (s) => totalQuizAttempts(s.quizResults) >= 10,
  },
  {
    id: 'level-5',
    name: 'Haladó',
    description: 'Érd el az 5. szintet.',
    coinReward: 100,
    check: (s) => levelFromXp(s.xp) >= 5,
  },
  {
    id: 'level-10',
    name: 'Kitartó',
    description: 'Érd el a 10. szintet.',
    coinReward: 250,
    check: (s) => levelFromXp(s.xp) >= 10,
  },
  {
    id: 'level-20',
    name: 'Profi',
    description: 'Érd el a 20. szintet.',
    coinReward: 600,
    check: (s) => levelFromXp(s.xp) >= 20,
  },
  {
    id: 'module-champion',
    name: 'Modul-bajnok',
    description: 'Érj el legalább 80%-os legjobb eredményt egy teljes modul minden fejezet-kvízén és a modulzáró teszten is.',
    coinReward: 300,
    check: (s) => isModuleFullyMastered(s.quizResults),
  },
  {
    id: 'streak-3',
    name: 'Soha nem adod fel',
    description: 'Érj el 3 napos tanulási sorozatot.',
    coinReward: 50,
    check: (s) => s.streak.longest >= 3,
  },
  {
    id: 'streak-7',
    name: 'Tökéletes hét',
    description: 'Érj el 7 napos tanulási sorozatot.',
    coinReward: 80,
    check: (s) => s.streak.longest >= 7,
  },
  {
    id: 'streak-14',
    name: 'Maratoni tanuló',
    description: 'Érj el 14 napos tanulási sorozatot.',
    coinReward: 150,
    check: (s) => s.streak.longest >= 14,
  },
  {
    id: 'streak-30',
    name: 'Legenda',
    description: 'Érj el 30 napos tanulási sorozatot.',
    coinReward: 400,
    check: (s) => s.streak.longest >= 30,
  },
  {
    id: 'deck-collector',
    name: 'Gyűjtögető',
    description: 'Hozz létre legalább 3 saját tanulókártya-paklit.',
    coinReward: 30,
    check: (s) => s.flashcards.decks.length >= 3,
  },
  {
    id: 'card-master',
    name: 'Kártyamester',
    description: 'Hozz létre összesen legalább 50 tanulókártyát.',
    coinReward: 120,
    check: (s) => s.flashcards.cards.length >= 50,
  },
  {
    id: 'daily-5',
    name: 'Hétköznapi hős',
    description: 'Igényelj le 5 napi jutalmat.',
    coinReward: 100,
    check: (s) => claimedDailyRewardCount(s.gamification) >= 5,
  },
  {
    id: 'daily-14',
    name: 'Napi bajnok',
    description: 'Igényelj le 14 napi jutalmat.',
    coinReward: 250,
    check: (s) => claimedDailyRewardCount(s.gamification) >= 14,
  },
];

// --- Napi jutalmak ---------------------------------------------------
// A napi streak aktuális hossza (streak.current) alapján jár jutalom -
// egy adott napon csak egyszer igényelhető le. A 3. és a 7. nap
// egybeesik egy-egy streak-mérföldkővel (lásd fent), a 14. a létra
// tetejét jelenti - utána a jutalom egy fix, "kitartási" összegre áll be.
export const DAILY_REWARDS = [
  { day: 1, coins: 100 },
  { day: 2, coins: 150 },
  { day: 3, coins: 100, note: 'Ma teljesül a "Soha nem adod fel" mérföldkő is!' },
  { day: 4, coins: 120 },
  { day: 5, coins: 180 },
  { day: 6, coins: 220 },
  { day: 7, coins: 350, note: 'Heti bónusz - ma teljesül a "Tökéletes hét" mérföldkő is!' },
  { day: 8, coins: 130 },
  { day: 9, coins: 160 },
  { day: 10, coins: 200 },
  { day: 11, coins: 240 },
  { day: 12, coins: 280 },
  { day: 13, coins: 320 },
  { day: 14, coins: 500, note: 'Kéthetes bónusz - ma teljesül a "Maratoni tanuló" mérföldkő is!' },
];

const DAILY_REWARD_AFTER_LADDER = 150;

export const getDailyRewardForDay = (day) =>
  DAILY_REWARDS[day - 1] ?? { day, coins: DAILY_REWARD_AFTER_LADDER };

// --- Erme-bolt -----------------------------------------------------------
// KIZAROLAG kozmetikai, jatekos extrak - semmilyen tanulasi tartalom
// vagy funkcio-hozzaferes nincs itt. 'theme' tipus: az egesz felulet
// akcentszinet valtja (lasd index.css [data-theme] + ThemeApplier.jsx),
// egyszerre csak egy lehet aktiv. 'decoration' tipus: egy kis animalt
// dísz jelenik meg a valasztott sarokban (lasd CornerMascot.jsx),
// tobb is aktivalhato egyszerre.
export const SHOP_ITEMS = [
  {
    id: 'theme-ocean',
    type: 'theme',
    themeId: 'ocean',
    name: 'Óceán téma',
    description: 'Kék akcentszín az egész felületen.',
    price: 300,
    swatch: 'bg-blue-600',
  },
  {
    id: 'theme-sunset',
    type: 'theme',
    themeId: 'sunset',
    name: 'Naplemente téma',
    description: 'Meleg narancs akcentszín az egész felületen.',
    price: 300,
    swatch: 'bg-orange-600',
  },
  {
    id: 'theme-galaxy',
    type: 'theme',
    themeId: 'galaxy',
    name: 'Galaxis téma',
    description: 'Lila akcentszín az egész felületen.',
    price: 300,
    swatch: 'bg-violet-600',
  },
  {
    id: 'deco-cat',
    type: 'decoration',
    icon: 'Cat',
    corner: 'bottom-left',
    name: 'Kiscica a sarokban',
    description: 'Egy aranyos kiscica figyeli a tanulásod a bal alsó sarokból.',
    price: 150,
  },
  {
    id: 'deco-ghost',
    type: 'decoration',
    icon: 'Ghost',
    corner: 'bottom-right',
    name: 'Szellem-barát',
    description: 'Egy barátságos szellem lebeg a jobb alsó sarokban.',
    price: 150,
  },
  {
    id: 'deco-sparkle',
    type: 'decoration',
    icon: 'Sparkles',
    corner: 'top-right',
    name: 'Csillogó csillag',
    description: 'Egy pislákoló csillag díszíti a jobb felső sarkot, munka közben.',
    price: 150,
  },
];

export const getShopItem = (itemId) => SHOP_ITEMS.find((i) => i.id === itemId);
