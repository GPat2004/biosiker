import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getModuleById, getChapterById } from '../data/curriculum';
import { getChapterQuizBank } from '../data/quizzes';
import { useUserData } from '../context/UserDataContext';
import QuizRunner from '../components/QuizRunner';

const CHAPTER_QUIZ_COUNT = 10;

const ChapterQuiz = () => {
  const { moduleId, chapterId } = useParams();
  const module = getModuleById(moduleId);
  const chapter = getChapterById(moduleId, chapterId);
  const { examLevel, canAccessChapter } = useUserData();

  const bank = useMemo(() => getChapterQuizBank(chapterId), [chapterId]);
  const pool = useMemo(
    () => (examLevel === 'emelt' ? bank : bank.filter((q) => q.level === 'kozep')),
    [bank, examLevel]
  );

  if (!module || !chapter) return <Navigate to="/tananyag" replace />;
  if (!canAccessChapter(moduleId, chapterId)) {
    return <Navigate to={`/tananyag/${moduleId}/${chapterId}`} replace />;
  }
  if (pool.length === 0) return <Navigate to={`/tananyag/${moduleId}/${chapterId}`} replace />;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <QuizRunner
        title={`${chapter.title} - kvíz`}
        pool={pool}
        count={CHAPTER_QUIZ_COUNT}
        backTo={`/tananyag/${moduleId}/${chapterId}`}
        backLabel={chapter.title}
        quizKey={chapterId}
      />
    </div>
  );
};

export default ChapterQuiz;
