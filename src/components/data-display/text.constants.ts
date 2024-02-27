const TextConstants = {
  DISPLAY_NAME: 'Text',
  TEXT_VARIANTS: {
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
  },
  DEFAULT_TEXT_VARIANT: 'body2',
  FONT_WEIGHTS: {
    regular: 'regular',
    bold: 'bold',
    black: 'black'
  },
  DEFAULT_FONT_WEIGHT: 'regular'
} as const;

export { TextConstants };
