// Ingyenes csomag korlátai a tanulókártyáknál - előfizetéssel ez a
// korlát nem érvényesül (lásd useUserData().isPremium).
export const FREE_MAX_DECKS = 2;
export const FREE_MAX_CARDS_PER_DECK = 20;

// Leitner-doboz jellegű térbeli ismétlés (spaced repetition) a
// tanulókártyákhoz. 5 "doboz" (szint) - minden szinthez tartozik egy
// intervallum, ami után a kártya újra esedékessé válik.
const MAX_BOX = 5;

const BOX_INTERVAL_MS = {
  1: 10 * 60 * 1000, // 10 perc - "Nehéz" mindig ide kerül vissza
  2: 24 * 60 * 60 * 1000, // 1 nap
  3: 3 * 24 * 60 * 60 * 1000, // 3 nap
  4: 7 * 24 * 60 * 60 * 1000, // 1 hét
  5: 14 * 24 * 60 * 60 * 1000, // 2 hét
};

// Egy kártya következő doboz-szintjét és esedékességi dátumát számolja ki
// a felhasználó visszajelzése alapján. 'hard' -> vissza az 1. dobozba,
// 'medium' -> marad a jelenlegi szinten (rövidesen újra esedékes lesz),
// 'easy' -> eggyel feljebb lép (ritkábban lesz esedékes).
export const nextReviewState = (card, feedback, now = Date.now()) => {
  const currentBox = card.srsBox || 1;
  let nextBox = currentBox;
  if (feedback === 'hard') nextBox = 1;
  else if (feedback === 'easy') nextBox = Math.min(MAX_BOX, currentBox + 1);

  return {
    srsBox: nextBox,
    dueAt: new Date(now + BOX_INTERVAL_MS[nextBox]).toISOString(),
    lastReviewedAt: new Date(now).toISOString(),
  };
};

// Egy soha nem gyakorolt kártya (nincs dueAt) mindig esedékesnek számít.
export const isDue = (card, now = Date.now()) => !card.dueAt || new Date(card.dueAt).getTime() <= now;

export const shuffleArray = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const generateId = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

// A felismerős kvíz-módhoz: a pakli többi kártyájának hátoldalát használja
// disztraktorként (a sajátjával és az azonos szövegű hátoldalakkal
// megegyezőket kizárva).
export const pickDistractors = (card, deckCards, count = 3) => {
  const pool = deckCards.filter((c) => c.id !== card.id && c.back.trim() !== card.back.trim());
  return shuffleArray(pool)
    .slice(0, count)
    .map((c) => c.back);
};

// A felismerős kvíz-mód csak akkor elérhető egy paklinál, ha van elég
// (legalább 4 egyedi hátoldalú) kártya hozzá hihető disztraktorokhoz.
export const canUseQuizMode = (deckCards) => {
  const uniqueBacks = new Set(deckCards.map((c) => c.back.trim()).filter(Boolean));
  return uniqueBacks.size >= 4;
};
