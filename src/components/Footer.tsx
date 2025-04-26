import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { darkMode } = useTheme();
  
  return (
    <footer className={`py-4 text-center transition-colors duration-500 ${
      darkMode ? 'text-amber-200/70' : 'text-amber-950/70'
    }`}>
      <div className="flex items-center justify-center space-x-2">
        <span className="text-sm">Con todo mi</span>
        <img 
          src="https://i.pinimg.com/736x/6f/0c/25/6f0c2550c851efed934b7a33041e92ef.jpg" 
          alt="Cute heart" 
          className="w-6 h-6 animate-pulse"
        />
      </div>
    </footer>
  );
};

export default Footer;