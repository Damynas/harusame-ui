import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ForwardedRef,
  type HTMLAttributes
} from 'react';
import { TableBody, TableRowSkeleton } from './data-table-body.styles';
import { DataTableBodyConstants } from './data-table-body.constants';
import { DataTableRow, type DataTableRowProps } from './data-table-row';
import { DataTableCell } from './data-table-cell';

type DataTableBodyProps = {
  __TYPE?: string;
  loading?: boolean;
  rowHeight?: string;
  hoverable?: boolean;
  hoveredBackgroundColor?: string;
} & HTMLAttributes<DataTableBodyElement>;

type DataTableBodyElement = HTMLTableSectionElement;

const DataTableBodyInner = (
  dataTableBodyProps: DataTableBodyProps,
  forwardedRef: ForwardedRef<DataTableBodyElement>
) => {
  const {
    __TYPE,
    loading,
    rowHeight,
    hoverable,
    hoveredBackgroundColor,
    children,
    ...props
  } = dataTableBodyProps;

  if (__TYPE !== DataTableBodyConstants.DISPLAY_NAME)
    throw new Error(DataTableBodyConstants.TYPE_PROP_PASSED_ERROR_MESSAGE);

  return (
    <TableBody
      {...props}
      ref={forwardedRef}
    >
      {loading
        ? Array.from({ length: 3 }).map((_, index) => (
            <DataTableRow key={`data-table-skeleton-row-${index}`}>
              <DataTableCell variant='body'>
                <TableRowSkeleton />
              </DataTableCell>
            </DataTableRow>
          ))
        : Children.map(children, (child) =>
            isValidElement<DataTableRowProps>(child)
              ? cloneElement(child, {
                  rowHeight: child.props.rowHeight ?? rowHeight,
                  hoverable: child.props.hoverable ?? hoverable,
                  hoveredBackgroundColor:
                    child.props.hoveredBackgroundColor ?? hoveredBackgroundColor
                })
              : child
          )}
    </TableBody>
  );
};

const DataTableBody = forwardRef<DataTableBodyElement, DataTableBodyProps>(
  DataTableBodyInner
);
DataTableBody.displayName = DataTableBodyConstants.DISPLAY_NAME;
DataTableBody.defaultProps = {
  __TYPE: DataTableBodyConstants.DISPLAY_NAME
};

export { DataTableBody };
export type { DataTableBodyElement, DataTableBodyProps };
