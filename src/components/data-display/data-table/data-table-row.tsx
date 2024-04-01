import { forwardRef, type ForwardedRef, type HTMLAttributes } from 'react';
import { TableRow } from './data-table-row.styles';
import { DataTableRowConstants } from './data-table-row.constants';
import { useTheme } from '../../../common/theme';

type DataTableRowProps = {
  __TYPE?: string;
  rowHeight?: string;
  hoverable?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  hoveredBackgroundColor?: string;
} & HTMLAttributes<DataTableRowElement>;

type DataTableRowElement = HTMLTableRowElement;

const DataTableRowInner = (
  dataTableRowProps: DataTableRowProps,
  forwardedRef: ForwardedRef<DataTableRowElement>
) => {
  const {
    __TYPE,
    rowHeight,
    hoverable,
    borderColor,
    backgroundColor,
    hoveredBackgroundColor,
    children,
    ...props
  } = dataTableRowProps;

  if (__TYPE !== DataTableRowConstants.DISPLAY_NAME)
    throw new Error(DataTableRowConstants.TYPE_PROP_PASSED_ERROR_MESSAGE);

  const theme = useTheme();

  return (
    <TableRow
      {...props}
      ref={forwardedRef}
      $rowHeight={rowHeight}
      $hoverable={hoverable}
      $borderColor={borderColor}
      $backgroundColor={backgroundColor}
      $hoveredBackgroundColor={hoveredBackgroundColor}
      $theme={theme}
    >
      {children}
    </TableRow>
  );
};

const DataTableRow = forwardRef<DataTableRowElement, DataTableRowProps>(
  DataTableRowInner
);
DataTableRow.displayName = DataTableRowConstants.DISPLAY_NAME;
DataTableRow.defaultProps = {
  __TYPE: DataTableRowConstants.DISPLAY_NAME
};

export { DataTableRow };
export type { DataTableRowElement, DataTableRowProps };
