import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  DataTableFooter,
  type DataTableFooterElement,
  type DataTableFooterProps
} from './data-table-footer';
import { DataTableFooterConstants } from './data-table-footer.constants';
import { DataTableRow } from './data-table-row';

const dataTableFooterTestId = 'data-table-footer-test-id';

const defaultProps: DataTableFooterProps = {};

const renderDataTableFooter = (
  props: DataTableFooterProps = defaultProps,
  ref?: Ref<DataTableFooterElement>
) => {
  render(
    <DataTableFooter
      {...props}
      data-testid={dataTableFooterTestId}
      ref={ref}
    />
  );
};

describe('DataTableFooter Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render data table footer', () => {
    renderDataTableFooter();
    const dataTableFooter = screen.queryByTestId(dataTableFooterTestId);
    expect(dataTableFooter).toBeDefined();
  });

  it('Should throw an exception if __TYPE prop is changed', () => {
    const props: DataTableFooterProps = {
      ...defaultProps,
      __TYPE: ''
    };
    expect(() => renderDataTableFooter(props)).toThrow(
      DataTableFooterConstants.TYPE_PROP_PASSED_ERROR_MESSAGE
    );
  });

  it('Should throw an exception if there is more than one child', () => {
    const props: DataTableFooterProps = {
      ...defaultProps,
      children: [
        <DataTableRow key='First Child' />,
        <DataTableRow key='Second Child' />
      ]
    };
    expect(() => renderDataTableFooter(props)).toThrow(
      DataTableFooterConstants.CHILDREN_COUNT_ERROR_MESSAGE
    );
  });

  it('Should forward a ref to the data table footer', () => {
    const dataTableFooterRef = createRef<DataTableFooterElement>();
    renderDataTableFooter(defaultProps, dataTableFooterRef);
    const dataTableFooter = screen.queryByTestId(dataTableFooterTestId);
    expect(dataTableFooter).toBeDefined();
    expect(dataTableFooterRef.current).not.toBeNull();
  });
});
