const WrapLayoutConstants = {
  DISPLAY_NAME: 'Wrap Layout',
  ORIENTATIONS: {
    horizontal: 'horizontal',
    vertical: 'vertical'
  },
  DEFAULT_ORIENTATION: 'horizontal',
  HORIZONTAL_ALIGNMENTS: {
    stretch: 'stretch',
    left: 'left',
    center: 'center',
    right: 'right',
    spaceBetween: 'spaceBetween',
    spaceAround: 'spaceAround',
    spaceEvenly: 'spaceEvenly'
  },
  DEFAULT_HORIZONTAL_ALIGNMENT: 'stretch',
  VERTICAL_ALIGNMENTS: {
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

export { WrapLayoutConstants };
