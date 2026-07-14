import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { UserDataProvider } from './context/UserDataContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import ModuleDetail from './pages/ModuleDetail';
import ChapterView from './pages/ChapterView';
import Quizzes from './pages/Quizzes';
import Flashcards from './pages/Flashcards';
import Simulation from './pages/Simulation';
import Login from './pages/Login';
import Register from './pages/Register';
import Pricing from './pages/Pricing';
import Onboarding from './pages/Onboarding';
import ResultsPreview from './pages/ResultsPreview';

function App() {
  return (
    <ThemeProvider>
      <UserDataProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tananyag" element={<Curriculum />} />
              <Route path="/tananyag/:moduleId" element={<ModuleDetail />} />
              <Route path="/tananyag/:moduleId/:chapterId" element={<ChapterView />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/flashcards" element={<Flashcards />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/results" element={<ResultsPreview />} />
            </Routes>
          </Layout>
        </Router>
      </UserDataProvider>
    </ThemeProvider>
  );
}

export default App;
