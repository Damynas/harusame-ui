const ButtonBaseConstants = {
  DISPLAY_NAME: 'Button Base',
  BUTTON_VARIANTS: {
    contained: 'contained',
    outlined: 'outlined',
    text: 'text'
  },
  DEFAULT_BUTTON_VARIANT: 'contained',
  BUTTON_SIZES: {
    small: 'small',
    regular: 'regular',
    large: 'large'
  },
  DEFAULT_BUTTON_SIZE: 'regular'
} as const;

export { ButtonBaseConstants };
