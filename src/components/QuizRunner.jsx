import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, ChevronLeft, RotateCcw } from 'lucide-react';
import { prepareQuiz } from '../lib/quizUtils';

// A `pool`-t és a `count`-ot kapja meg a kérdéshalmaz elő-kikeverése helyett,
// hogy az "Újra próbálom" gomb ténylegesen új, friss random húzást tudjon
// indítani a teljes bankból - ne csak ugyanazt a 10 kérdést jelenítse meg újra.
const QuizRunner = ({ title, pool, count, backTo, backLabel }) => {
  const [questions, setQuestions] = useState(() => prepareQuiz(pool, count));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const restart = () => {
    setQuestions(prepareQuiz(pool, count));
    setIndex(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  };

  if (questions.length === 0) return null;

  if (finished) {
    const correctCount = answers.filter((a, i) => a === questions[i].correctIndex).length;
    const percent = Math.round((correctCount / questions.length) * 100);

    return (
      <div>
        <div className="text-center mb-10 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <p className="text-sm font-bold text-slate-500 mb-2">Eredmény</p>
          <p className="text-5xl font-extrabold mb-2">{percent}%</p>
          <p className="text-slate-600 dark:text-slate-400">
            {correctCount} / {questions.length} helyes válasz
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {questions.map((q, i) => {
            const userAnswer = answers[i];
            const isCorrect = userAnswer === q.correctIndex;
            return (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-start gap-3 mb-3">
                  {isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  )}
                  <p className="font-bold">{q.question}</p>
                </div>
                <div className="ml-8 space-y-1 text-sm mb-3">
                  {q.options.map((option, oi) => {
                    const isUser = oi === userAnswer;
                    const isRight = oi === q.correctIndex;
                    return (
                      <p
                        key={oi}
                        className={
                          isRight
                            ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                            : isUser
                              ? 'text-red-600 dark:text-red-400 font-bold'
                              : 'text-slate-500'
                        }
                      >
                        {isRight ? '✓' : isUser ? '✗' : '·'} {option}
                      </p>
                    );
                  })}
                </div>
                <p className="ml-8 text-sm text-slate-600 dark:text-slate-400 italic">{q.explanation}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={restart}
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Újra próbálom
          </button>
          {backTo && (
            <Link
              to={backTo}
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors"
            >
              Vissza{backLabel ? `: ${backLabel}` : ''}
            </Link>
          )}
        </div>
      </div>
    );
  }

  const current = questions[index];
  const isLast = index === questions.length - 1;

  const handleNext = () => {
    const nextAnswers = [...answers, selected];
    setAnswers(nextAnswers);
    setSelected(null);
    if (isLast) {
      setFinished(true);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      {backTo && (
        <Link
          to={backTo}
          className="inline-flex items-center text-sm text-slate-500 hover:text-primary-600 mb-6 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Vissza{backLabel ? `: ${backLabel}` : ''}
        </Link>
      )}

      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
          <p className="font-bold">{title}</p>
          <span>
            {index + 1} / {questions.length}
          </span>
        </div>
        <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transition-all"
            style={{ width: `${((index + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6">
        <p className="text-lg font-bold mb-6">{current.question}</p>
        <div className="space-y-3">
          {current.options.map((option, oi) => (
            <button
              key={oi}
              onClick={() => setSelected(oi)}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-colors ${
                selected === oi
                  ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 font-bold'
                  : 'border-slate-200 dark:border-slate-800 hover:border-primary-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={selected === null}
        className="w-full sm:w-auto flex items-center justify-center px-8 py-3 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLast ? 'Kiértékelés' : 'Következő kérdés'}
      </button>
    </div>
  );
};

export default QuizRunner;
