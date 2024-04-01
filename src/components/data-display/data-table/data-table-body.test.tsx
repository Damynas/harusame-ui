import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  DataTableBody,
  type DataTableBodyElement,
  type DataTableBodyProps
} from './data-table-body';
import { DataTableBodyConstants } from './data-table-body.constants';

const dataTableBodyTestId = 'data-table-body-test-id';

const defaultProps: DataTableBodyProps = {};

const renderDataTableBody = (
  props: DataTableBodyProps = defaultProps,
  ref?: Ref<DataTableBodyElement>
) => {
  render(
    <DataTableBody
      {...props}
      data-testid={dataTableBodyTestId}
      ref={ref}
    />
  );
};

describe('DataTableBody Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render data table body', () => {
    renderDataTableBody();
    const dataTableBody = screen.queryByTestId(dataTableBodyTestId);
    expect(dataTableBody).toBeDefined();
  });

  it('Should throw an exception if __TYPE prop is changed', () => {
    const props: DataTableBodyProps = {
      ...defaultProps,
      __TYPE: ''
    };
    expect(() => renderDataTableBody(props)).toThrow(
      DataTableBodyConstants.TYPE_PROP_PASSED_ERROR_MESSAGE
    );
  });

  it('Should forward a ref to the data table body', () => {
    const dataTableBodyRef = createRef<DataTableBodyElement>();
    renderDataTableBody(defaultProps, dataTableBodyRef);
    const dataTableBody = screen.queryByTestId(dataTableBodyTestId);
    expect(dataTableBody).toBeDefined();
    expect(dataTableBodyRef.current).not.toBeNull();
  });
});
