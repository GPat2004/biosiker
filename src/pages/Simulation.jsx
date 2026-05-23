import React, { useState } from 'react';
import { ClipboardList, Timer, AlertCircle, CheckCircle2 } from 'lucide-react';

const Simulation = () => {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 mb-8">
            <ClipboardList className="h-10 w-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Biológia Érettségi Szimuláció</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Ez a szimuláció a hivatalos magyar emelt szintű biológia érettségi struktúráját követi. 
            Mérd fel a tudásod valós körülmények között!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-1 rounded-full bg-green-100 text-green-600"><CheckCircle2 className="h-5 w-5" /></div>
              <div>
                <h4 className="font-bold">Időkeret: 240 perc</h4>
                <p className="text-sm text-slate-500">Ugyanannyi időd van, mint az igazi vizsgán.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-1 rounded-full bg-green-100 text-green-600"><CheckCircle2 className="h-5 w-5" /></div>
              <div>
                <h4 className="font-bold">100 Pontos Értékelés</h4>
                <p className="text-sm text-slate-500">Azonnali eredmény és részletes megoldókulcs.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-10">
            <div className="flex items-center text-slate-700 dark:text-slate-300 mb-2">
              <AlertCircle className="h-5 w-5 mr-2 text-primary-600" />
              <span className="font-bold">Fontos tudnivaló</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              A szimuláció elindítása után az óra elindul. Csak akkor kezdd el, ha van elég szabad időd a befejezéshez. 
              A folyamatban lévő vizsgát elmentheted, de az időzítő nem áll meg!
            </p>
          </div>

          <button 
            onClick={() => setStarted(true)}
            className="w-full md:w-auto px-10 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
          >
            Szimuláció Indítása
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Exam content */}
        <div className="lg:w-3/4 space-y-8">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
            <span className="text-sm font-bold text-primary-600 uppercase tracking-widest">1. Feladatsor</span>
            <h2 className="text-2xl font-bold mt-2 mb-6">Melyik állítás igaz a sejthártyára?</h2>
            <div className="space-y-4">
              {['Kettős lipidrétegből épül fel.', 'Csak növényi sejtekben található meg.', 'Nem tartalmaz fehérjéket.', 'Merev, átjárhatatlan struktúra.'].map((opt, i) => (
                <label key={i} className="flex items-center p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                  <input type="radio" name="q1" className="h-5 w-5 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-4 text-slate-700 dark:text-slate-300">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center py-6">
            <button className="px-6 py-2 rounded-lg border border-slate-300 dark:border-slate-700 font-medium">Előző</button>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map(n => (
                <button key={n} className={`h-10 w-10 rounded-lg flex items-center justify-center font-bold ${n === 1 ? 'bg-primary-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'}`}>
                  {n}
                </button>
              ))}
              <span>...</span>
            </div>
            <button className="px-6 py-2 rounded-lg bg-primary-600 text-white font-medium">Következő</button>
          </div>
        </div>

        {/* Sidebar info */}
        <div className="lg:w-1/4">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 font-medium">Hátralévő idő</span>
                <Timer className="h-5 w-5 text-red-500" />
              </div>
              <div className="text-4xl font-mono font-bold text-slate-800 dark:text-white">
                03:58:42
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Haladás</span>
                  <span>5%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary-600 h-full w-[5%]" />
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-red-50 dark:bg-red-900/10 text-red-600 font-bold rounded-xl border border-red-100 dark:border-red-900/20 hover:bg-red-100 transition-colors">
              Vizsga Befejezése
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
