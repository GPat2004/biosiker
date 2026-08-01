import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getModuleById, getChapterById } from '../data/curriculum';
import { getChapterQuizBank } from '../data/quizzes';
import { useUserData } from '../context/UserDataContext';
import { prepareQuiz } from '../lib/quizUtils';
import QuizRunner from '../components/QuizRunner';

const CHAPTER_QUIZ_COUNT = 10;

const ChapterQuiz = () => {
  const { moduleId, chapterId } = useParams();
  const module = getModuleById(moduleId);
  const chapter = getChapterById(moduleId, chapterId);
  const { examLevel, canAccessChapter } = useUserData();

  const bank = getChapterQuizBank(chapterId);
  const pool = examLevel === 'emelt' ? bank : bank.filter((q) => q.level === 'kozep');

  const [quiz] = useState(() => prepareQuiz(pool, CHAPTER_QUIZ_COUNT));

  if (!module || !chapter) return <Navigate to="/tananyag" replace />;
  if (!canAccessChapter(moduleId, chapterId)) {
    return <Navigate to={`/tananyag/${moduleId}/${chapterId}`} replace />;
  }
  if (pool.length === 0) return <Navigate to={`/tananyag/${moduleId}/${chapterId}`} replace />;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <QuizRunner
        title={`${chapter.title} - kvíz`}
        questions={quiz}
        backTo={`/tananyag/${moduleId}/${chapterId}`}
        backLabel={chapter.title}
      />
    </div>
  );
};

export default ChapterQuiz;
