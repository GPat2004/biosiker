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
