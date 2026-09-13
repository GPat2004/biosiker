import { useMemo } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Info } from 'lucide-react';
import { CURRICULUM, getModuleById } from '../data/curriculum';
import { getChapterQuizBank } from '../data/quizzes';
import { useUserData } from '../context/UserDataContext';
import QuizRunner from '../components/QuizRunner';

// Vegyes gyakorló kvíz: a `scope` (modul id vagy "all") és `level`
// ("kozep" | "emelt" | "mind") query paraméterek alapján több fejezet
// kérdésbankjából állít össze egy közös húzókeretet. Az eredmény nem
// kerül mentésre fejezetenkénti progresszként (a QuizRunner `quizKey`
// nélkül hívva) - ez egy gyakorló kör, nem egy adott fejezet mérőszáma.
const DailyPractice = () => {
  const [searchParams] = useSearchParams();
  const scope = searchParams.get('scope') || 'all';
  const count = Number(searchParams.get('count')) || 15;
  const level = searchParams.get('level') || 'kozep';
  const { canAccessChapter } = useUserData();

  const module = scope !== 'all' ? getModuleById(scope) : null;

  const { pool, skippedCount } = useMemo(() => {
    const chapters =
      scope === 'all'
        ? CURRICULUM.flatMap((m) => m.chapters.map((chapter) => ({ chapter, moduleId: m.id })))
        : (module?.chapters.map((chapter) => ({ chapter, moduleId: module.id })) ?? []);

    const accessible = chapters.filter(({ chapter, moduleId }) => canAccessChapter(moduleId, chapter.id));
    const questions = accessible.flatMap(({ chapter }) => {
      const bank = getChapterQuizBank(chapter.id);
      return level === 'mind' ? bank : bank.filter((q) => q.level === level);
    });
    return { pool: questions, skippedCount: chapters.length - accessible.length };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope, level, module?.id, canAccessChapter]);

  if (scope !== 'all' && !module) {
    return <Navigate to="/quizzes" replace />;
  }

  const title = scope === 'all' ? 'Napi gyakorlás - teljes tananyag' : `Napi gyakorlás - ${module.title}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {pool.length === 0 ? (
        <div>
          <Link
            to="/quizzes"
            className="inline-flex items-center text-sm text-slate-500 hover:text-primary-600 mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Vissza: Kvízek
          </Link>
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              Ehhez a beállításhoz jelenleg nincs elérhető kérdés. Próbálj más szintet vagy kört választani.
            </p>
          </div>
        </div>
      ) : (
        <>
          {skippedCount > 0 && (
            <div className="flex items-start gap-2 p-4 mb-6 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 text-amber-700 dark:text-amber-400 text-sm">
              <Info className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{skippedCount} fejezet kimaradt a válogatásból, mert előfizetéshez kötött.</span>
            </div>
          )}
          <QuizRunner title={title} pool={pool} count={count} backTo="/quizzes" backLabel="Kvízek" />
        </>
      )}
    </div>
  );
};

export default DailyPractice;
