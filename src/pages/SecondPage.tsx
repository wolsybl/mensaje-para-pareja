import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import VisualElements from '../components/VisualElements';
import { HighlightWord } from '../components/TextSection';

const SecondPage = () => {
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
          ${darkMode ? 'bg-blue-950/30' : 'bg-blue-50/60'}
          p-8 rounded-2xl backdrop-blur-sm
          shadow-lg ${darkMode ? 'shadow-blue-500/5' : 'shadow-blue-500/10'}
        `}>
          Amo sus <HighlightWord darkMode={darkMode} type="hands">manos</HighlightWord> que acarician con delicadeza todo de mi, sus brazos qué sienten cosquillas cuando los acaricio y esa <HighlightWord darkMode={darkMode} type="smile">sonrisa</HighlightWord> tan pura que deja salir cuando acaricio sus mejillas, sus palabras que me hacen sentir tanta calma que podría quedar dormido en medio de un batallón.
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate('/1')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              darkMode 
                ? 'bg-amber-400/20 hover:bg-amber-400/30 text-amber-200' 
                : 'bg-amber-600/20 hover:bg-amber-600/30 text-amber-800'
            }`}
          >
            ← Anterior
          </button>
          <button
            onClick={() => navigate('/3')}
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

export default SecondPage;