import type { FontStyle } from './typography.types';

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

const typography: Typography = {
  heading1: {
    fontSize: '2rem',
    fontFamily: 'Roboto',
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: '2rem'
  },
  heading2: {
    fontSize: '1.75rem',
    fontFamily: 'Roboto',
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: '2rem'
  },
  heading3: {
    fontSize: '1.5rem',
    fontFamily: 'Roboto',
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: '2rem'
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

export { typography };
export type { Typography };
