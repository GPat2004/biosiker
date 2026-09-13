import { useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';

// A "Pro" gombok (Arazas oldal, fejezet-zarolas) kattintasra azonnal
// Pro-hozzaferest adnak, valodi fizetes nelkul (lasd UserDataContext
// subscribe) - ez a toast teszi vilagossa, hogy ez egy demo/teszt
// aktivalas volt, nem egy tenyleges fizetes eredmenye.
const DemoUpgradeToast = () => {
  const { demoUpgradeNotice, dismissDemoUpgradeNotice } = useUserData();

  useEffect(() => {
    if (!demoUpgradeNotice) return undefined;
    const timer = setTimeout(dismissDemoUpgradeNotice, 6000);
    return () => clearTimeout(timer);
  }, [demoUpgradeNotice, dismissDemoUpgradeNotice]);

  if (!demoUpgradeNotice) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-md px-0">
      <div className="flex items-start gap-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl px-5 py-4">
        <Sparkles className="h-5 w-5 text-primary-400 dark:text-primary-600 shrink-0 mt-0.5" />
        <p className="text-sm leading-snug grow">{demoUpgradeNotice}</p>
        <button
          onClick={dismissDemoUpgradeNotice}
          className="shrink-0 text-slate-400 hover:text-white dark:text-slate-500 dark:hover:text-slate-900 transition-colors"
          aria-label="Bezárás"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default DemoUpgradeToast;
