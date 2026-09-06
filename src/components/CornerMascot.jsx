import { Cat, Ghost, Sparkles } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';
import { SHOP_ITEMS } from '../lib/gamificationUtils';

const DECORATION_ICONS = { Cat, Ghost, Sparkles };

const CORNER_CLASSES = {
  'bottom-left': 'bottom-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'top-right': 'top-20 right-4',
};

// Globálisan, minden oldalon megjelenő, KIZÁRÓLAG kozmetikai apró
// díszek - az Érme-boltban aktivált dekorációk (lásd ShopTab.jsx).
// Nem interaktív (pointer-events-none) és alacsonyabb z-index-en van,
// mint a navigáció/modálok, hogy sose zavarjon.
const CornerMascot = () => {
  const { activeShopItems } = useUserData();
  const activeDecorations = SHOP_ITEMS.filter(
    (item) => item.type === 'decoration' && activeShopItems.includes(item.id)
  );

  if (activeDecorations.length === 0) return null;

  return (
    <>
      {activeDecorations.map((deco) => {
        const Icon = DECORATION_ICONS[deco.icon];
        return (
          <div key={deco.id} className={`fixed z-30 pointer-events-none ${CORNER_CLASSES[deco.corner]}`}>
            <div className="h-12 w-12 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-primary-600 dark:text-primary-400 animate-bounce">
              <Icon className="h-6 w-6" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CornerMascot;
