import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Brain, Target, Star, 
  CheckCircle2, Sparkles, GraduationCap 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  
  const steps = [
    {
      title: "Milyen szintű vizsgára készülsz?",
      options: ["Középszintű érettségi", "Emelt szintű érettségi", "Gyógyszerészeti egyetemi vizsga"],
      icon: <GraduationCap className="w-12 h-12 text-primary-500" />
    },
    {
      title: "Melyik témakör megy a legnehezebben?",
      options: ["Genetika", "Embertani élettan", "Biokémia", "Ökológia"],
      icon: <Brain className="w-12 h-12 text-orange-500" />
    },
    {
      title: "Mi a célod a vizsgán?",
      options: ["Csak menjen át (2-es)", "Jó eredmény (4-es)", "Maximum pontszám (5-ös)", "100% (Versenyistálló)"],
      icon: <Target className="w-12 h-12 text-blue-500" />
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/register');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-slate-100 dark:bg-slate-800">
           <motion.div 
             className="h-full bg-primary-500"
             animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
           />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-8 p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50">
              {steps[step].icon}
            </div>
            
            <h2 className="text-3xl font-black mb-8 leading-tight">
              {steps[step].title}
            </h2>

            <div className="grid grid-cols-1 gap-4 w-full">
              {steps[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={handleNext}
                  className="w-full py-5 px-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 text-left font-bold transition-all flex justify-between items-center group"
                >
                  <span>{opt}</span>
                  <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-primary-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-10 flex items-center space-x-2 text-slate-400 text-sm font-medium">
              <Sparkles size={16} />
              <span>AI-alapú tanulási terv generálása...</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Onboarding;
