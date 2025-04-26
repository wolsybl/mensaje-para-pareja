import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import VisualElements from '../components/VisualElements';

const FinalPage = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <div className={`max-w-3xl mx-auto relative overflow-hidden transition-colors duration-500 ${
      darkMode ? 'bg-gray-900/80 text-amber-50' : 'bg-white/70 text-amber-950'
    } backdrop-blur-sm rounded-2xl shadow-lg shadow-amber-900/10 p-6 md:p-10`}>
      <VisualElements darkMode={darkMode} />
      
      <div className="relative z-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <img 
            src="https://i.pinimg.com/736x/26/ba/ce/26bacec04b1936f4dbdea7d364cfbe98.jpg" 
            alt="Cute character with headphones" 
            className="w-40 h-40 object-contain animate-bounce-slow"
          />
          <p className={`text-3xl md:text-4xl font-serif italic ${
            darkMode ? 'text-amber-200' : 'text-amber-800'
          }`}>
            Te amo, mi amor.
          </p>
        </div>

        <div className="mt-12">
          <button
            onClick={() => navigate('/1')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              darkMode 
                ? 'bg-amber-400/20 hover:bg-amber-400/30 text-amber-200' 
                : 'bg-amber-600/20 hover:bg-amber-600/30 text-amber-800'
            }`}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;