import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getModuleById } from '../data/curriculum';
import { getModuleQuizBank } from '../data/quizzes';
import { useUserData } from '../context/UserDataContext';
import QuizRunner from '../components/QuizRunner';
import PaywallGate from '../components/PaywallGate';

const MODULE_QUIZ_COUNT = 30;

const ModuleQuiz = () => {
  const { moduleId } = useParams();
  const module = getModuleById(moduleId);
  const { examLevel, isPremium } = useUserData();

  const bank = useMemo(() => getModuleQuizBank(module), [module]);
  const pool = useMemo(
    () => (examLevel === 'emelt' ? bank : bank.filter((q) => q.level === 'kozep')),
    [bank, examLevel]
  );
  const hasLockedChapter = module?.chapters.some((chapter) => !chapter.isFree) ?? false;

  if (!module) return <Navigate to="/tananyag" replace />;
  if (pool.length === 0) return <Navigate to={`/tananyag/${moduleId}`} replace />;

  if (hasLockedChapter && !isPremium) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <PaywallGate chapterTitle={`${module.title} - modulzáró teszt`} />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <QuizRunner
        title={`${module.title} - modulzáró teszt`}
        pool={pool}
        count={MODULE_QUIZ_COUNT}
        backTo={`/tananyag/${moduleId}`}
        backLabel={module.title}
      />
    </div>
  );
};

export default ModuleQuiz;
