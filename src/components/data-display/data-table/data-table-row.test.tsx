import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  DataTableRow,
  type DataTableRowElement,
  type DataTableRowProps
} from './data-table-row';
import { DataTableRowConstants } from './data-table-row.constants';

const dataTableRowTestId = 'data-table-row-test-id';

const defaultProps: DataTableRowProps = {};

const renderDataTableRow = (
  props: DataTableRowProps = defaultProps,
  ref?: Ref<DataTableRowElement>
) => {
  render(
    <DataTableRow
      {...props}
      data-testid={dataTableRowTestId}
      ref={ref}
    />
  );
};

describe('DataTableRow Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render data table row', () => {
    renderDataTableRow();
    const dataTableRow = screen.queryByTestId(dataTableRowTestId);
    expect(dataTableRow).toBeDefined();
  });

  it('Should throw an exception if __TYPE prop is changed', () => {
    const props: DataTableRowProps = {
      ...defaultProps,
      __TYPE: ''
    };
    expect(() => renderDataTableRow(props)).toThrow(
      DataTableRowConstants.TYPE_PROP_PASSED_ERROR_MESSAGE
    );
  });

  it('Should forward a ref to the data table row', () => {
    const dataTableRowRef = createRef<DataTableRowElement>();
    renderDataTableRow(defaultProps, dataTableRowRef);
    const dataTableRow = screen.queryByTestId(dataTableRowTestId);
    expect(dataTableRow).toBeDefined();
    expect(dataTableRowRef.current).not.toBeNull();
  });
});
