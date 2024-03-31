import { forwardRef, type ForwardedRef, type HTMLAttributes } from 'react';
import { SkeletonConstants } from './skeleton.constants';
import { SkeletonBase } from './skeleton.styles';
import { useTheme } from '../../common/theme';

type SkeletonProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
} & HTMLAttributes<SkeletonElement>;

type SkeletonElement = HTMLDivElement;

const SkeletonInner = (
  skeletonProps: SkeletonProps,
  forwardedRef: ForwardedRef<SkeletonElement>
) => {
  const { width, height, borderRadius, ...props } = skeletonProps;
  const theme = useTheme();

  return (
    <SkeletonBase
      {...props}
      ref={forwardedRef}
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
      $theme={theme}
    />
  );
};

const Skeleton = forwardRef<SkeletonElement, SkeletonProps>(SkeletonInner);
Skeleton.displayName = SkeletonConstants.DISPLAY_NAME;

export { Skeleton };
export type { SkeletonElement, SkeletonProps };
