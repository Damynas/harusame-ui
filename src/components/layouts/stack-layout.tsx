import { forwardRef, type ForwardedRef, type HTMLAttributes } from 'react';
import { StackLayoutConstants } from './stack-layout.constants';
import {
  HorizontalStackLayout,
  VerticalStackLayout,
  type StyledStackLayout
} from './stack-layout.styles';
import type {
  Orientation,
  HorizontalAlignment,
  VerticalAlignment
} from './stack-layout.types';

type StackLayoutProps = {
  margin?: string;
  padding?: string;
  minWidth?: string;
  minHeight?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  horizontalAlignment?: HorizontalAlignment;
  verticalAlignment?: VerticalAlignment;
  orientation?: Orientation;
  gap?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
} & HTMLAttributes<HTMLDivElement>;

type StackLayoutElement = HTMLDivElement;

const StackLayoutComponents: Record<Orientation, StyledStackLayout> = {
  [StackLayoutConstants.ORIENTATIONS.horizontal]: HorizontalStackLayout,
  [StackLayoutConstants.ORIENTATIONS.vertical]: VerticalStackLayout
};

const getStackLayoutComponent = (
  orientation: Orientation = StackLayoutConstants.DEFAULT_ORIENTATION
) => StackLayoutComponents[orientation];

const StackLayoutInner = (
  stackLayoutProps: StackLayoutProps,
  forwardedRef: ForwardedRef<StackLayoutElement>
) => {
  const {
    margin,
    padding,
    minWidth,
    minHeight,
    width,
    height,
    maxWidth,
    maxHeight,
    horizontalAlignment,
    verticalAlignment,
    orientation,
    gap,
    backgroundColor,
    border,
    borderRadius,
    children,
    ...props
  } = stackLayoutProps;
  const StackLayoutComponent = getStackLayoutComponent(orientation);
  return (
    <StackLayoutComponent
      {...props}
      ref={forwardedRef}
      $margin={margin}
      $padding={padding}
      $minWidth={minWidth}
      $minHeight={minHeight}
      $width={width}
      $height={height}
      $maxWidth={maxWidth}
      $maxHeight={maxHeight}
      $horizontalAlignment={
        horizontalAlignment ?? StackLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT
      }
      $verticalAlignment={
        verticalAlignment ?? StackLayoutConstants.DEFAULT_VERTICAL_ALIGNMENT
      }
      $gap={gap}
      $backgroundColor={backgroundColor}
      $border={border}
      $borderRadius={borderRadius}
    >
      {children}
    </StackLayoutComponent>
  );
};

const StackLayout = forwardRef<StackLayoutElement, StackLayoutProps>(
  StackLayoutInner
);
StackLayout.displayName = StackLayoutConstants.DISPLAY_NAME;

export { StackLayout };
export type { StackLayoutProps, StackLayoutElement };
