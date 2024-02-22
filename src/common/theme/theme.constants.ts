const ThemeConstants = {
  THEME_VARIANTS: {
    hunterGreen: 'hunterGreen',
    purpleSapphire: 'purpleSapphire'
  },
  COMMON_COLORS: {
    white: 'white',
    black: 'black'
  },
  MESSAGE_COLORS: {
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error'
  },
  REQUIRED_COLORS: {
    neutral: 'neutral',
    primary: 'primary'
  },
  COLOR_STRENGTHS: {
    '100': 100,
    '200': 200,
    '300': 300,
    '400': 400,
    '500': 500,
    '600': 600,
    '700': 700
  },
  FONT_STYLES: {
    heading1: 'heading1',
    heading2: 'heading2',
    heading3: 'heading3',
    heading4: 'heading4',
    heading5: 'heading5',
    heading6: 'heading6',
    body1: 'body1',
    body2: 'body2',
    caption1: 'caption1',
    caption2: 'caption2'
  }
} as const;

export { ThemeConstants };
