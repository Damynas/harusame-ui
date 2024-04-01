import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  DataTable,
  type DataTableElement,
  type DataTableProps
} from './data-table';
import { DataTableConstants } from './data-table.constants';
import { DataTableHeader } from './data-table-header';
import { DataTableBody } from './data-table-body';
import { DataTableFooter } from './data-table-footer';
import { DataTableRow } from './data-table-row';
import { DataTableCell } from './data-table-cell';

const dataTableTestId = 'data-table-test-id';

const defaultProps: DataTableProps = {};

const renderDataTable = (
  props: DataTableProps = defaultProps,
  ref?: Ref<DataTableElement>
) => {
  render(
    <DataTable
      {...props}
      data-testid={dataTableTestId}
      ref={ref}
    >
      <DataTableHeader>
        <DataTableRow>
          <DataTableCell variant='header'>Data Table Header</DataTableCell>
        </DataTableRow>
      </DataTableHeader>
      <DataTableBody>
        <DataTableRow>
          <DataTableCell variant='body'>Data Table Body</DataTableCell>
        </DataTableRow>
      </DataTableBody>
      <DataTableFooter>
        <DataTableRow>
          <DataTableCell variant='footer'>Data Table Footer</DataTableCell>
        </DataTableRow>
      </DataTableFooter>
    </DataTable>
  );
};

describe('DataTable Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render data table', () => {
    renderDataTable();
    const dataTable = screen.queryByTestId(dataTableTestId);
    expect(dataTable).toBeDefined();
  });

  it('Should throw an exception if __TYPE prop is changed', () => {
    const props: DataTableProps = {
      ...defaultProps,
      __TYPE: ''
    };
    expect(() => renderDataTable(props)).toThrow(
      DataTableConstants.TYPE_PROP_PASSED_ERROR_MESSAGE
    );
  });

  it('Should forward a ref to the data table', () => {
    const dataTableRef = createRef<DataTableElement>();
    renderDataTable(defaultProps, dataTableRef);
    const dataTable = screen.queryByTestId(dataTableTestId);
    expect(dataTable).toBeDefined();
    expect(dataTableRef.current).not.toBeNull();
  });
});
