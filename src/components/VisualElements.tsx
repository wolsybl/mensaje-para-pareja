import React from 'react';

type VisualElementsProps = {
  darkMode: boolean;
};

const VisualElements: React.FC<VisualElementsProps> = ({ darkMode }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Moon */}
      <div className={`absolute top-8 right-8 w-10 h-10 rounded-full transition-all duration-500 ${
        darkMode 
          ? 'bg-amber-100 shadow-[0_0_15px_5px_rgba(254,243,199,0.3)]' 
          : 'bg-amber-300 opacity-40'
      }`} />
      
      {/* Stars (visible in dark mode) */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className={`absolute w-1 h-1 rounded-full bg-amber-100 transition-opacity duration-500 ${
            darkMode ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${3 + Math.random() * 7}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
      
      {/* Abstract shapes */}
      <div className={`absolute -bottom-20 -left-20 w-60 h-60 rounded-full transition-opacity duration-500 ${
        darkMode 
          ? 'bg-amber-800/20' 
          : 'bg-amber-400/10'
      }`} />
      
      <div className={`absolute top-1/3 -left-10 w-40 h-40 rounded-full transition-opacity duration-500 ${
        darkMode 
          ? 'bg-blue-900/20' 
          : 'bg-blue-400/10'
      }`} />
      
      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-md transition-opacity duration-500 ${
        darkMode 
          ? 'bg-amber-700/20' 
          : 'bg-amber-300/10'
      }`} />
      
      {/* Soft lines */}
      <div className="absolute left-0 right-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />
      <div className="absolute left-0 right-0 top-1/4 h-px bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />
    </div>
  );
};

export default VisualElements;