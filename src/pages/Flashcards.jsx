import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw, Check, X } from 'lucide-react';

const MOCK_FLASHCARDS = [
  {
    id: 1,
    question: "Mi a sejt energiatermelő központja?",
    answer: "A mitokondrium. Itt zajlik a sejtlégzés és az ATP szintézis nagy része.",
    category: "Sejttan"
  },
  {
    id: 2,
    question: "Melyik vitamin hiánya okoz skorbutot?",
    answer: "A C-vitamin (aszkorbinsav) hiánya.",
    category: "Élettan"
  },
  {
    id: 3,
    question: "Mi a DNS teljes neve?",
    answer: "Dezoxiribonukleinsav.",
    category: "Molekuláris biológia"
  },
  {
    id: 4,
    question: "Hány vérköre van az embernek?",
    answer: "Kettő: a kis vérkör (tüdő) és a nagy vérkör (test).",
    category: "Élettan"
  }
];

const Flashcard = ({ card, isFlipped, onFlip }) => {
  return (
    <div 
      className="relative w-full h-80 cursor-pointer perspective-1000"
      onClick={onFlip}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white dark:bg-slate-900 border-2 border-primary-100 dark:border-primary-900/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl">
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider">
            {card.category}
          </span>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            {card.question}
          </h2>
          <p className="mt-4 text-slate-400 text-sm">Kattints a megfordításhoz</p>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-primary-600 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl text-white"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h2 className="text-xl font-medium leading-relaxed">
            {card.answer}
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextCard = () => {
    setDirection(1);
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % MOCK_FLASHCARDS.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + MOCK_FLASHCARDS.length) % MOCK_FLASHCARDS.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Tanulókártyák</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Gyakorolj az alapfogalmakat interaktív módon.
        </p>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 50 }}
            transition={{ duration: 0.2 }}
          >
            <Flashcard 
              card={MOCK_FLASHCARDS[currentIndex]} 
              isFlipped={isFlipped}
              onFlip={() => setIsFlipped(!isFlipped)}
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center mt-10 space-x-6">
          <button
            onClick={prevCard}
            className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="text-slate-500 font-medium">
            {currentIndex + 1} / {MOCK_FLASHCARDS.length}
          </div>

          <button
            onClick={nextCard}
            className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 text-center">
          <div className="text-2xl font-bold text-green-600">12</div>
          <div className="text-sm text-green-700 dark:text-green-400">Tudom</div>
        </div>
        <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20 text-center">
          <div className="text-2xl font-bold text-orange-600">5</div>
          <div className="text-sm text-orange-700 dark:text-orange-400">Még tanulom</div>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-center">
          <div className="text-2xl font-bold text-slate-600">24</div>
          <div className="text-sm text-slate-500">Összes kártya</div>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
