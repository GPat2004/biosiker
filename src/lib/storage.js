// Vékony, namespace-elt wrapper a localStorage fölött.
// Cél: egy helyen kezelni a szerializációt és a hibákat (pl. privát böngészés,
// tiltott storage), hogy a többi kód sose törjön emiatt.

const NAMESPACE = 'biosiker';

const buildKey = (key) => `${NAMESPACE}:${key}`;

export const storage = {
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(buildKey(key));
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (err) {
      console.warn(`[storage] Nem sikerult beolvasni: "${key}"`, err);
      return fallback;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(buildKey(key), JSON.stringify(value));
      return true;
    } catch (err) {
      console.warn(`[storage] Nem sikerult menteni: "${key}"`, err);
      return false;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(buildKey(key));
    } catch (err) {
      console.warn(`[storage] Nem sikerult torolni: "${key}"`, err);
    }
  },
};
