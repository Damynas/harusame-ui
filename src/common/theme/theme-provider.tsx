import { createContext, useContext, type ReactNode } from 'react';
import type { Theme } from './theme';

type ThemeProviderProps = {
  theme: Theme;
  children?: ReactNode;
};

const ThemeContext = createContext<Theme | null>(null);

const ThemeProvider = (props: ThemeProviderProps) => {
  const { theme, children } = props;
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext<Theme | null>(ThemeContext);

export { ThemeProvider, useTheme };
export type { ThemeProviderProps };
