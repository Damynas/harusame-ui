import { ThemeConstants } from './themes.constants';
import type { ThemeVariant } from './themes.types';
import {
  commonColors,
  feedbackColors,
  type CommonColors,
  type FeedbackColors,
  type ThemeColors
} from './colors';
import { typography, type Typography } from './typography';

type Theme = {
  colors: CommonColors & FeedbackColors & ThemeColors;
  typography?: Typography;
};

const hunterGreen: Theme = {
  colors: {
    ...commonColors,
    ...feedbackColors,

    neutral100: '#F5F5F5',
    neutral200: '#F1F1F1',
    neutral300: '#DBDDDB',
    neutral400: '#939893',
    neutral500: '#4F5851',
    neutral600: '#2B352D',
    neutral700: '#0E1A10',

    primary100: '#C0CDC2',
    primary200: '#A2B5A5',
    primary300: '#78937C',
    primary400: '#5D7E62',
    primary500: '#355E3B',
    primary600: '#305636',
    primary700: '#26432A'
  },
  typography: {
    ...typography
  }
};

const purpleSapphire: Theme = {
  colors: {
    ...commonColors,
    ...feedbackColors,

    neutral100: '#F5F5F5',
    neutral200: '#F6F5F6',
    neutral300: '#DCDBDD',
    neutral400: '#969298',
    neutral500: '#544E57',
    neutral600: '#312A35',
    neutral700: '#150D1A',

    primary100: '#D2C6D9',
    primary200: '#BDAAC7',
    primary300: '#9F83AD',
    primary400: '#8C6B9D',
    primary500: '#6F4685',
    primary600: '#654079',
    primary700: '#4F325E'
  },
  typography: {
    ...typography
  }
};

const Themes: Record<ThemeVariant, Theme> = {
  [ThemeConstants.THEME_VARIANTS.hunterGreen]: hunterGreen,
  [ThemeConstants.THEME_VARIANTS.purpleSapphire]: purpleSapphire
};

export { Themes };
export type { Theme };
