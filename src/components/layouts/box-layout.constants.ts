const BoxLayoutConstants = {
  DISPLAY_NAME: 'Box Layout',
  HORIZONTAL_ALIGNMENT: {
    stretch: 'stretch',
    left: 'left',
    center: 'center',
    right: 'right'
  },
  DEFAULT_HORIZONTAL_ALIGNMENT: 'stretch',
  VERTICAL_ALIGNMENT: {
    stretch: 'stretch',
    top: 'top',
    center: 'center',
    bottom: 'bottom'
  },
  DEFAULT_VERTICAL_ALIGNMENT: 'stretch',
  CHILDREN_COUNT_ERROR_MESSAGE: 'Box layout must have exactly one child.'
} as const;

export { BoxLayoutConstants };
