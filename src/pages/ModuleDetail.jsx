import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, Lock, Circle, Clock } from 'lucide-react';
import { getModuleById } from '../data/curriculum';
import { useUserData } from '../context/UserDataContext';
import { ModuleIcon } from '../lib/icons';

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const module = getModuleById(moduleId);
  const { canAccessChapter, isChapterComplete, getModuleProgress } = useUserData();

  if (!module) return <Navigate to="/tananyag" replace />;

  const progress = getModuleProgress(module.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        to="/tananyag"
        className="inline-flex items-center text-sm text-slate-500 hover:text-primary-600 mb-6 transition-colors"
      >
        <ChevronLeft className="h-4 w-4 mr-1" /> Vissza a modulokhoz
      </Link>

      <div className="flex items-center gap-5 mb-8">
        <div
          className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white shadow-lg shrink-0`}
        >
          <ModuleIcon name={module.icon} className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold mb-1">{module.title}</h1>
          <p className="text-slate-600 dark:text-slate-400">{module.description}</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm text-slate-500 mb-2">
          <span>Modul teljesítve</span>
          <span className="font-bold">{progress}%</span>
        </div>
        <div className="h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {module.chapters.map((chapter) => {
          const accessible = canAccessChapter(module.id, chapter.id);
          const done = isChapterComplete(module.id, chapter.id);

          return (
            <Link
              key={chapter.id}
              to={`/tananyag/${module.id}/${chapter.id}`}
              className={`flex items-center gap-4 p-5 rounded-2xl border transition-colors ${
                accessible
                  ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-primary-500'
                  : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-80'
              }`}
            >
              <div className="shrink-0">
                {done ? (
                  <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                ) : accessible ? (
                  <Circle className="h-6 w-6 text-slate-300 dark:text-slate-600" />
                ) : (
                  <Lock className="h-6 w-6 text-slate-400" />
                )}
              </div>
              <div className="flex-grow min-w-0">
                <p className="font-bold truncate">
                  {chapter.order}. {chapter.title}
                </p>
                <p className="text-xs text-slate-500 flex items-center mt-1">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  {chapter.estimatedMinutes} perc
                  {chapter.isFree && (
                    <span className="ml-2 px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 font-bold">
                      Ingyenes
                    </span>
                  )}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ModuleDetail;
