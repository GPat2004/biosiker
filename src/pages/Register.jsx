import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, GraduationCap, MailCheck, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const { signUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', username: '', email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password.length < 6) {
      setError('A jelszónak legalább 6 karakter hosszúnak kell lennie.');
      return;
    }

    setIsSubmitting(true);
    const { error: signUpError } = await signUp(formData.email, formData.password, {
      data: { full_name: formData.name, username: formData.username },
    });
    setIsSubmitting(false);

    if (signUpError) {
      setError(
        signUpError.message === 'User already registered'
          ? 'Ezzel az e-mail címmel már regisztráltak. Próbálj bejelentkezni.'
          : 'Hiba történt a regisztráció során. Próbáld újra.'
      );
      return;
    }

    setRegistered(true);
  };

  if (registered) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center space-y-6 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
            <MailCheck className="h-10 w-10" />
          </div>
          <h2 className="text-2xl font-bold">Nézd meg az e-mail fiókodat!</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Küldtünk egy megerősítő linket a(z) <span className="font-bold">{formData.email}</span> címre.
            Kattints rá a fiókod aktiválásához, utána bejelentkezhetsz.
          </p>
          <Link
            to="/login"
            className="inline-block px-6 py-3 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors"
          >
            Ugrás a bejelentkezéshez
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
            <GraduationCap className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold">Hozz létre fiókot</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Kezdd el a felkészülést még ma!</p>
        </div>

        {error && (
          <div className="flex items-start gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 text-sm">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Teljes név
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Kovács János"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Felhasználónév
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  required
                  minLength={3}
                  pattern="[a-zA-Z0-9_]+"
                  title="Csak betűk, számok és aláhúzás használható."
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="biosbajnok"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                E-mail cím
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="pelda@email.hu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Jelszó
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={6}
                  className="block w-full pl-10 pr-10 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  required
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="text-slate-600 dark:text-slate-400">
                  Elfogadom a <Link to="/terms" className="font-medium text-primary-600">Felhasználási feltételeket</Link> és az <Link to="/privacy" className="font-medium text-primary-600">Adatvédelmi nyilatkozatot</Link>.
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all disabled:opacity-70"
          >
            {isSubmitting ? 'Regisztráció folyamatban...' : 'Regisztráció'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-slate-600 dark:text-slate-400">
            Van már fiókod?{' '}
            <Link to="/login" className="font-bold text-primary-600 hover:text-primary-500">
              Jelentkezz be
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
