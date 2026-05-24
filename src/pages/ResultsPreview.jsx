import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, CheckCircle2, XCircle, Sparkles, 
  ArrowRight, BookOpen, Clock, Target, 
  ChevronRight, Brain, Zap, MessageSquare, Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ResultsPreview = () => {
  const score = 88;
  const correct = 44;
  const total = 50;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 text-yellow-600 mb-6"
        >
          <Trophy size={40} />
        </motion.div>
        <h1 className="text-4xl font-black mb-2">Szép munka, Bence!</h1>
        <p className="text-slate-500">A mai kvízt sikeresen teljesítetted.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 text-center shadow-xl shadow-slate-200/50 dark:shadow-none">
          <div className="text-sm font-bold text-slate-400 uppercase mb-2">Pontszám</div>
          <div className="text-5xl font-black text-primary-600">{score}%</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 text-center shadow-xl shadow-slate-200/50 dark:shadow-none">
          <div className="text-sm font-bold text-slate-400 uppercase mb-2">Helyes válasz</div>
          <div className="text-5xl font-black text-blue-600">{correct}/{total}</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 text-center shadow-xl shadow-slate-200/50 dark:shadow-none">
          <div className="text-sm font-bold text-slate-400 uppercase mb-2">Idő</div>
          <div className="text-5xl font-black text-orange-600">12:45</div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center">
          <Sparkles className="mr-2 text-primary-500" /> AI Elemzés és Magyarázatok
        </h2>
        
        <div className="bg-slate-900 rounded-[2rem] p-8 text-white">
          <div className="flex items-start space-x-4">
             <div className="p-3 rounded-2xl bg-primary-500/20 text-primary-400 shrink-0">
               <Brain size={24} />
             </div>
             <div>
               <h3 className="text-lg font-bold mb-2">Tanulási javaslat</h3>
               <p className="text-slate-300 leading-relaxed mb-4">
                 A mai kvíz alapján az emésztőrendszer és a hormonális szabályozás témakörei stabilak. 
                 Azonban a **neuronok akciós potenciáljával** kapcsolatos kérdéseknél bizonytalanságot észleltem.
               </p>
               <div className="flex space-x-2">
                 <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold transition-all">
                   Kapcsolódó kártyák
                 </button>
                 <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg text-sm font-bold transition-all">
                   Gyakorlás indítása
                 </button>
               </div>
             </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
           <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                 <XCircle className="text-red-500" size={20} />
                 <span className="font-bold">Hibás válasz az 5. kérdésnél</span>
              </div>
              <Badge className="bg-red-50 text-red-600">Genetika</Badge>
           </div>
           <div className="p-8">
              <p className="font-bold text-lg mb-6">Melyik folyamat jellemző a meiózis első főszakaszának profázisára?</p>
              
              <div className="space-y-3 mb-8">
                 <div className="p-4 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/10 flex justify-between items-center">
                    <span className="text-red-700 dark:text-red-400 font-medium">A kromatidák elválása</span>
                    <span className="text-xs font-bold uppercase text-red-500">Te választásod</span>
                 </div>
                 <div className="p-4 rounded-xl border border-green-200 bg-green-50 dark:bg-green-900/10 flex justify-between items-center">
                    <span className="text-green-700 dark:text-green-400 font-bold">A homológ kromoszómák párosodása (crossing over)</span>
                    <span className="text-xs font-bold uppercase text-green-500">Helyes válasz</span>
                 </div>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                 <div className="flex items-center text-primary-600 dark:text-primary-400 font-bold text-sm mb-3">
                    <MessageSquare size={16} className="mr-2" /> AI Magyarázat
                 </div>
                 <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    A meiózis I. profázisában történik a legfontosabb esemény: a homológ kromoszómák párosodása és a crossing over (génkicserélődés). 
                    A kromatidák elválása csak a meiózis II. anafázisában (vagy a mitózis anafázisában) történik meg.
                 </p>
              </div>
           </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
         <Link to="/quizzes" className="flex items-center font-bold text-primary-600 hover:text-primary-700">
            Vissza a kvízekhez <ChevronRight size={20} />
         </Link>
      </div>
    </div>
  );
};

const Badge = ({ children, className }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${className}`}>
    {children}
  </span>
);

export default ResultsPreview;
