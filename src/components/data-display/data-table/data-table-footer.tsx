import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ForwardedRef,
  type HTMLAttributes
} from 'react';
import { TableFooter } from './data-table-footer.styles';
import { DataTableFooterConstants } from './data-table-footer.constants';
import type { DataTableRowProps } from './data-table-row';

type DataTableFooterProps = {
  __TYPE?: string;
  rowHeight?: string;
} & HTMLAttributes<DataTableFooterElement>;

type DataTableFooterElement = HTMLTableSectionElement;

const DataTableFooterInner = (
  dataTableFooterProps: DataTableFooterProps,
  forwardedRef: ForwardedRef<DataTableFooterElement>
) => {
  const { __TYPE, rowHeight, children, ...props } = dataTableFooterProps;

  if (__TYPE !== DataTableFooterConstants.DISPLAY_NAME)
    throw new Error(DataTableFooterConstants.TYPE_PROP_PASSED_ERROR_MESSAGE);

  if (Children.count(children) > 1)
    throw new Error(DataTableFooterConstants.CHILDREN_COUNT_ERROR_MESSAGE);

  return (
    <TableFooter
      {...props}
      ref={forwardedRef}
    >
      {Children.map(children, (child) =>
        isValidElement<DataTableRowProps>(child)
          ? cloneElement(child, {
              rowHeight: child.props.rowHeight ?? rowHeight
            })
          : child
      )}
    </TableFooter>
  );
};

const DataTableFooter = forwardRef<
  DataTableFooterElement,
  DataTableFooterProps
>(DataTableFooterInner);
DataTableFooter.displayName = DataTableFooterConstants.DISPLAY_NAME;
DataTableFooter.defaultProps = {
  __TYPE: DataTableFooterConstants.DISPLAY_NAME
};

export { DataTableFooter };
export type { DataTableFooterElement, DataTableFooterProps };
