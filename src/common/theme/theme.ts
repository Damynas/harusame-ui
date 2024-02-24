import { ThemeConstants } from './theme.constants';

type Theme = {
  colors: CommonColors & MessageColors & RequiredColors;
  typography?: Typography;
};

type ThemeVariant = keyof typeof ThemeConstants.THEME_VARIANTS;

type CommonColor = keyof typeof ThemeConstants.COMMON_COLORS;
type MessageColor = keyof typeof ThemeConstants.MESSAGE_COLORS;
type RequiredColor = keyof typeof ThemeConstants.REQUIRED_COLORS;
type ColorStrength = keyof typeof ThemeConstants.COLOR_STRENGTHS;

type CommonColors = {
  [Color in keyof CommonColor as CommonColor]?: string;
};
type MessageColors = {
  [Color in keyof MessageColor &
    keyof ColorStrength as `${MessageColor}${ColorStrength}`]?: string;
};
type RequiredColors = {
  [Color in keyof RequiredColor &
    keyof ColorStrength as `${RequiredColor}${ColorStrength}`]: string;
};

type FontStyle = keyof typeof ThemeConstants.FONT_STYLES;

type Typography = {
  [Font in keyof FontStyle as FontStyle]: {
    fontFamily: string;
    fontSize: string;
    fontWeights: {
      regular: number;
      bold: number;
      black: number;
    };
    lineHeight: string;
  };
};

const defaultCommonColors: CommonColors = {
  white: '#FFFFFF',
  black: '#000000'
};

const defaultMessageColors: MessageColors = {
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

const defaultTypography: Typography = {
  heading1: {
    fontSize: '2rem',
    fontFamily: 'Roboto',
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: '1.5rem'
  },
  heading2: {
    fontSize: '1.75rem',
    fontFamily: 'Roboto',
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: '1.5rem'
  },
  heading3: {
    fontSize: '1.5rem',
    fontFamily: 'Roboto',
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: '1.5rem'
  },
  heading4: {
    fontSize: '1.375rem',
    fontFamily: 'Roboto',
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: '1.5rem'
  },
  heading5: {
    fontSize: '1.25rem',
    fontFamily: 'Roboto',
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: '1.5rem'
  },
  heading6: {
    fontSize: '1.125rem',
    fontFamily: 'Roboto',
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: '1.5rem'
  },
  body1: {
    fontSize: '1rem',
    fontFamily: 'Roboto',
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: '1.2rem'
  },
  body2: {
    fontSize: '0.875rem',
    fontFamily: 'Roboto',
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: '1.2rem'
  },
  caption1: {
    fontSize: '0.75rem',
    fontFamily: 'Roboto',
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: '1rem'
  },
  caption2: {
    fontSize: '0.625rem',
    fontFamily: 'Roboto',
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: '1rem'
  }
};

const hunterGreen: Theme = {
  colors: {
    ...defaultCommonColors,
    ...defaultMessageColors,

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
    ...defaultTypography
  }
};

const purpleSapphire: Theme = {
  colors: {
    ...defaultCommonColors,
    ...defaultMessageColors,

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
    ...defaultTypography
  }
};

const Themes: Record<ThemeVariant, Theme> = {
  [ThemeConstants.THEME_VARIANTS.hunterGreen]: hunterGreen,
  [ThemeConstants.THEME_VARIANTS.purpleSapphire]: purpleSapphire
};

export { Themes };
export type { Theme };
