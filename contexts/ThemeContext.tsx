import React, { createContext, useContext, useState } from 'react';
import { Theme, defaultTheme } from '../themes/default';
import { warmTheme, minimalistTheme, natureTheme, elegantTheme, softTheme } from '../themes';

export type ThemeName = 'default' | 'warm' | 'minimalist' | 'nature' | 'elegant' | 'soft';

interface ThemeContextType {
  currentTheme: Theme;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
}

const themes: Record<ThemeName, Theme> = {
  default: defaultTheme,
  warm: warmTheme,
  minimalist: minimalistTheme,
  nature: natureTheme,
  elegant: elegantTheme,
  soft: softTheme,
};

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: defaultTheme,
  themeName: 'default',
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>('default');

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