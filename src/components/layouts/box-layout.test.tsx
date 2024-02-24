import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  BoxLayout,
  type BoxLayoutElement,
  type BoxLayoutProps
} from './box-layout';
import { BoxLayoutConstants } from './box-layout.constants';

const boxLayoutTestId = 'box-layout-test-id';

const defaultProps: BoxLayoutProps = {};

const renderBoxLayout = (
  props: BoxLayoutProps = defaultProps,
  ref?: Ref<BoxLayoutElement>,
  childrenCount: number = 1
) => {
  render(
    <BoxLayout
      {...props}
      data-testid={boxLayoutTestId}
      ref={ref}
    >
      {Array.from({ length: childrenCount }).map((_, index) => (
        <div key={index} />
      ))}
    </BoxLayout>
  );
};

describe('Box Layout tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render box layout', () => {
    renderBoxLayout();
    const boxLayout = screen.queryByTestId(boxLayoutTestId);
    expect(boxLayout).toBeDefined();
  });

  it('Should forward a ref to the box layout', () => {
    const boxLayoutRef = createRef<BoxLayoutElement>();
    renderBoxLayout(defaultProps, boxLayoutRef);
    const boxLayout = screen.queryByTestId(boxLayoutTestId);
    expect(boxLayout).toBeDefined();
    expect(boxLayoutRef.current).not.toBeNull();
  });

  it('Should throw an exception if there are no children', () => {
    expect(() => renderBoxLayout(defaultProps, undefined, 0)).toThrow(
      BoxLayoutConstants.CHILDREN_COUNT_ERROR_MESSAGE
    );
  });

  it('Should throw an exception if there are more than one child', () => {
    expect(() => renderBoxLayout(defaultProps, undefined, 2)).toThrow(
      BoxLayoutConstants.CHILDREN_COUNT_ERROR_MESSAGE
    );
  });
});
