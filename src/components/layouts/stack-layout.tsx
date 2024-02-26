import { forwardRef, type ForwardedRef, type HTMLAttributes } from 'react';
import { StackLayoutConstants } from './stack-layout.constants';
import {
  HorizontalStackLayout,
  StackLayoutBase,
  VerticalStackLayout
} from './stack-layout.styles';

type Orientation = keyof typeof StackLayoutConstants.ORIENTATION;
type HorizontalAlignment =
  keyof typeof StackLayoutConstants.HORIZONTAL_ALIGNMENT;
type VerticalAlignment = keyof typeof StackLayoutConstants.VERTICAL_ALIGNMENT;

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

type StyledStackLayout = typeof StackLayoutBase;

const StackLayoutComponents: Record<Orientation, StyledStackLayout> = {
  [StackLayoutConstants.ORIENTATION.horizontal]: HorizontalStackLayout,
  [StackLayoutConstants.ORIENTATION.vertical]: VerticalStackLayout
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
    horizontalAlignment = StackLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT,
    verticalAlignment = StackLayoutConstants.DEFAULT_VERTICAL_ALIGNMENT,
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
      $margin={margin}
      $padding={padding}
      $minWidth={minWidth}
      $minHeight={minHeight}
      $width={width}
      $height={height}
      $maxWidth={maxWidth}
      $maxHeight={maxHeight}
      $horizontalAlignment={horizontalAlignment}
      $verticalAlignment={verticalAlignment}
      $gap={gap}
      $backgroundColor={backgroundColor}
      $border={border}
      $borderRadius={borderRadius}
      ref={forwardedRef}
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
