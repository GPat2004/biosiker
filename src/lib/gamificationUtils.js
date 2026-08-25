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
