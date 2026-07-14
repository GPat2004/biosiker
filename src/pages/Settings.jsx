import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Lock,
  Sun,
  Moon,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Settings as SettingsIcon,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const SectionCard = ({ icon: Icon, title, description, children }) => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8">
    <div className="flex items-start gap-4 mb-6">
      <div className="h-11 w-11 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        {description && <p className="text-sm text-slate-500 mt-0.5">{description}</p>}
      </div>
    </div>
    {children}
  </div>
);

const InlineNotice = ({ type = 'success', children }) => {
  const isError = type === 'error';
  return (
    <div
      className={`flex items-start gap-2 p-3 rounded-xl text-sm mb-4 ${
        isError
          ? 'bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400'
          : 'bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400'
      }`}
    >
      {isError ? (
        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
      ) : (
        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
      )}
      <span>{children}</span>
    </div>
  );
};

const ProfileSection = () => {
  const { user, updateProfile } = useAuth();
  const [username, setUsername] = useState(user?.user_metadata?.username || '');
  const [fullName, setFullName] = useState(user?.user_metadata?.full_name || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    const { error } = await updateProfile({ username: username.trim(), full_name: fullName.trim() });

    setIsSubmitting(false);
    setStatus(
      error
        ? { type: 'error', message: 'Nem sikerült menteni a változásokat. Próbáld újra.' }
        : { type: 'success', message: 'Profil frissítve!' }
    );
  };

  return (
    <SectionCard icon={User} title="Profil" description="A megjelenített neved és felhasználóneved.">
      {status && <InlineNotice type={status.type}>{status.message}</InlineNotice>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Felhasználónév
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="pl. biosbajnok"
            className="block w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Teljes név
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="block w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            E-mail cím
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Mail className="h-4 w-4" />
            </div>
            <input
              type="email"
              value={user?.email || ''}
              disabled
              className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-100 dark:bg-slate-800/50 text-slate-500 cursor-not-allowed"
            />
          </div>
          <p className="text-xs text-slate-400 mt-1">Az e-mail cím módosítása jelenleg nem elérhető.</p>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2.5 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors disabled:opacity-70"
        >
          {isSubmitting ? 'Mentés...' : 'Változások mentése'}
        </button>
      </form>
    </SectionCard>
  );
};

const AppearanceSection = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <SectionCard icon={isDarkMode ? Moon : Sun} title="Megjelenés" description="Válassz világos vagy sötét témát.">
      <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-3">
          {isDarkMode ? (
            <Moon className="h-5 w-5 text-primary-500" />
          ) : (
            <Sun className="h-5 w-5 text-amber-500" />
          )}
          <span className="font-medium">{isDarkMode ? 'Sötét mód' : 'Világos mód'}</span>
        </div>
        <button
          onClick={toggleDarkMode}
          role="switch"
          aria-checked={isDarkMode}
          className={`relative w-12 h-7 rounded-full transition-colors ${
            isDarkMode ? 'bg-primary-600' : 'bg-slate-300'
          }`}
        >
          <span
            className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
              isDarkMode ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </SectionCard>
  );
};

const AccountSection = () => {
  const { updatePassword, signOut } = useAuth();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (newPassword.length < 6) {
      setStatus({ type: 'error', message: 'A jelszónak legalább 6 karakter hosszúnak kell lennie.' });
      return;
    }

    setIsSubmitting(true);
    const { error } = await updatePassword(newPassword);
    setIsSubmitting(false);

    if (error) {
      setStatus({ type: 'error', message: 'Nem sikerült módosítani a jelszót. Próbáld újra.' });
      return;
    }

    setNewPassword('');
    setStatus({ type: 'success', message: 'Jelszó sikeresen módosítva!' });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <SectionCard icon={Lock} title="Fiók" description="Jelszó módosítása és kijelentkezés.">
      {status && <InlineNotice type={status.type}>{status.message}</InlineNotice>}
      <form onSubmit={handlePasswordChange} className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Új jelszó
          </label>
          <input
            type="password"
            minLength={6}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="••••••••"
            className="block w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting || !newPassword}
          className="px-6 py-2.5 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Mentés...' : 'Jelszó módosítása'}
        </button>
      </form>

      <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={handleSignOut}
          className="flex items-center px-6 py-2.5 rounded-xl border border-red-200 dark:border-red-900/40 text-red-600 dark:text-red-400 font-bold hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Kijelentkezés
        </button>
      </div>
    </SectionCard>
  );
};

const Settings = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-8">
        <SettingsIcon className="h-7 w-7 text-primary-600" />
        <h1 className="text-3xl font-extrabold">Beállítások</h1>
      </div>

      <div className="space-y-6">
        <ProfileSection />
        <AppearanceSection />
        <AccountSection />
      </div>
    </div>
  );
};

export default Settings;
