const StackLayoutConstants = {
  DISPLAY_NAME: 'Stack Layout',
  ORIENTATION: {
    horizontal: 'horizontal',
    vertical: 'vertical'
  },
  DEFAULT_ORIENTATION: 'vertical',
  HORIZONTAL_ALIGNMENT: {
    stretch: 'stretch',
    left: 'left',
    center: 'center',
    right: 'right',
    spaceBetween: 'spaceBetween',
    spaceAround: 'spaceAround',
    spaceEvenly: 'spaceEvenly'
  },
  DEFAULT_HORIZONTAL_ALIGNMENT: 'stretch',
  VERTICAL_ALIGNMENT: {
    stretch: 'stretch',
    top: 'top',
    center: 'center',
    bottom: 'bottom',
    spaceBetween: 'spaceBetween',
    spaceAround: 'spaceAround',
    spaceEvenly: 'spaceEvenly'
  },
  DEFAULT_VERTICAL_ALIGNMENT: 'stretch'
} as const;

export { StackLayoutConstants };
