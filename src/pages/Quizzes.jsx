import { useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertTriangle, ChevronRight, HelpCircle, Lock, Shuffle, Trophy } from 'lucide-react';
import { CURRICULUM } from '../data/curriculum';
import { chapterHasQuiz, getChapterQuizBank, getModuleQuizBank, moduleHasQuiz } from '../data/quizzes';
import { useUserData } from '../context/UserDataContext';
import { scoreColorClasses } from '../lib/quizUtils';
import { ModuleIcon } from '../lib/icons';
import QuizSideNav from '../components/QuizSideNav';

const LEVEL_OPTIONS = [
  { value: 'kozep', label: 'Középszint' },
  { value: 'emelt', label: 'Emeltszint' },
  { value: 'mind', label: 'Mind' },
];

const PRACTICE_COUNTS = [10, 15, 20];

const filterByLevel = (bank, level) => (level === 'mind' ? bank : bank.filter((q) => q.level === level));

const ScoreBadge = ({ result }) => {
  if (!result) {
    return (
      <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 whitespace-nowrap">
        Még nem próbáltad
      </span>
    );
  }
  return (
    <div className="flex flex-col items-end gap-0.5">
      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap ${scoreColorClasses(result.best)}`}>
        Legjobb: {result.best}%
      </span>
      {result.last !== result.best && (
        <span className="text-[11px] text-slate-400 whitespace-nowrap">legutóbb: {result.last}%</span>
      )}
    </div>
  );
};

const ChapterQuizRow = ({ moduleId, chapter, accessible, result }) => (
  <Link
    to={`/tananyag/${moduleId}/${chapter.id}/kviz`}
    className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors ${
      accessible
        ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-primary-500'
        : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-80'
    }`}
  >
    <div className="shrink-0 h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary-600 dark:text-primary-400">
      {accessible ? <HelpCircle className="h-5 w-5" /> : <Lock className="h-5 w-5 text-slate-400" />}
    </div>
    <div className="flex-grow min-w-0">
      <p className="font-bold truncate">
        {chapter.order}. {chapter.title}
      </p>
    </div>
    <div className="shrink-0">
      {accessible ? (
        <ScoreBadge result={result} />
      ) : (
        <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 whitespace-nowrap">
          Előfizetéshez kötött
        </span>
      )}
    </div>
  </Link>
);

const ModuleQuizRow = ({ module, locked, result }) => (
  <Link
    to={`/tananyag/${module.id}/kviz`}
    className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg hover:shadow-primary-500/20 transition-all"
  >
    <div className="shrink-0 h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center">
      <Trophy className="h-5 w-5" />
    </div>
    <div className="flex-grow min-w-0">
      <p className="font-bold">Modulzáró teszt</p>
      <p className="text-xs text-white/80">Összefoglaló kérdések a teljes modulból</p>
    </div>
    <div className="shrink-0">
      {locked ? (
        <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white/15 whitespace-nowrap">
          Előfizetéshez kötött
        </span>
      ) : result ? (
        <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white/15 whitespace-nowrap">
          Legjobb: {result.best}%
        </span>
      ) : (
        <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white/15 whitespace-nowrap">
          Még nem próbáltad
        </span>
      )}
    </div>
  </Link>
);

