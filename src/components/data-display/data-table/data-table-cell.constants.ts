const DataTableCellConstants = {
  DISPLAY_NAME: 'Data Table Cell',
  VARIANTS: {
    header: 'header',
    body: 'body',
    footer: 'footer'
  },
  ALIGNMENTS: {
    stretch: 'stretch',
    left: 'left',
    center: 'center',
    right: 'right'
  },
  DEFAULT_ALIGNMENT: 'stretch',
  TYPE_PROP_PASSED_ERROR_MESSAGE: '__TYPE property must not be used.'
} as const;

export { DataTableCellConstants };
