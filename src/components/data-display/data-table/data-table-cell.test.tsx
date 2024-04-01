import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  DataTableCell,
  type DataTableCellElement,
  type DataTableCellProps
} from './data-table-cell';
import { DataTableCellConstants } from './data-table-cell.constants';

const dataTableCellTestId = 'data-table-cell-test-id';

const defaultProps: DataTableCellProps = {
  variant: 'body'
};

const renderDataTableCell = (
  props: DataTableCellProps = defaultProps,
  ref?: Ref<DataTableCellElement>
) => {
  render(
    <DataTableCell
      {...props}
      data-testid={dataTableCellTestId}
      ref={ref}
    />
  );
};

describe('DataTableCell Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render data table cell', () => {
    renderDataTableCell();
    const dataTableCell = screen.queryByTestId(dataTableCellTestId);
    expect(dataTableCell).toBeDefined();
  });

  it('Should throw an exception if __TYPE prop is changed', () => {
    const props: DataTableCellProps = {
      ...defaultProps,
      __TYPE: ''
    };
    expect(() => renderDataTableCell(props)).toThrow(
      DataTableCellConstants.TYPE_PROP_PASSED_ERROR_MESSAGE
    );
  });

  it('Should forward a ref to the data table cell', () => {
    const dataTableCellRef = createRef<DataTableCellElement>();
    renderDataTableCell(defaultProps, dataTableCellRef);
    const dataTableCell = screen.queryByTestId(dataTableCellTestId);
    expect(dataTableCell).toBeDefined();
    expect(dataTableCellRef.current).not.toBeNull();
  });
});
