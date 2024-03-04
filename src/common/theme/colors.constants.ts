const ColorConstants = {
  COMMON_COLORS: {
    white: 'white',
    black: 'black'
  },
  FEEDBACK_COLORS: {
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error'
  },
  THEME_COLORS: {
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
  }
} as const;

export { ColorConstants };
