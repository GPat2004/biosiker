import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Lock } from 'lucide-react';
import { CURRICULUM } from '../data/curriculum';
import { useUserData } from '../context/UserDataContext';
import { ModuleIcon } from '../lib/icons';

const ModuleCard = ({ module }) => {
  const { getModuleProgress } = useUserData();
  const progress = getModuleProgress(module.id);
  const freeChapters = module.chapters.filter((c) => c.isFree).length;

  return (
    <Link
      to={`/tananyag/${module.id}`}
      className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:border-primary-500 transition-colors shadow-sm flex flex-col"
    >
      <div
        className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white mb-5 shadow-lg`}
      >
        <ModuleIcon name={module.icon} className="h-7 w-7" />
      </div>

      <h3 className="text-xl font-bold mb-1">{module.title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 flex-grow">
        {module.description}
      </p>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>{module.chapters.length} fejezet</span>
          <span>{progress}% kész</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-500 flex items-center">
          {freeChapters > 0 ? (
            <>
              <CheckCircle2 className="h-4 w-4 mr-1 text-emerald-500" />
              {freeChapters} ingyenes fejezet
            </>
          ) : (
            <>
              <Lock className="h-4 w-4 mr-1" />
              Előfizetéshez kötött
            </>
          )}
        </span>
        <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
};

const Curriculum = () => {
  const { isPremium, xp, streak, examLevel, setExamLevel } = useUserData();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">Tananyag</h1>
          <p className="text-slate-600 dark:text-slate-400">
            A teljes érettségi tananyag modulokra és fejezetekre bontva.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-bold">
            🔥 {streak.current} napos sorozat
          </div>
          <div className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-bold">
            ⚡ {xp} XP
          </div>
        </div>
      </div>

      <div className="mb-8 inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
        <button
          onClick={() => setExamLevel('kozep')}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
            examLevel === 'kozep'
              ? 'bg-white dark:bg-slate-900 shadow text-primary-600'
              : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          Középszint
        </button>
        <button
          onClick={() => setExamLevel('emelt')}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
            examLevel === 'emelt'
              ? 'bg-white dark:bg-slate-900 shadow text-primary-600'
              : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          Emelt szint
        </button>
      </div>

      {!isPremium && (
        <div className="mb-10 p-5 rounded-2xl bg-primary-50 dark:bg-primary-900/10 border border-primary-200 dark:border-primary-900/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Jelenleg <span className="font-bold">ingyenes csomaggal</span> tanulsz — minden
            modul első fejezete elérhető. Iratkozz fel a teljes tananyaghoz.
          </p>
          <Link
            to="/pricing"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors text-sm text-center"
          >
            Előfizetési csomagok
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CURRICULUM.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
