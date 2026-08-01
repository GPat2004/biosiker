import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { UserDataProvider } from './context/UserDataContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import ModuleDetail from './pages/ModuleDetail';
import ChapterView from './pages/ChapterView';
import ChapterQuiz from './pages/ChapterQuiz';
import ModuleQuiz from './pages/ModuleQuiz';
import Quizzes from './pages/Quizzes';
import Flashcards from './pages/Flashcards';
import Simulation from './pages/Simulation';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Settings from './pages/Settings';
import Pricing from './pages/Pricing';
import Onboarding from './pages/Onboarding';
import ResultsPreview from './pages/ResultsPreview';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UserDataProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tananyag" element={<Curriculum />} />
                <Route path="/tananyag/:moduleId" element={<ModuleDetail />} />
                <Route path="/tananyag/:moduleId/kviz" element={<ModuleQuiz />} />
                <Route path="/tananyag/:moduleId/:chapterId" element={<ChapterView />} />
                <Route path="/tananyag/:moduleId/:chapterId/kviz" element={<ChapterQuiz />} />
                <Route path="/quizzes" element={<Quizzes />} />
                <Route path="/flashcards" element={<Flashcards />} />
                <Route path="/simulation" element={<Simulation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/elfelejtett-jelszo" element={<ForgotPassword />} />
                <Route path="/reset-jelszo" element={<ResetPassword />} />
                <Route
                  path="/beallitasok"
                  element={
                    <RequireAuth>
                      <Settings />
                    </RequireAuth>
                  }
                />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/results" element={<ResultsPreview />} />
              </Routes>
            </Layout>
          </Router>
        </UserDataProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
