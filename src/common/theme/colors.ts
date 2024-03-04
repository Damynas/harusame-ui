import type {
  ColorStrength,
  CommonColor,
  FeedbackColor,
  ThemeColor
} from './colors.types';

type CommonColors = {
  [Color in keyof CommonColor as CommonColor]?: string;
};
type FeedbackColors = {
  [Color in keyof FeedbackColor &
    keyof ColorStrength as `${FeedbackColor}${ColorStrength}`]?: string;
};
type ThemeColors = {
  [Color in keyof ThemeColor &
    keyof ColorStrength as `${ThemeColor}${ColorStrength}`]: string;
};

const commonColors: CommonColors = {
  white: '#FFFFFF',
  black: '#000000'
};

const feedbackColors: FeedbackColors = {
  info100: '#B5C9EA',
  info200: '#91AFDF',
  info300: '#5E8BD1',
  info400: '#3F75C8',
  info500: '#3F75C8',
  info600: '#0E4BA9',
  info700: '#0B3A84',

  success100: '#B3D0BB',
  success200: '#8FB99A',
  success300: '#5C986C',
  success400: '#3C854F',
  success500: '#0B6623',
  success600: '#0A5D20',
  success700: '#084819',

  warning100: '#FBDCB9',
  warning200: '#F9CB97',
  warning300: '#F6B467',
  warning400: '#F5A549',
  warning500: '#F28F1C',
  warning600: '#DC8219',
  warning700: '#AC6614',

  error100: '#F0B5BA',
  error200: '#E99198',
  error300: '#DF5F6A',
  error400: '#D9404D',
  error500: '#CF1020',
  error600: '#BC0F1D',
  error700: '#930B17'
};

export { commonColors, feedbackColors };
export type { CommonColors, FeedbackColors, ThemeColors };
