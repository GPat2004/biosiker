import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                BioSiker
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/quizzes" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Kvízek</Link>
            <Link to="/flashcards" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Tanulókártyák</Link>
            <Link to="/simulation" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Vizsga szimuláció</Link>
            <Link to="/pricing" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Árazás</Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors font-medium"
            >
              Bejelentkezés
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/quizzes" className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-primary-600">Kvízek</Link>
            <Link to="/flashcards" className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-primary-600">Tanulókártyák</Link>
            <Link to="/simulation" className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-primary-600">Vizsga szimuláció</Link>
            <Link to="/pricing" className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-primary-600">Árazás</Link>
            <Link to="/login" className="block px-3 py-2 text-primary-600 font-medium">Bejelentkezés</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 dark:text-slate-400">
          <p>© 2024 BioSiker. Minden jog fenntartva.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
