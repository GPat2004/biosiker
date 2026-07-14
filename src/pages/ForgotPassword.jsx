import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, GraduationCap, MailCheck, AlertCircle, ChevronLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ForgotPassword = () => {
  const { requestPasswordReset } = useAuth();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const { error: resetError } = await requestPasswordReset(email);

    setIsSubmitting(false);

    if (resetError) {
      setError('Hiba történt. Ellenőrizd az e-mail címet, és próbáld újra.');
      return;
    }

    setSent(true);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
        {sent ? (
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
              <MailCheck className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold">Elküldtük a linket!</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Ha létezik fiók a(z) <span className="font-bold">{email}</span> címmel, hamarosan
              kapsz egy e-mailt a jelszó-visszaállításhoz szükséges linkkel.
            </p>
            <Link to="/login" className="inline-block font-bold text-primary-600 hover:text-primary-500">
              Vissza a bejelentkezéshez
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                <GraduationCap className="h-10 w-10" />
              </div>
              <h2 className="text-3xl font-bold">Elfelejtett jelszó</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Add meg az e-mail címed, és küldünk egy linket az új jelszó beállításához.
              </p>
            </div>

            {error && (
              <div className="flex items-start gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 text-sm">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all disabled:opacity-70"
              >
                {isSubmitting ? 'Küldés...' : 'Visszaállító link küldése'}
              </button>
            </form>

            <div className="text-center mt-6">
              <Link
                to="/login"
                className="inline-flex items-center text-sm text-slate-500 hover:text-primary-600 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> Vissza a bejelentkezéshez
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
