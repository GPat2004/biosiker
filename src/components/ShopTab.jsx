import { Cat, Check, Ghost, Sparkles } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';
import { SHOP_ITEMS } from '../lib/gamificationUtils';

const DECORATION_ICONS = { Cat, Ghost, Sparkles };

// KIZÁRÓLAG kozmetikai, játékos extrák - semmilyen tanulási tartalom
// vagy funkció-hozzáférés nem vásárolható itt. A Coin soha nem
// vásárolható valós pénzért - a bolt csak elkölteni engedi.
const ShopItemCard = ({ item, owned, active, coins, onPurchase, onToggle }) => {
  const canAfford = coins >= item.price;

  return (
    <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        {item.type === 'theme' ? (
          <div className={`h-10 w-10 rounded-xl ${item.swatch} shrink-0`} />
        ) : (
          <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
            {(() => {
              const Icon = DECORATION_ICONS[item.icon];
              return <Icon className="h-5 w-5" />;
            })()}
          </div>
        )}
        <div className="min-w-0">
          <p className="font-bold truncate">{item.name}</p>
          <p className="text-xs text-slate-500">{item.price} Coin</p>
        </div>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 flex-grow mb-3">{item.description}</p>

      {!owned ? (
        <button
          onClick={() => onPurchase(item.id)}
          disabled={!canAfford}
          className="w-full px-4 py-2 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {canAfford ? 'Megvásárlás' : 'Nincs elég Coin'}
        </button>
      ) : (
        <button
          onClick={() => onToggle(item.id)}
          className={`w-full flex items-center justify-center px-4 py-2 rounded-xl font-bold text-sm transition-colors ${
            active
              ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/30'
              : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
        >
          {active && <Check className="h-4 w-4 mr-1.5" />}
          {active ? 'Aktív - kikapcsolás' : 'Aktiválás'}
        </button>
      )}
    </div>
  );
};

const ShopTab = () => {
  const { coins, ownedShopItems, activeShopItems, purchaseShopItem, toggleShopItem } = useUserData();

  return (
    <div>
      <p className="text-sm text-slate-500 mb-4">
        Kizárólag kozmetikai extrák - a Coin sosem vásárolható valós pénzért, csak aktivitással
        szerezhető.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SHOP_ITEMS.map((item) => (
          <ShopItemCard
            key={item.id}
            item={item}
            coins={coins}
            owned={ownedShopItems.includes(item.id)}
            active={activeShopItems.includes(item.id)}
            onPurchase={purchaseShopItem}
            onToggle={toggleShopItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopTab;
