import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

// Nem tolakodó, de egyértelmű jelzés, amikor egy ingyenes felhasználó
// elérte a tanulókártya-limitet (2 pakli / 20 kártya paklinként) -
// ugyanoda irányít, mint a fejezet-zárolás (Előfizetési csomagok).
const FreeLimitBanner = ({
  message = 'Elérted az ingyenes csomag limitjét: 2 pakli / 20 kártya paklinként. Iratkozz fel a korlátlan használatért.',
}) => (
  <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 flex flex-col sm:flex-row sm:items-center gap-3">
    <p className="text-sm text-amber-800 dark:text-amber-400 flex-grow">{message}</p>
    <Link
      to="/pricing"
      className="shrink-0 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-blue-600 text-white font-bold text-sm hover:shadow-lg hover:shadow-primary-500/20 transition-all"
    >
      <Sparkles className="h-4 w-4 mr-1.5" /> Előfizetési csomagok
    </Link>
  </div>
);

export default FreeLimitBanner;
