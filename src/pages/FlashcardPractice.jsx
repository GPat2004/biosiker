import { useMemo, useState } from 'react';
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronLeft, RotateCcw } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';
import { isDue, pickDistractors, shuffleArray } from '../lib/flashcardUtils';
import FlipCard from '../components/FlipCard';

const FEEDBACK_OPTIONS = [
  { value: 'hard', label: 'Nehéz', className: 'bg-red-50 text-red-600 dark:bg-red-900/20 hover:bg-red-100' },
  {
    value: 'medium',
    label: 'Közepes',
    className: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 hover:bg-amber-100',
  },
  {
    value: 'easy',
    label: 'Könnyű',
    className: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 hover:bg-emerald-100',
  },
];

const FlipFace = ({ children, variant }) => (
  <div
    className={`absolute inset-0 flex flex-col items-center justify-center text-center p-8 rounded-3xl shadow-xl ${
      variant === 'front'
        ? 'bg-white dark:bg-slate-900 border-2 border-primary-100 dark:border-primary-900/30'
        : 'bg-primary-600 text-white'
    }`}
  >
    <p className={`text-xl font-bold ${variant === 'front' ? 'text-slate-800 dark:text-white' : ''}`}>{children}</p>
    {variant === 'front' && <p className="mt-4 text-slate-400 text-sm">Kattints a megfordításhoz</p>}
  </div>
);

const FlashcardPractice = () => {
  const { deckId } = useParams();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') === 'quiz' ? 'quiz' : 'flip';
  const { getDecks, getDeckCards, reviewCard } = useUserData();
  const deck = getDecks().find((d) => d.id === deckId);
  const allCards = getDeckCards(deckId);

  const [forceAll, setForceAll] = useState(false);
  const [session, setSession] = useState(() =>
    shuffleArray(allCards.filter((c) => isDue(c)))
  );
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [quizSelected, setQuizSelected] = useState(null);
  const [results, setResults] = useState([]);

  const current = session[index];
  const quizOptions = useMemo(() => {
    if (mode !== 'quiz' || !current) return [];
    const distractors = pickDistractors(current, allCards, 3);
    return shuffleArray([current.back, ...distractors]);
  }, [mode, current, allCards]);

  if (!deck) return <Navigate to="/flashcards" replace />;

  const startAll = () => {
    setSession(shuffleArray(allCards));
    setForceAll(true);
    setIndex(0);
    setIsFlipped(false);
    setResults([]);
  };

  const advance = (feedback) => {
    reviewCard(current.id, feedback);
    setResults((prev) => [...prev, feedback]);
    setIsFlipped(false);
    setQuizSelected(null);
    setIndex((i) => i + 1);
  };

  const handleQuizSelect = (option) => {
    if (quizSelected) return;
    setQuizSelected(option);
    const feedback = option === current.back ? 'easy' : 'hard';
    setTimeout(() => advance(feedback), 900);
  };

  if (session.length === 0 && !forceAll) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <Link
          to={`/flashcards/${deckId}`}
          className="inline-flex items-center text-sm text-slate-500 hover:text-primary-600 mb-6 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Vissza: {deck.name}
        </Link>
        <div className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            {allCards.length === 0 ? 'Ebben a paklban még nincs kártya.' : 'Nincs most esedékes kártya ebben a paklban.'}
          </p>
          {allCards.length > 0 && (
            <button
              onClick={startAll}
              className="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-colors"
            >
              Gyakorlás mégis (összes kártya)
            </button>
          )}
        </div>
      </div>
    );
  }

  if (index >= session.length) {
    const counts = results.reduce((acc, r) => ({ ...acc, [r]: (acc[r] || 0) + 1 }), {});
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <p className="text-2xl font-extrabold mb-2">Kész!</p>
          <p className="text-slate-600 dark:text-slate-400 mb-6">{session.length} kártyát gyakoroltál.</p>
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-900/10">
              <p className="text-xl font-bold text-red-600">{counts.hard || 0}</p>
              <p className="text-xs text-red-600">Nehéz</p>
            </div>
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10">
              <p className="text-xl font-bold text-amber-600">{counts.medium || 0}</p>
              <p className="text-xs text-amber-600">Közepes</p>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/10">
              <p className="text-xl font-bold text-emerald-600">{counts.easy || 0}</p>
              <p className="text-xs text-emerald-600">Könnyű</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={startAll}
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              <RotateCcw className="h-5 w-5 mr-2" /> Újra
            </button>
            <Link
              to={`/flashcards/${deckId}`}
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors"
            >
              Vissza: {deck.name}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <Link
        to={`/flashcards/${deckId}`}
        className="inline-flex items-center text-sm text-slate-500 hover:text-primary-600 mb-6 transition-colors"
      >
        <ChevronLeft className="h-4 w-4 mr-1" /> Vissza: {deck.name}
      </Link>

      <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
        <p className="font-bold">{mode === 'quiz' ? 'Felismerés (kvíz)' : 'Klasszikus mód'}</p>
        <span>
          {index + 1} / {session.length}
        </span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden mb-8">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transition-all"
          style={{ width: `${((index + 1) / session.length) * 100}%` }}
        />
      </div>

      {mode === 'flip' ? (
        <>
          <FlipCard
            className="w-full h-72"
            isFlipped={isFlipped}
            onFlip={() => setIsFlipped((f) => !f)}
            front={<FlipFace variant="front">{current.front}</FlipFace>}
            back={<FlipFace variant="back">{current.back}</FlipFace>}
          />
          {isFlipped && (
            <div className="grid grid-cols-3 gap-3 mt-8">
              {FEEDBACK_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => advance(opt.value)}
                  className={`px-4 py-3 rounded-xl font-bold text-sm transition-colors ${opt.className}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
          <p className="text-xl font-bold text-center mb-8">{current.front}</p>
          <div className="space-y-3">
            {quizOptions.map((option, i) => {
              const isCorrect = option === current.back;
              const isSelected = option === quizSelected;
              let stateClass = 'border-slate-200 dark:border-slate-800 hover:border-primary-300';
              if (quizSelected) {
                if (isCorrect) stateClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20';
                else if (isSelected) stateClass = 'border-red-500 bg-red-50 dark:bg-red-900/20';
              }
              return (
                <button
                  key={i}
                  onClick={() => handleQuizSelect(option)}
                  disabled={Boolean(quizSelected)}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-colors ${stateClass}`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardPractice;
