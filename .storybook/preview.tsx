import React from 'react';
import type { Decorator, Parameters, Preview } from '@storybook/react';
import { Themes, ThemeProvider } from '../src/common/theme';
import { Font } from '../src/common/font';
import { convertCase } from '../src/utils';

const themeNames = Object.getOwnPropertyNames(Themes).map((theme) =>
  convertCase(theme, 'camelCase', 'titleCase')
);

const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
      items: themeNames,
      dynamicTitle: true
    }
  }
};

const withThemeProvider: Decorator = (Story, context) => {
  const themeName = context.globals.theme;
  const theme = Themes[convertCase(themeName, 'titleCase', 'camelCase')];
  return (
    <ThemeProvider theme={theme}>
      <Font />
      {Story(context)}
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
