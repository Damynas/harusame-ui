import { forwardRef, type ForwardedRef, type HTMLAttributes } from 'react';
import { WrapLayoutConstants } from './wrap-layout.constants';
import {
  HorizontalWrapLayout,
  VerticalWrapLayout,
  type StyledWrapLayout
} from './wrap-layout.styles';
import {
  Orientation,
  HorizontalAlignment,
  VerticalAlignment
} from './wrap-layout.types';

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

const WrapLayoutComponents: Record<Orientation, StyledWrapLayout> = {
  [WrapLayoutConstants.ORIENTATIONS.horizontal]: HorizontalWrapLayout,
  [WrapLayoutConstants.ORIENTATIONS.vertical]: VerticalWrapLayout
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
    horizontalAlignment,
    verticalAlignment,
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
        horizontalAlignment ?? WrapLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT
      }
      $verticalAlignment={
        verticalAlignment ?? WrapLayoutConstants.DEFAULT_VERTICAL_ALIGNMENT
      }
      $rowGap={rowGap}
      $columnGap={columnGap}
      $backgroundColor={backgroundColor}
      $border={border}
      $borderRadius={borderRadius}
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
