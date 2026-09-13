import { Check, Gift } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';
import { DAILY_REWARDS } from '../lib/gamificationUtils';

// A jelenlegi streak-nap alapján jár napi jutalom, naponta csak egyszer
// igényelhető. A létra egy referencia-beosztás - a "ma" pozíció mindig a
// streak.current alapján van kiemelve.
const DailyRewardsTab = () => {
  const { claimDailyReward, getDailyRewardStatus } = useUserData();
  const status = getDailyRewardStatus();

  return (
    <div>
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary-600 to-blue-600 text-white shadow-lg mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
            <Gift className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-white/80 mb-1">{status.day}. napi jutalom</p>
            <p className="text-3xl font-extrabold">+{status.reward.coins} Coin</p>
            {status.reward.note && <p className="text-sm text-white/80 mt-1">{status.reward.note}</p>}
          </div>
        </div>
        <button
          onClick={claimDailyReward}
          disabled={status.alreadyClaimedToday}
          className="shrink-0 flex items-center justify-center px-6 py-3 rounded-xl bg-white text-primary-700 font-bold hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-default"
        >
          {status.alreadyClaimedToday ? (
            <>
              <Check className="h-5 w-5 mr-2" /> Igényelve mára
            </>
          ) : (
            'Jutalom igénylése'
          )}
        </button>
      </div>

      <p className="text-sm font-bold text-slate-500 mb-3">Jutalom-létra (a streak hossza szerint)</p>
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-4">
        {DAILY_REWARDS.map((d) => (
          <div
            key={d.day}
            className={`p-3 rounded-xl border text-center ${
              d.day === status.day
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
            }`}
          >
            <p className="text-xs text-slate-400">{d.day}. nap</p>
            <p className="font-bold text-sm">{d.coins}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-400">
        A 14. nap után a napi jutalom egy állandó, 150 Coin/napra áll be. Eddig {status.totalClaimed} napi
        jutalmat igényeltél le.
      </p>
    </div>
  );
};

export default DailyRewardsTab;
