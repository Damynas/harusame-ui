import { forwardRef, type ForwardedRef, type HTMLAttributes } from 'react';
import { WrapLayoutConstants } from './wrap-layout.constants';
import {
  HorizontalWrapLayout,
  WrapLayoutBase,
  VerticalWrapLayout
} from './wrap-layout.styles';

type Orientation = keyof typeof WrapLayoutConstants.ORIENTATION;
type HorizontalAlignment =
  keyof typeof WrapLayoutConstants.HORIZONTAL_ALIGNMENT;
type VerticalAlignment = keyof typeof WrapLayoutConstants.VERTICAL_ALIGNMENT;

type WrapLayoutProps = {
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
  rowGap?: string;
  columnGap?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
} & HTMLAttributes<HTMLDivElement>;

type WrapLayoutElement = HTMLDivElement;

type StyledWrapLayout = typeof WrapLayoutBase;

const WrapLayoutComponents: Record<Orientation, StyledWrapLayout> = {
  [WrapLayoutConstants.ORIENTATION.horizontal]: HorizontalWrapLayout,
  [WrapLayoutConstants.ORIENTATION.vertical]: VerticalWrapLayout
};

const getWrapLayoutComponent = (
  orientation: Orientation = WrapLayoutConstants.DEFAULT_ORIENTATION
) => WrapLayoutComponents[orientation];

const WrapLayoutInner = (
  wrapLayoutProps: WrapLayoutProps,
  forwardedRef: ForwardedRef<WrapLayoutElement>
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
    horizontalAlignment = WrapLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT,
    verticalAlignment = WrapLayoutConstants.DEFAULT_VERTICAL_ALIGNMENT,
    orientation,
    rowGap,
    columnGap,
    backgroundColor,
    border,
    borderRadius,
    children,
    ...props
  } = wrapLayoutProps;
  const WrapLayoutComponent = getWrapLayoutComponent(orientation);
  return (
    <WrapLayoutComponent
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
      $rowGap={rowGap}
      $columnGap={columnGap}
      $backgroundColor={backgroundColor}
      $border={border}
      $borderRadius={borderRadius}
      ref={forwardedRef}
    >
      {children}
    </WrapLayoutComponent>
  );
};

const WrapLayout = forwardRef<WrapLayoutElement, WrapLayoutProps>(
  WrapLayoutInner
);
WrapLayout.displayName = WrapLayoutConstants.DISPLAY_NAME;

export { WrapLayout };
export type { WrapLayoutProps, WrapLayoutElement };
