import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { ThemeProvider as EmotionProvider } from '@emotion/react';
import merge from 'lodash.merge';

const DEFAULT_THEME = Object.freeze({
  colors: {
    primary: '#1976d2',
    secondary: '#dc004e',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
    success: '#4caf50',
    common: {
      white: '#ffffff',
      black: '#000000',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
});

export const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme was called outside ThemeContext.Provider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  // Put in localstorage
  // useEffect(() => {
  // }, [theme]);

  const updateTheme = useCallback(changes => {
    setTheme(currentTheme => merge({}, currentTheme, changes));
  }, []);

  const resetTheme = useCallback(() => setTheme(DEFAULT_THEME), []);

  const contextValue = useMemo(
    () => ({ theme, updateTheme, resetTheme }),
    [resetTheme, theme, updateTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <EmotionProvider theme={theme}>{children}</EmotionProvider>
    </ThemeContext.Provider>
  );
};
