import React, { useEffect, useState } from 'react';
import TextSection from './TextSection';
import VisualElements from './VisualElements';
import { useTheme } from '../context/ThemeContext';

const MessageContent: React.FC = () => {
  const { darkMode } = useTheme();
  const [revealed, setRevealed] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`max-w-3xl mx-auto relative overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-gray-900/80 text-amber-50' : 'bg-white/70 text-amber-950'} backdrop-blur-sm rounded-2xl shadow-lg shadow-amber-900/10 p-6 md:p-10`}>
      <VisualElements darkMode={darkMode} />
      
      <div className={`relative z-10 transition-opacity duration-1000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className={`font-serif text-center text-2xl md:text-3xl mb-12 font-medium ${darkMode ? 'text-amber-200' : 'text-amber-800'}`}>
          Mi Persona Favorita
        </h1>
        
        <TextSection darkMode={darkMode} />
        
        <div className="text-center mt-16 mb-4">
          <p className={`text-xl md:text-2xl font-serif italic ${darkMode ? 'text-amber-200' : 'text-amber-800'}`}>
            Te amo, mi amor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageContent;