import {
  Children,
  forwardRef,
  type ForwardedRef,
  type HTMLAttributes
} from 'react';
import { BoxLayoutConstants } from './box-layout.constants';
import { BoxLayoutBase } from './box-layout.styles';
import type {
  HorizontalAlignment,
  VerticalAlignment
} from './box-layout.types';

type BoxLayoutProps = {
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
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
} & HTMLAttributes<HTMLDivElement>;

type BoxLayoutElement = HTMLDivElement;

const BoxLayoutInner = (
  boxLayoutProps: BoxLayoutProps,
  forwardedRef: ForwardedRef<BoxLayoutElement>
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
    backgroundColor,
    border,
    borderRadius,
    children,
    ...props
  } = boxLayoutProps;

  if (Children.count(children) > 1)
    throw new Error(BoxLayoutConstants.CHILDREN_COUNT_ERROR_MESSAGE);

  return (
    <BoxLayoutBase
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
        horizontalAlignment ?? BoxLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT
      }
      $verticalAlignment={
        verticalAlignment ?? BoxLayoutConstants.DEFAULT_VERTICAL_ALIGNMENT
      }
      $backgroundColor={backgroundColor}
      $border={border}
      $borderRadius={borderRadius}
    >
      {children}
    </BoxLayoutBase>
  );
};

const BoxLayout = forwardRef<BoxLayoutElement, BoxLayoutProps>(BoxLayoutInner);
BoxLayout.displayName = BoxLayoutConstants.DISPLAY_NAME;

export { BoxLayout };
export type { BoxLayoutProps, BoxLayoutElement };
