import React, { createContext, useContext, useState } from 'react';
import { Theme, defaultTheme } from '../themes/default';
import { warmTheme, minimalistTheme } from '../themes';

export type ThemeName = 'default' | 'warm' | 'minimalist';

interface ThemeContextType {
  currentTheme: Theme;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: defaultTheme,
  themeName: 'default',
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>('default');

  const themes: Record<ThemeName, Theme> = {
    default: defaultTheme,
    warm: warmTheme,
    minimalist: minimalistTheme,
  };

  const value = {
    currentTheme: themes[themeName],
    themeName,
    setTheme: setThemeName,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 