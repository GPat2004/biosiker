import { useState } from 'react';
import { Flame, Pencil, Trophy, Gift, ShoppingBag } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useUserData } from '../context/UserDataContext';
import { getAvatar, LEVEL_XP } from '../lib/gamificationUtils';
import { AvatarIcon } from '../lib/icons';
import AvatarPickerModal from '../components/AvatarPickerModal';
import MilestonesTab from '../components/MilestonesTab';
import DailyRewardsTab from '../components/DailyRewardsTab';
import ShopTab from '../components/ShopTab';

const TABS = [
  { id: 'milestones', label: 'Mérföldkövek', icon: Trophy },
  { id: 'daily', label: 'Napi jutalmak', icon: Gift },
  { id: 'shop', label: 'Érme-bolt', icon: ShoppingBag },
];

const Profile = () => {
  const { user } = useAuth();
  const { level, xp, xpIntoLevel, coins, streak, avatarId, setAvatarId } = useUserData();
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [activeTab, setActiveTab] = useState('milestones');

  const avatar = getAvatar(avatarId);
  const displayName =
    user?.user_metadata?.username ||
    user?.user_metadata?.full_name?.split(' ')[0] ||
    user?.email ||
    'Vendég tanuló';
  const xpPercent = Math.round((xpIntoLevel / LEVEL_XP) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-8">Profil</h1>

      {/* Fejléc: avatar, felhasználónév, szint/XP, streak */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <button
            onClick={() => setShowAvatarPicker(true)}
            className="relative group shrink-0"
            title="Avatar módosítása"
          >
            <div
              className={`h-24 w-24 rounded-3xl bg-gradient-to-br ${avatar.color} flex items-center justify-center text-white shadow-lg`}
            >
              <AvatarIcon name={avatar.icon} className="h-12 w-12" />
            </div>
            <span className="absolute -bottom-1.5 -right-1.5 h-8 w-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 group-hover:text-primary-600 transition-colors shadow">
              <Pencil className="h-3.5 w-3.5" />
            </span>
          </button>

          <div className="flex-grow w-full text-center sm:text-left">
            <p className="text-2xl font-extrabold mb-1">{displayName}</p>
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-bold">
                {level}. szint
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-sm font-bold">
                {coins} Coin
              </span>
            </div>

            <div className="mb-1">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>
                  {xpIntoLevel} / {LEVEL_XP} XP
                </span>
                <span>Következő szint: {level + 1}.</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transition-all"
                  style={{ width: `${xpPercent}%` }}
                />
              </div>
            </div>
            <p className="text-xs text-slate-400">Összesen {xp} XP</p>
          </div>

          <div className="flex flex-col items-center shrink-0 px-4 py-3 rounded-2xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20">
            <Flame className="h-9 w-9 text-orange-500 fill-orange-400 animate-flame" />
            <p className="text-xl font-extrabold text-orange-600 dark:text-orange-400 mt-1">{streak.current}</p>
            <p className="text-xs text-orange-500 dark:text-orange-400/80">napos streak</p>
          </div>
        </div>
      </div>

      {/* Fül-váltó */}
      <div className="mb-6 inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-white dark:bg-slate-900 shadow text-primary-600'
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <tab.icon className="h-4 w-4 mr-1.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'milestones' && <MilestonesTab />}
      {activeTab === 'daily' && <DailyRewardsTab />}
      {activeTab === 'shop' && <ShopTab />}

      {showAvatarPicker && (
        <AvatarPickerModal
          currentAvatarId={avatarId}
          onSelect={setAvatarId}
          onClose={() => setShowAvatarPicker(false)}
        />
      )}
    </div>
  );
};

export default Profile;
