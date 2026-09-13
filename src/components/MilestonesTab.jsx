import { CheckCircle2, Lock } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';

// A mérföldkövek SOSEM rejtettek - az el nem ért ("locked") mérföldkövek
// is látszanak névvel és leírással, csak halványítva/körvonalasan, hogy
// a felhasználó előre lássa, mire érdemes törekednie.
const MilestoneCard = ({ milestone }) => (
  <div
    className={`flex items-start gap-3 p-4 rounded-2xl border transition-colors ${
      milestone.unlocked
        ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-900/30'
        : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 border-dashed'
    }`}
  >
    <div
      className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${
        milestone.unlocked
          ? 'bg-emerald-500 text-white'
          : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600'
      }`}
    >
      {milestone.unlocked ? <CheckCircle2 className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
    </div>
    <div className="flex-grow min-w-0">
      <p className={`font-bold ${milestone.unlocked ? '' : 'text-slate-500 dark:text-slate-400'}`}>
        {milestone.name}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{milestone.description}</p>
      <p
        className={`text-xs mt-1.5 font-bold ${
          milestone.unlocked ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400 dark:text-slate-600'
        }`}
      >
        {milestone.unlocked ? `Teljesítve - ` : 'Jutalom: '}+{milestone.coinReward} Coin
      </p>
    </div>
  </div>
);

const MilestonesTab = () => {
  const { getMilestones } = useUserData();
  const milestones = getMilestones();
  const unlockedCount = milestones.filter((m) => m.unlocked).length;

  return (
    <div>
      <p className="text-sm text-slate-500 mb-4">
        {unlockedCount} / {milestones.length} mérföldkő teljesítve
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {milestones.map((milestone) => (
          <MilestoneCard key={milestone.id} milestone={milestone} />
        ))}
      </div>
    </div>
  );
};

export default MilestonesTab;
