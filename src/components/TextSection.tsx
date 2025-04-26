import React from 'react';
import { useInView } from '../hooks/useInView';

type HighlightWordProps = {
  children: React.ReactNode;
  darkMode: boolean;
  delay?: number;
  type?: 'eyes' | 'smile' | 'hands' | 'voice' | 'default';
};

export const HighlightWord: React.FC<HighlightWordProps> = ({ 
  children, 
  darkMode, 
  delay = 0,
  type = 'default' 
}) => {
  const [ref, isInView] = useInView({ threshold: 0.5, triggerOnce: true });
  
  const getTypeStyles = () => {
    switch(type) {
      case 'eyes':
        return darkMode 
          ? 'text-blue-300 hover:text-blue-200' 
          : 'text-blue-600 hover:text-blue-500';
      case 'smile':
        return darkMode 
          ? 'text-amber-300 hover:text-amber-200' 
          : 'text-amber-600 hover:text-amber-500';
      case 'hands':
        return darkMode 
          ? 'text-emerald-300 hover:text-emerald-200' 
          : 'text-emerald-600 hover:text-emerald-500';
      case 'voice':
        return darkMode 
          ? 'text-purple-300 hover:text-purple-200' 
          : 'text-purple-600 hover:text-purple-500';
      default:
        return darkMode 
          ? 'text-amber-200 hover:text-amber-100' 
          : 'text-amber-800 hover:text-amber-700';
    }
  };
  
  return (
    <span 
      ref={ref}
      className={`
        font-medium inline-block transition-all duration-500
        ${getTypeStyles()}
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </span>
  );
};

export default HighlightWord