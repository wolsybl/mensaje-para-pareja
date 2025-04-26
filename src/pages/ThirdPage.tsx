import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import VisualElements from '../components/VisualElements';
import { HighlightWord } from '../components/TextSection';

const ThirdPage = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <div className={`max-w-3xl mx-auto relative overflow-hidden transition-colors duration-500 ${
      darkMode ? 'bg-gray-900/80 text-amber-50' : 'bg-white/70 text-amber-950'
    } backdrop-blur-sm rounded-2xl shadow-lg shadow-amber-900/10 p-6 md:p-10`}>
      <VisualElements darkMode={darkMode} />
      
      <div className="relative z-10">
        <div className={`
          mb-8 leading-relaxed
          ${darkMode ? 'bg-amber-950/30' : 'bg-amber-50/60'}
          p-6 rounded-xl backdrop-blur-sm
          border ${darkMode ? 'border-amber-400/20' : 'border-amber-600/20'}
          transform hover:scale-[1.02] transition-transform duration-500
        `}>
          Esa mujer que con su mera presencia me hace sentir lo que ninguna otra persona puede... Logro decir con toda seguridad que mi persona favorita eres <HighlightWord darkMode={darkMode}>tu mi amor</HighlightWord>.
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate('/2')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              darkMode 
                ? 'bg-amber-400/20 hover:bg-amber-400/30 text-amber-200' 
                : 'bg-amber-600/20 hover:bg-amber-600/30 text-amber-800'
            }`}
          >
            ← Anterior
          </button>
          <button
            onClick={() => navigate('/final')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              darkMode 
                ? 'bg-amber-400/20 hover:bg-amber-400/30 text-amber-200' 
                : 'bg-amber-600/20 hover:bg-amber-600/30 text-amber-800'
            }`}
          >
            Final →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;