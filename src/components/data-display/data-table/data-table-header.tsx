import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ForwardedRef,
  type HTMLAttributes
} from 'react';
import { TableHeader } from './data-table-header.styles';
import { DataTableHeaderConstants } from './data-table-header.constants';
import type { DataTableRowProps } from './data-table-row';

type DataTableHeaderProps = {
  __TYPE?: string;
  rowHeight?: string;
} & HTMLAttributes<DataTableHeaderElement>;

type DataTableHeaderElement = HTMLTableSectionElement;

const DataTableHeaderInner = (
  dataTableHeaderProps: DataTableHeaderProps,
  forwardedRef: ForwardedRef<DataTableHeaderElement>
) => {
  const { __TYPE, rowHeight, children, ...props } = dataTableHeaderProps;

  if (__TYPE !== DataTableHeaderConstants.DISPLAY_NAME)
    throw new Error(DataTableHeaderConstants.TYPE_PROP_PASSED_ERROR_MESSAGE);

  if (Children.count(children) > 1)
    throw new Error(DataTableHeaderConstants.CHILDREN_COUNT_ERROR_MESSAGE);

  return (
    <TableHeader
      {...props}
      ref={forwardedRef}
    >
      {Children.map(children, (child) =>
        isValidElement<DataTableRowProps>(child)
          ? cloneElement(child, {
              rowHeight: child.props.rowHeight ?? rowHeight,
              borderColor: 'transparent'
            })
          : child
      )}
    </TableHeader>
  );
};

const DataTableHeader = forwardRef<
  DataTableHeaderElement,
  DataTableHeaderProps
>(DataTableHeaderInner);
DataTableHeader.displayName = DataTableHeaderConstants.DISPLAY_NAME;
DataTableHeader.defaultProps = {
  __TYPE: DataTableHeaderConstants.DISPLAY_NAME
};

export { DataTableHeader };
export type { DataTableHeaderElement, DataTableHeaderProps };
