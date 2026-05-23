import React, { useState } from 'react';
import { Sparkles, Play, Clock, BookOpen, ChevronRight } from 'lucide-react';

const QUIZ_TOPICS = [
  { id: 1, name: 'Genetika alapjai', questions: 15, duration: '20 perc', level: 'Emelt' },
  { id: 2, name: 'Emberi keringési rendszer', questions: 10, duration: '15 perc', level: 'Közép' },
  { id: 3, name: 'Növényrendszertan', questions: 12, duration: '15 perc', level: 'Közép' },
  { id: 4, name: 'Biokémia és anyagcsere', questions: 20, duration: '30 perc', level: 'Emelt' },
];

const Quizzes = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 space-y-6 md:space-y-0">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">Kvízek</h1>
          <p className="text-slate-600 dark:text-slate-400">Teszteld a tudásod különböző témakörökben.</p>
        </div>
        
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-primary-500/20 transition-all transform hover:scale-105 disabled:opacity-70 disabled:scale-100"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Generálás...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              AI Kvíz Generálása
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {QUIZ_TOPICS.map((topic) => (
          <div 
            key={topic.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 flex items-center justify-between group hover:border-primary-500 transition-colors shadow-sm"
          >
            <div className="flex items-center space-x-5">
              <div className="h-16 w-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <BookOpen className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{topic.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {topic.duration}</span>
                  <span className="flex items-center"><BookOpen className="h-4 w-4 mr-1" /> {topic.questions} kérdés</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                    topic.level === 'Emelt' ? 'bg-red-50 text-red-600 dark:bg-red-900/10' : 'bg-green-50 text-green-600 dark:bg-green-900/10'
                  }`}>
                    {topic.level}
                  </span>
                </div>
              </div>
            </div>
            <button className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all">
              <Play className="h-5 w-5 ml-1" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-4">Saját tananyag alapján szeretnél kvízt?</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">
          Töltsd fel a jegyzeteidet PDF-ben vagy másolj be egy szöveget, és a BioSiker AI rendszere 
          azonnal összeállít neked egy egyedi feladatsort a legfontosabb összefüggések alapján.
        </p>
        <div className="flex items-center space-x-4">
          <button className="px-6 py-3 rounded-xl border-2 border-primary-600 text-primary-600 font-bold hover:bg-primary-50 transition-colors">
            Szöveg beillesztése
          </button>
          <button className="px-6 py-3 rounded-xl border-2 border-primary-600 text-primary-600 font-bold hover:bg-primary-50 transition-colors">
            PDF feltöltése
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
