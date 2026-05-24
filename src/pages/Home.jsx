import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, CheckCircle2, ChevronRight, Brain, Zap, 
  Target, GraduationCap, Flame, ArrowRight, ShieldCheck, 
  Lightbulb, Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Sub-components ---

const Badge = ({ children, className }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${className}`}>
    {children}
  </span>
);

const DemoQuiz = () => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = {
    text: "Melyik sejtalkotó felelős az elsődleges fehérjeszintézisért?",
    options: [
      { id: 'a', text: "Mitokondrium" },
      { id: 'b', text: "Riboszóma", correct: true },
      { id: 'c', text: "Lizooszóma" },
      { id: 'd', text: "Golgi-készülék" }
    ],
    explanation: "A riboszómák a sejt 'fehérjegyárai'. Itt történik a mRNS-ről történő transzláció, azaz a fehérjék aminosavakból való felépítése.",
    aiProTip: "Érettségi tipp: A riboszómák szabadon is lehetnek a citoplazmában, vagy a durva felszínű endoplazmatikus retikulumhoz (DER) kötődve."
  };

  const handleSelect = (option) => {
    if (selectedOption) return;
    setSelectedOption(option);
    setTimeout(() => setShowExplanation(true), 600);
  };

  return (
    <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white">
            <Sparkles size={18} />
          </div>
          <span className="font-bold text-sm">AI Demo Kvíz</span>
        </div>
        <div className="flex items-center space-x-4">
           <div className="flex items-center text-orange-500 font-bold text-sm">
             <Flame size={16} className="mr-1" /> 3 napos streak
           </div>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-xl font-bold mb-6 leading-tight">{question.text}</h3>
        
        <div className="space-y-3">
          {question.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt)}
              className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex justify-between items-center group ${
                selectedOption?.id === opt.id 
                  ? opt.correct 
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                    : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'border-slate-100 dark:border-slate-800 hover:border-primary-400 dark:hover:border-primary-600'
              }`}
            >
              <span className="font-medium">{opt.text}</span>
              {selectedOption?.id === opt.id && (
                opt.correct ? <CheckCircle2 className="text-green-500" /> : <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center text-[10px] font-bold text-red-500">X</div>
              )}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showExplanation && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800"
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 mb-4">
                <div className="flex items-center text-blue-700 dark:text-blue-400 font-bold text-sm mb-1">
                  <Info size={16} className="mr-2" /> Miért ez a helyes?
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {question.explanation}
                </p>
              </div>

              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-4 border border-primary-100 dark:border-primary-900/30">
                <div className="flex items-center text-primary-700 dark:text-primary-400 font-bold text-sm mb-1">
                  <Lightbulb size={16} className="mr-2" /> AI Extra Tipp
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                  {question.aiProTip}
                </p>
              </div>
              
              <Link 
                to="/register"
                className="mt-6 w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold flex items-center justify-center transition-all"
              >
                Folytatás AI kvízzel <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="px-8 pb-6 text-center">
        <p className="text-xs text-slate-400">Próbáld ki regisztráció nélkül!</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 pt-20 pb-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-200/40 dark:bg-primary-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <Badge className="bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300 mb-6 inline-flex items-center">
              <Sparkles size={14} className="mr-2" /> Érettségi felkészítés 2.0
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              Tanulj biológiát <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                okosabban, 
              </span> <br />
              ne többet.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              A BioSiker az első magyar platform, ami személyre szabott AI-mentorral készít fel az érettségire. 
              Gyakorolj, mérd a haladásod, és érd el a 100%-ot.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Link
                  to="/onboarding"
                  className="px-8 py-5 rounded-2xl bg-primary-600 text-white font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 hover:scale-105 flex items-center justify-center"
                >
                  Ingyenes AI Kvíz <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              <div className="flex items-center space-x-4 px-4 py-2">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  <span className="text-slate-900 dark:text-white font-bold">1,200+</span> diák tanul itt
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <DemoQuiz />
          </motion.div>
        </div>
      </section>

      {/* Feature Grid with Progress visualization */}
      <section className="w-full bg-slate-50 dark:bg-slate-900/50 py-24 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Miért válaszd a BioSikert?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">A hagyományos tankönyvek helyett interaktív élményt kínálunk.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Személyre szabott AI</h3>
              <p className="text-slate-500 leading-relaxed">Az AI felismeri a gyenge pontjaidat, és célzottan azokat a kérdéseket adja fel neked többször.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vizsga szimuláció</h3>
              <p className="text-slate-500 leading-relaxed">Gyakorolj valódi, korábbi érettségi feladatsorokon időre, hogy ne érjen meglepetés.</p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Garancia a sikerre</h3>
              <p className="text-slate-500 leading-relaxed">Statisztikáink szerint a BioSiker diákjai átlagosan 25%-kal jobb eredményt érnek el.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Showcase Section */}
      <section className="w-full py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Mérd a fejlődésed valós időben</h2>
            <div className="space-y-6">
              {[
                { label: "Napi aktivitás", val: "95%", color: "bg-green-500" },
                { label: "Tananyag elsajátítás", val: "78%", color: "bg-blue-500" },
                { label: "Vizsga pontszám", val: "84 pont", color: "bg-orange-500" }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between font-bold text-sm">
                    <span>{item.label}</span>
                    <span className="text-slate-400">{item.val}</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.val.includes('%') ? item.val : '84%' }}
                      className={`h-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-2xl rotate-2">
                <div className="flex items-center space-x-4 mb-6">
                   <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center font-bold">BP</div>
                   <div>
                      <div className="font-bold">Biológia Próbavizsga #12</div>
                      <div className="text-slate-400 text-xs">Befejezve: 2024. május 20.</div>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                   <div className="bg-white/5 rounded-2xl p-4 border border-white/10 text-center">
                      <div className="text-xs text-slate-400 uppercase">Eredmény</div>
                      <div className="text-3xl font-black text-primary-400">92%</div>
                   </div>
                   <div className="bg-white/5 rounded-2xl p-4 border border-white/10 text-center">
                      <div className="text-xs text-slate-400 uppercase">Helyezés</div>
                      <div className="text-3xl font-black text-blue-400">TOP 5</div>
                   </div>
                </div>
                <div className="p-4 bg-primary-500/10 border border-primary-500/20 rounded-2xl">
                   <div className="flex items-center text-primary-400 font-bold text-sm mb-2">
                      <Sparkles size={16} className="mr-2" /> AI Elemzés:
                   </div>
                   <p className="text-sm text-slate-300">
                      "Kiváló eredmény! A keringési rendszerből hibátlanul teljesítettél, a genetika feladatoknál viszont érdemes átnézned a mendeli szabályokat."
                   </p>
                </div>
             </div>
             <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 -rotate-3 hidden md:block">
                <div className="flex items-center space-x-2 mb-2 text-primary-600 font-bold">
                   <Flame size={20} /> <span>Streak!</span>
                </div>
                <div className="text-2xl font-black">12 NAP</div>
                <p className="text-xs text-slate-400">Ne hagyd abba!</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary-600 to-blue-700 p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid)" />
                 <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                       <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                 </defs>
              </svg>
           </div>
           
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Készen állsz a sikeres <br /> érettségire?
              </h2>
              <p className="text-primary-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                Regisztrálj ingyen, és kezdj el tanulni az AI mentoroddal még ma. Nincs bankkártya, nincs kötelezettség.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                 <Link
                   to="/register"
                   className="px-10 py-5 rounded-2xl bg-white text-primary-700 font-black text-xl hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl shadow-black/20"
                 >
                   Regisztráció Ingyen
                 </Link>
                 <Link
                   to="/pricing"
                   className="px-10 py-5 rounded-2xl bg-transparent border-2 border-white/40 text-white font-bold text-xl hover:bg-white/10 transition-all"
                 >
                   Árazás
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
