import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Skeleton, type SkeletonElement, type SkeletonProps } from './skeleton';

const skeletonTestId = 'skeleton-test-id';

const defaultProps: SkeletonProps = {};

const renderSkeleton = (
  props: SkeletonProps = defaultProps,
  ref?: Ref<SkeletonElement>
) => {
  render(
    <Skeleton
      {...props}
      data-testid={skeletonTestId}
      ref={ref}
    />
  );
};

describe('Skeleton Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render skeleton', () => {
    renderSkeleton();
    const skeleton = screen.queryByTestId(skeletonTestId);
    expect(skeleton).toBeDefined();
  });

  it('Should forward a ref to the skeleton', () => {
    const skeletonRef = createRef<SkeletonElement>();
    renderSkeleton(defaultProps, skeletonRef);
    const skeleton = screen.queryByTestId(skeletonTestId);
    expect(skeleton).toBeDefined();
    expect(skeletonRef.current).not.toBeNull();
  });
});
