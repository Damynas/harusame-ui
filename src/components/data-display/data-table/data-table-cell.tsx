import { forwardRef, type ForwardedRef, type HTMLAttributes } from 'react';
import { DataTableCellConstants } from './data-table-cell.constants';
import {
  BodyTableCell,
  FooterTableCell,
  HeaderTableCell,
  TableCellText
} from './data-table-cell.styles';
import type {
  StyledTableCell,
  TableCellAlignment,
  TableCellVariant
} from './data-table-cell.types';

type DataTableCellProps = {
  __TYPE?: string;
  variant: TableCellVariant;
  alignment?: TableCellAlignment;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  textColor?: string;
} & HTMLAttributes<DataTableCellElement>;

type DataTableCellElement = HTMLTableCellElement;

const DataTableCellComponents: Record<TableCellVariant, StyledTableCell> = {
  [DataTableCellConstants.VARIANTS.header]: HeaderTableCell,
  [DataTableCellConstants.VARIANTS.body]: BodyTableCell,
  [DataTableCellConstants.VARIANTS.footer]: FooterTableCell
};

const getDataTableCellComponent = (variant: TableCellVariant) =>
  DataTableCellComponents[variant];

const DataTableCellInner = (
  dataTableCellProps: DataTableCellProps,
  forwardedRef: ForwardedRef<DataTableCellElement>
) => {
  const {
    __TYPE,
    variant,
    alignment,
    width,
    minWidth,
    maxWidth,
    textColor,
    children,
    ...props
  } = dataTableCellProps;

  if (__TYPE !== DataTableCellConstants.DISPLAY_NAME)
    throw new Error(DataTableCellConstants.TYPE_PROP_PASSED_ERROR_MESSAGE);

  const TableCellComponent = getDataTableCellComponent(variant);

  return (
    <TableCellComponent
      {...props}
      ref={forwardedRef}
      $alignment={alignment ?? DataTableCellConstants.DEFAULT_ALIGNMENT}
      $width={width}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
    >
      <TableCellText
        $variant={variant}
        $color={textColor}
      >
        {children}
      </TableCellText>
    </TableCellComponent>
  );
};

const DataTableCell = forwardRef<DataTableCellElement, DataTableCellProps>(
  DataTableCellInner
);
DataTableCell.displayName = DataTableCellConstants.DISPLAY_NAME;
DataTableCell.defaultProps = {
  __TYPE: DataTableCellConstants.DISPLAY_NAME
};

export { DataTableCell };
export type { DataTableCellElement, DataTableCellProps };
