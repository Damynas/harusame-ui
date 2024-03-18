import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  WrapLayout,
  type WrapLayoutElement,
  type WrapLayoutProps
} from './wrap-layout';

const wrapLayoutTestId = 'wrap-layout-test-id';

const defaultProps: WrapLayoutProps = {};

const renderWrapLayout = (
  props: WrapLayoutProps = defaultProps,
  ref?: Ref<WrapLayoutElement>,
  childrenCount: number = 3
) => {
  render(
    <WrapLayout
      {...props}
      data-testid={wrapLayoutTestId}
      ref={ref}
    >
      {Array.from({ length: childrenCount }).map((_, index) => (
        <div key={`child-${index}`} />
      ))}
    </WrapLayout>
  );
};

describe('Wrap Layout Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render wrap layout', () => {
    renderWrapLayout();
    const wrapLayout = screen.queryByTestId(wrapLayoutTestId);
    expect(wrapLayout).toBeDefined();
  });

  it('Should forward a ref to the wrap layout', () => {
    const wrapLayoutRef = createRef<WrapLayoutElement>();
    renderWrapLayout(defaultProps, wrapLayoutRef);
    const wrapLayout = screen.queryByTestId(wrapLayoutTestId);
    expect(wrapLayout).toBeDefined();
    expect(wrapLayoutRef.current).not.toBeNull();
  });
});
