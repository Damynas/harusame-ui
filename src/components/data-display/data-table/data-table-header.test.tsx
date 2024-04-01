import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  DataTableHeader,
  type DataTableHeaderElement,
  type DataTableHeaderProps
} from './data-table-header';
import { DataTableHeaderConstants } from './data-table-header.constants';
import { DataTableRow } from './data-table-row';

const dataTableHeaderTestId = 'data-table-header-test-id';

const defaultProps: DataTableHeaderProps = {};

const renderDataTableHeader = (
  props: DataTableHeaderProps = defaultProps,
  ref?: Ref<DataTableHeaderElement>
) => {
  render(
    <DataTableHeader
      {...props}
      data-testid={dataTableHeaderTestId}
      ref={ref}
    />
  );
};

describe('DataTableHeader Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render data table header', () => {
    renderDataTableHeader();
    const dataTableHeader = screen.queryByTestId(dataTableHeaderTestId);
    expect(dataTableHeader).toBeDefined();
  });

  it('Should throw an exception if __TYPE prop is changed', () => {
    const props: DataTableHeaderProps = {
      ...defaultProps,
      __TYPE: ''
    };
    expect(() => renderDataTableHeader(props)).toThrow(
      DataTableHeaderConstants.TYPE_PROP_PASSED_ERROR_MESSAGE
    );
  });

  it('Should throw an exception if there is more than one child', () => {
    const props: DataTableHeaderProps = {
      ...defaultProps,
      children: [
        <DataTableRow key='First Child' />,
        <DataTableRow key='Second Child' />
      ]
    };
    expect(() => renderDataTableHeader(props)).toThrow(
      DataTableHeaderConstants.CHILDREN_COUNT_ERROR_MESSAGE
    );
  });

  it('Should forward a ref to the data table header', () => {
    const dataTableHeaderRef = createRef<DataTableHeaderElement>();
    renderDataTableHeader(defaultProps, dataTableHeaderRef);
    const dataTableHeader = screen.queryByTestId(dataTableHeaderTestId);
    expect(dataTableHeader).toBeDefined();
    expect(dataTableHeaderRef.current).not.toBeNull();
  });
});
