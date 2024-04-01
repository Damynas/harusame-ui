import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ForwardedRef,
  type HTMLAttributes,
  type ReactNode
} from 'react';
import { DataTableConstants } from './data-table.constants';
import { Table } from './data-table.styles';
import type { DataTableHeaderProps } from './data-table-header';
import type { DataTableBodyProps } from './data-table-body';
import { DataTableBodyConstants } from './data-table-body.constants';
import {
  DataTableFooter,
  type DataTableFooterProps
} from './data-table-footer';
import { DataTableRow } from './data-table-row';
import { DataTableCell } from './data-table-cell';
import { pluralize } from '../../../utils/pluralize';
import { useTheme } from '../../../common/theme';

type DataTableProps = {
  __TYPE?: string;
  loading?: boolean;
  autoFooter?: boolean;
  hoverable?: boolean;
  itemName?: string;
  rowHeight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  margin?: string;
  borderRadius?: string;
  hoveredBackgroundColor?: string;
} & HTMLAttributes<DataTableElement>;

type DataTableElement = HTMLTableElement;

const getRowCount = (children?: ReactNode) => {
  const dataTableBody = Children.toArray(children).find(
    (child) =>
      isValidElement(child) &&
      child.props.__TYPE === DataTableBodyConstants.DISPLAY_NAME
  );
  return isValidElement(dataTableBody)
    ? Children.count(dataTableBody.props.children)
    : null;
};

const DataTableInner = (
  dataTableProps: DataTableProps,
  forwardedRef: ForwardedRef<DataTableElement>
) => {
  const {
    __TYPE,
    loading,
    autoFooter,
    hoverable,
    itemName,
    rowHeight,
    width,
    minWidth,
    maxWidth,
    margin,
    borderRadius,
    hoveredBackgroundColor,
    children,
    ...props
  } = dataTableProps;

  if (__TYPE !== DataTableConstants.DISPLAY_NAME)
    throw new Error(DataTableConstants.TYPE_PROP_PASSED_ERROR_MESSAGE);

  const rowCount = getRowCount(children);
  const theme = useTheme();

  return (
    <Table
      {...props}
      ref={forwardedRef}
      $width={width}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $margin={margin}
      $borderRadius={borderRadius}
      $theme={theme}
    >
      {Children.map(children, (child) => {
        if (
          isValidElement<DataTableBodyProps>(child) &&
          child.props.__TYPE === DataTableBodyConstants.DISPLAY_NAME
        ) {
          return cloneElement(child, {
            loading: child.props.loading ?? loading,
            hoverable: child.props.hoverable ?? hoverable,
            rowHeight: child.props.rowHeight ?? rowHeight,
            hoveredBackgroundColor:
              child.props.hoveredBackgroundColor ?? hoveredBackgroundColor
          });
        }
        if (
          isValidElement<DataTableHeaderProps | DataTableFooterProps>(child)
        ) {
          return cloneElement(child, {
            rowHeight: child.props.rowHeight ?? rowHeight
          });
        }
        return child;
      })}
      {!loading && autoFooter && rowCount && (
        <DataTableFooter>
          <DataTableRow>
            <DataTableCell
              variant='footer'
              alignment='center'
            >
              {pluralize(
                itemName ?? DataTableConstants.DEFAULT_ITEM_NAME,
                rowCount,
                true
              )}
            </DataTableCell>
          </DataTableRow>
        </DataTableFooter>
      )}
    </Table>
  );
};

const DataTable = forwardRef<DataTableElement, DataTableProps>(DataTableInner);
DataTable.displayName = DataTableConstants.DISPLAY_NAME;
DataTable.defaultProps = {
  __TYPE: DataTableConstants.DISPLAY_NAME
};

export { DataTable };
export type { DataTableElement, DataTableProps };
