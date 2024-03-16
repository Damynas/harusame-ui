import { createContext, useContext, type ReactNode } from 'react';
import type { Theme } from './themes';
import type { Nullable } from '../shared';

type ThemeProviderProps = {
  theme: Theme;
  children?: ReactNode;
};

const ThemeContext = createContext<Nullable<Theme>>(null);

const ThemeProvider = (props: ThemeProviderProps) => {
  const { theme, children } = props;
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext<Nullable<Theme>>(ThemeContext);

export { ThemeProvider, useTheme };
export type { ThemeProviderProps };
