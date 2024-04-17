import { cleanup, render, screen } from '@testing-library/react';
import { ThemeProvider, useTheme } from './theme-provider';
import { Themes } from './themes';
import { Text } from '../../components';

const themeProviderTestId = 'theme-provider-test-id';

const ComponentWithTheme = () => {
  const theme = useTheme();
  return (
    <Text data-testid={themeProviderTestId}>{theme?.colors.primary500}</Text>
  );
};

const renderTheme = () => {
  render(
    <ThemeProvider theme={Themes.hunterGreen}>
      <ComponentWithTheme />
    </ThemeProvider>
  );
};

describe('Theme Provider Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should give access to the theme for the child components', () => {
    renderTheme();
    const themeProvider = screen.queryByTestId(themeProviderTestId);
    expect(themeProvider).toBeDefined();
    expect(themeProvider).toHaveTextContent(
      Themes.hunterGreen.colors.primary500
    );
  });
});
