import { Lock, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

// Ezek a Pricing.jsx Pro-csomagjában ténylegesen szereplő, ténylegesen
// megépített funkciók közül a fejezet-zároláshoz legszorosabban
// kapcsolódó három - nem kitalált statisztika, hanem valós funkció-leírás.
const BENEFITS = [
  'Teljes tananyag-hozzáférés - minden modul, minden fejezet',
  'Korlátlan tanulókártya-pakli és -kártya',
  'Teljes kérdésbank minden fejezethez - fejezet- és modulzáró tesztek',
];

// `previewText` (opcionális): a zárolt fejezet valódi bevezető szövege,
// elmosva megjelenítve a doboz mögött - ez érzékelteti, hogy valódi
// tartalom van a zár mögött, nem csak egy generikus vázlat.
const PaywallGate = ({ chapterTitle, previewText }) => (
  <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden">
    {/* Elhomályosított "csali" tartalom a háttérben, hogy érezhető legyen az érték */}
    <div className="p-8 md:p-12 blur-sm select-none pointer-events-none opacity-60">
      <div className="h-6 w-2/3 bg-slate-300 dark:bg-slate-700 rounded mb-4" />
      {previewText ? (
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{previewText}</p>
      ) : (
        <div className="space-y-3">
          <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
        </div>
      )}
    </div>

    <div className="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-slate-950/70 backdrop-blur-[2px]">
      <div className="text-center px-6 py-10 max-w-md">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-5 animate-soft-pulse">
          <Lock className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold mb-2">Ez a fejezet előfizetéshez kötött</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          A(z) „{chapterTitle}” és a modulok további fejezetei csak Pro vagy Mentor
          tagsággal érhetők el. Iratkozz fel, és nyisd meg a teljes tananyagot.
        </p>
        <ul className="inline-flex flex-col items-start gap-2 mb-7 text-left">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
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
