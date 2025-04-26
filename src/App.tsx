import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FinalPage from './pages/FinalPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex items-center justify-center">
            <Routes>
              <Route path="/" element={<Navigate to="/1" replace />} />
              <Route path="/1" element={<FirstPage />} />
              <Route path="/2" element={<SecondPage />} />
              <Route path="/3" element={<ThirdPage />} />
              <Route path="/final" element={<FinalPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;