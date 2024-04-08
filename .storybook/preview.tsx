import type { Decorator, Parameters, Preview } from '@storybook/react';
import type { ThemeVariant } from '../src/common/theme/themes.types';
import { Themes, ThemeProvider } from '../src/common/theme';
import { FontProvider } from '../src/common/font';
import { convertCase } from '../src/utils';

const themeNames = Object.getOwnPropertyNames(Themes).map((theme) =>
  convertCase(theme, 'camelCase', 'titleCase')
);

const parameters: Parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i
    }
  }
};

const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: themeNames.length && themeNames.at(0),
    toolbar: {
      icon: 'lightning',
      items: themeNames.concat(['No Theme']),
      dynamicTitle: true
    }
  }
};

const withThemeProvider: Decorator = (Story, context) => {
  const themeName = convertCase(
    context.globals.theme,
    'titleCase',
    'camelCase'
  ) as ThemeVariant;
  const theme = Themes[themeName];
  return (
    <ThemeProvider theme={theme}>
      <FontProvider>{Story(context)}</FontProvider>
    </ThemeProvider>
  );
};

const decorators = [withThemeProvider];

const preview: Preview = {
  parameters,
  globalTypes,
  decorators
};

export default preview;
