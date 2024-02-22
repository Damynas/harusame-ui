import type { ReactNode } from 'react';
import { ThemeProvider as ThemeProviderBase } from 'styled-components';
import type { Theme } from './theme';

type ThemeProviderProps = {
  theme: Theme;
  children?: ReactNode;
};

const ThemeProvider = (props: ThemeProviderProps) => {
  const { theme, children } = props;
  return <ThemeProviderBase theme={theme}>{children}</ThemeProviderBase>;
};

export { ThemeProvider, type ThemeProviderProps };
