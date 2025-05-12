
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for system preference first
    if (typeof window !== 'undefined') {
      // Check for saved preference
      const savedTheme = localStorage.getItem('vr-theme') as Theme;
      if (savedTheme) {
        return savedTheme;
      }
      
      // Use system preference as fallback
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemPrefersDark ? 'dark' : 'light';
    }
    
    return 'dark'; // Default to dark
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both classes
    root.classList.remove('dark', 'light');
    
    // Add the current theme as class
    root.classList.add(theme);
    
    // Save to local storage
    localStorage.setItem('vr-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
