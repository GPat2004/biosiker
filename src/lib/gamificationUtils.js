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
