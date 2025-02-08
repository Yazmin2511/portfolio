import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<any>(null);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (currentTheme) {
      setTheme(currentTheme);
      document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }
  }, []);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log(`Cambiando tema a: ${newTheme}`);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