const Quizzes = () => {
  const navigate = useNavigate();
  const { examLevel, canAccessChapter, isPremium, getQuizResult } = useUserData();
  const [levelFilter, setLevelFilter] = useState(examLevel);
  const [practiceScope, setPracticeScope] = useState('all');
  const [practiceCount, setPracticeCount] = useState(15);
  const moduleRefs = useRef({});

  const scrollToModule = (moduleId) => {
    moduleRefs.current[moduleId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const startPractice = () => {
    navigate(`/quizzes/gyakorlas?scope=${practiceScope}&count=${practiceCount}&level=${levelFilter}`);
  };

  const weakChapters = useMemo(() => {
    const result = [];
    for (const module of CURRICULUM) {
      for (const chapter of module.chapters) {
        if (!chapterHasQuiz(chapter.id)) continue;
        const quizResult = getQuizResult(chapter.id);
        if (quizResult && quizResult.best < 60) {
          result.push({ moduleId: module.id, chapter, result: quizResult });
        }
      }
    }
    return result;
  }, [getQuizResult]);

  return (
    <>
      <QuizSideNav onNavigate={scrollToModule} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold mb-2">Kvízek</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Teszteld a tudásod fejezetenként, modulzáró tesztekkel, vagy indíts egy vegyes gyakorló kört.
          </p>
        </div>

        <div className="mb-8 inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
          {LEVEL_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setLevelFilter(opt.value)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                levelFilter === opt.value
                  ? 'bg-white dark:bg-slate-900 shadow text-primary-600'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="mb-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary-600 to-blue-600 text-white shadow-lg">
          <div className="flex items-start gap-4 mb-6">
            <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
              <Shuffle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-1">Napi gyakorlás</h2>
              <p className="text-white/80 text-sm">
                Vegyes kérdéssor több fejezet kérdésbankjából - válaszd ki a kört és a kérdésszámot.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={practiceScope}
              onChange={(e) => setPracticeScope(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-white/15 text-white font-bold text-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 [&>option]:text-slate-900"
            >
              <option value="all">Teljes tananyag</option>
              {CURRICULUM.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.title}
                </option>
              ))}
            </select>
            <select
              value={practiceCount}
              onChange={(e) => setPracticeCount(Number(e.target.value))}
              className="px-4 py-2.5 rounded-xl bg-white/15 text-white font-bold text-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 [&>option]:text-slate-900"
            >
              {PRACTICE_COUNTS.map((c) => (
                <option key={c} value={c}>
                  {c} kérdés
                </option>
              ))}
            </select>
            <button
              onClick={startPractice}
              className="ml-auto flex items-center px-6 py-2.5 rounded-xl bg-white text-primary-700 font-bold hover:bg-white/90 transition-colors"
            >
              Indítás
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>

        {weakChapters.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <h2 className="text-lg font-bold">Ezeket érdemes átnézned</h2>
            </div>
            <div className="space-y-3">
              {weakChapters.map(({ moduleId, chapter, result }) => (
                <ChapterQuizRow
                  key={chapter.id}
                  moduleId={moduleId}
                  chapter={chapter}
                  accessible={canAccessChapter(moduleId, chapter.id)}
                  result={result}
                />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-12">
          {CURRICULUM.map((module) => {
            const chapters = module.chapters.filter((chapter) => {
              if (!chapterHasQuiz(chapter.id)) return false;
              return filterByLevel(getChapterQuizBank(chapter.id), levelFilter).length > 0;
            });
            const hasModuleQuiz =
              moduleHasQuiz(module) && filterByLevel(getModuleQuizBank(module), levelFilter).length > 0;
            const hasLockedChapter = module.chapters.some((c) => !c.isFree);

            if (chapters.length === 0 && !hasModuleQuiz) return null;

            return (
              <div
                key={module.id}
                ref={(el) => {
                  moduleRefs.current[module.id] = el;
                }}
                className="scroll-mt-24"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`h-9 w-9 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white shrink-0`}
                  >
                    <ModuleIcon name={module.icon} className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold">{module.title}</h2>
                </div>
                <div className="space-y-3">
                  {chapters.map((chapter) => (
                    <ChapterQuizRow
                      key={chapter.id}
                      moduleId={module.id}
                      chapter={chapter}
                      accessible={canAccessChapter(module.id, chapter.id)}
                      result={getQuizResult(chapter.id)}
                    />
                  ))}
                  {hasModuleQuiz && (
                    <ModuleQuizRow
                      module={module}
                      locked={hasLockedChapter && !isPremium}
                      result={getQuizResult(`module:${module.id}`)}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Quizzes;
