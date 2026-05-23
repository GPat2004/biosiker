import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Quizzes from './pages/Quizzes';
import Flashcards from './pages/Flashcards';
import Simulation from './pages/Simulation';
import Login from './pages/Login';
import Register from './pages/Register';
import Pricing from './pages/Pricing';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
