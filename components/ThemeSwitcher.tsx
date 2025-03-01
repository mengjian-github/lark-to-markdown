import React from 'react';
import { useTheme, ThemeName } from '../contexts/ThemeContext';

const themes: { name: ThemeName; label: string; color: string; textColor: string }[] = [
  { name: 'default', label: '科技蓝', color: '#1a73e8', textColor: '#ffffff' },
  { name: 'warm', label: '暖阳橙', color: '#e67e22', textColor: '#ffffff' },
  { name: 'minimalist', label: '极简黑', color: '#34495e', textColor: '#ffffff' },
  { name: 'nature', label: '清新绿', color: '#2e7d32', textColor: '#ffffff' },
  { name: 'elegant', label: '典雅紫', color: '#7b2cbf', textColor: '#ffffff' },
  { name: 'soft', label: '柔和粉', color: '#e66d85', textColor: '#ffffff' },
];

const ThemeSwitcher: React.FC = () => {
  const { themeName, setTheme } = useTheme();

  return (
    <div className="theme-options flex flex-wrap justify-center gap-2">
      {themes.map((theme) => (
        <button
          key={theme.name}
          className={`theme-option px-3 py-1 border-2 rounded-full text-sm font-medium transition-all hover:transform hover:translate-y-[-2px] hover:shadow-md ${
            themeName === theme.name ? 'font-bold shadow-sm transform translate-y-[-1px]' : ''
          }`}
          onClick={() => setTheme(theme.name)}
          style={{
            backgroundColor: themeName === theme.name ? theme.color : 'transparent',
            borderColor: theme.color,
            color: themeName === theme.name ? theme.textColor : theme.color,
          }}
        >
          {theme.label}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher; 