import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, Clock, ChevronRight } from 'lucide-react';
import { getModuleById, getChapterById } from '../data/curriculum';
import { useUserData } from '../context/UserDataContext';
import PaywallGate from '../components/PaywallGate';

const ChapterView = () => {
  const { moduleId, chapterId } = useParams();
  const module = getModuleById(moduleId);
  const chapter = getChapterById(moduleId, chapterId);
  const { canAccessChapter, isChapterComplete, markChapterComplete } = useUserData();

  if (!module || !chapter) return <Navigate to="/tananyag" replace />;

  const accessible = canAccessChapter(moduleId, chapterId);
  const done = isChapterComplete(moduleId, chapterId);

  const currentIndex = module.chapters.findIndex((c) => c.id === chapterId);
  const nextChapter = module.chapters[currentIndex + 1];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        to={`/tananyag/${moduleId}`}
        className="inline-flex items-center text-sm text-slate-500 hover:text-primary-600 mb-6 transition-colors"
      >
        <ChevronLeft className="h-4 w-4 mr-1" /> Vissza: {module.title}
      </Link>

      <div className="mb-8">
        <p className="text-sm font-bold text-primary-600 mb-2">{module.title}</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{chapter.title}</h1>
        <div className="flex items-center text-sm text-slate-500">
          <Clock className="h-4 w-4 mr-1" />
          {chapter.estimatedMinutes} perc olvasás
        </div>
      </div>

      {!accessible ? (
        <PaywallGate chapterTitle={chapter.title} />
      ) : chapter.content?.comingSoon ? (
        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            Ennek a fejezetnek a tartalma jelenleg fejlesztés alatt áll. Hamarosan elérhető
            lesz!
          </p>
        </div>
      ) : (
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
            {chapter.content.intro}
          </p>

          {chapter.content.sections.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-xl font-bold mb-3">{section.heading}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}

          {chapter.content.keyTerms && (
            <div className="mt-8 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-bold mb-3">Kulcsfogalmak</p>
              <div className="flex flex-wrap gap-2">
                {chapter.content.keyTerms.map((term) => (
                  <span
                    key={term}
                    className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {accessible && !chapter.content?.comingSoon && (
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={() => markChapterComplete(moduleId, chapterId)}
            disabled={done}
            className={`w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all ${
              done
                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 cursor-default'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            <CheckCircle2 className="h-5 w-5 mr-2" />
            {done ? 'Fejezet teljesítve' : 'Megjelölés elvégzettként'}
          </button>

          {nextChapter && (
            <Link
              to={`/tananyag/${moduleId}/${nextChapter.id}`}
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              Következő fejezet
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ChapterView;
