// Fisher-Yates keverés - nem módosítja az eredeti tömböt.
const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

// Egy kérdés válaszlehetőségeinek sorrendjét kevri meg, a correctIndex-et
// az új sorrendhez igazítva.
const shuffleQuestionOptions = (question) => {
  const order = shuffle(question.options.map((_, i) => i));
  return {
    ...question,
    options: order.map((originalIndex) => question.options[originalIndex]),
    correctIndex: order.indexOf(question.correctIndex),
  };
};

// A megadott kérdésbankból (pool) legfeljebb `count` darab kérdést választ
// véletlenszerűen, és minden kérdésnél megkeveri a válaszlehetőségek
// sorrendjét is.
export const prepareQuiz = (pool, count) =>
  shuffle(pool)
    .slice(0, Math.min(count, pool.length))
    .map(shuffleQuestionOptions);

// Egységes szín-kódolás az eredmény-százalékokhoz: piros < 60%, sárga
// 60-80%, zöld 80%+.
export const scoreColorClasses = (percent) => {
  if (percent >= 80) {
    return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400';
  }
  if (percent >= 60) {
    return 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400';
  }
  return 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400';
};
