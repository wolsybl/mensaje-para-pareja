import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="py-4 px-6 flex justify-end">
      <button 
        onClick={toggleDarkMode}
        className="p-2 rounded-full transition-colors duration-300 hover:bg-amber-200/30"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-amber-200" />
        ) : (
          <Moon className="w-5 h-5 text-amber-800" />
        )}
      </button>
    </header>
  );
};

export default Header;