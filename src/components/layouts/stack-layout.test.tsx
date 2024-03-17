import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  StackLayout,
  type StackLayoutElement,
  type StackLayoutProps
} from './stack-layout';

const stackLayoutTestId = 'stack-layout-test-id';

const defaultProps: StackLayoutProps = {};

const renderStackLayout = (
  props: StackLayoutProps = defaultProps,
  ref?: Ref<StackLayoutElement>,
  childrenCount: number = 3
) => {
  render(
    <StackLayout
      {...props}
      data-testid={stackLayoutTestId}
      ref={ref}
    >
      {Array.from({ length: childrenCount }).map((_, index) => (
        <div key={`child-${index}`} />
      ))}
    </StackLayout>
  );
};

describe('Stack Layout tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render stack layout', () => {
    renderStackLayout();
    const stackLayout = screen.queryByTestId(stackLayoutTestId);
    expect(stackLayout).toBeDefined();
  });

  it('Should forward a ref to the stack layout', () => {
    const stackLayoutRef = createRef<StackLayoutElement>();
    renderStackLayout(defaultProps, stackLayoutRef);
    const stackLayout = screen.queryByTestId(stackLayoutTestId);
    expect(stackLayout).toBeDefined();
    expect(stackLayoutRef.current).not.toBeNull();
  });
});
