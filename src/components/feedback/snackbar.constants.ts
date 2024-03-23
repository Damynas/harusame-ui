const SnackbarConstants = {
  DISPLAY_NAME: 'Snackbar',
  SNACKBAR_VARIANTS: {
    default: 'default',
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error'
  },
  DEFAULT_SNACKBAR_VARIANT: 'default',
  SNACKBAR_POSITIONS: {
    topLeft: 'topLeft',
    topMiddle: 'topMiddle',
    topRight: 'topRight',
    bottomLeft: 'bottomLeft',
    bottomMiddle: 'bottomMiddle',
    bottomRight: 'bottomRight'
  },
  DEFAULT_SNACKBAR_POSITION: 'bottomLeft'
} as const;

export { SnackbarConstants };
