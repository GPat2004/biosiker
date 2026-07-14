import { Lock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaywallGate = ({ chapterTitle }) => (
  <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden">
    {/* Elhomályosított "csali" tartalom a háttérben, hogy érezhető legyen az érték */}
    <div className="p-8 md:p-12 blur-sm select-none pointer-events-none opacity-60">
      <div className="h-6 w-2/3 bg-slate-300 dark:bg-slate-700 rounded mb-4" />
      <div className="space-y-3">
        <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
      </div>
    </div>

    <div className="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-slate-950/70 backdrop-blur-[2px]">
      <div className="text-center px-6 py-10 max-w-md">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-5">
          <Lock className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold mb-2">Ez a fejezet előfizetéshez kötött</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          A(z) „{chapterTitle}” és a modulok további fejezetei csak Pro vagy Mentor
          tagsággal érhetők el. Iratkozz fel, és nyisd meg a teljes tananyagot.
        </p>
        <Link
          to="/pricing"
          className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-blue-600 text-white font-bold shadow-lg hover:shadow-primary-500/20 transition-all transform hover:scale-105"
        >
          <Sparkles className="h-5 w-5 mr-2" />
          Előfizetési csomagok megtekintése
        </Link>
      </div>
    </div>
  </div>
);

export default PaywallGate;
