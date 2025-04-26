import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import VisualElements from '../components/VisualElements';
import { HighlightWord } from '../components/TextSection';

const FirstPage = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <div className={`max-w-3xl mx-auto relative overflow-hidden transition-colors duration-500 ${
      darkMode ? 'bg-gray-900/80 text-amber-50' : 'bg-white/70 text-amber-950'
    } backdrop-blur-sm rounded-2xl shadow-lg shadow-amber-900/10 p-6 md:p-10`}>
      <VisualElements darkMode={darkMode} />
      
      <div className="relative z-10">
        <h1 className={`font-serif text-center text-2xl md:text-3xl mb-12 font-medium ${
          darkMode ? 'text-amber-200' : 'text-amber-800'
        }`}>
          Mi Persona Favorita
        </h1>
        
        <div className={`
          mb-8 leading-relaxed
          ${darkMode ? 'bg-gray-800/40' : 'bg-white/60'}
          p-6 rounded-lg backdrop-blur-sm
          border-l-4 ${darkMode ? 'border-amber-400/30' : 'border-amber-600/30'}
        `}>
          Escuche una vez a alguien en Internet decir "eres mi persona favorita" y de inmediato me pregunté... Quien es mi persona favorita? Solo hubo alguien que llegó a mi mente sin duda alguna, esa mujer delgada de pelo corto, piel canela y suave, con unos <HighlightWord darkMode={darkMode} type="eyes">ojos oscuros qué brillan como la luna</HighlightWord> y me llenan de tanta alegría con solo verlos, esa personita que con escuchar su <HighlightWord darkMode={darkMode} type="voice">voz</HighlightWord> y verla <HighlightWord darkMode={darkMode} type="smile">sonreír</HighlightWord> me pone tan contento.
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={() => navigate('/2')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              darkMode 
                ? 'bg-amber-400/20 hover:bg-amber-400/30 text-amber-200' 
                : 'bg-amber-600/20 hover:bg-amber-600/30 text-amber-800'
            }`}
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;