import {
  Children,
  forwardRef,
  type ForwardedRef,
  type HTMLAttributes
} from 'react';
import { BoxLayoutConstants } from './box-layout.constants';
import { BoxLayoutBase } from './box-layout.styles';

type HorizontalAlignment = keyof typeof BoxLayoutConstants.HORIZONTAL_ALIGNMENT;
type VerticalAlignment = keyof typeof BoxLayoutConstants.VERTICAL_ALIGNMENT;

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
    horizontalAlignment = BoxLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT,
    verticalAlignment = BoxLayoutConstants.DEFAULT_VERTICAL_ALIGNMENT,
    backgroundColor,
    border,
    borderRadius,
    children,
    ...props
  } = boxLayoutProps;
  if (Children.count(children) !== 1)
    throw new Error(BoxLayoutConstants.CHILDREN_COUNT_ERROR_MESSAGE);
  return (
    <BoxLayoutBase
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
      $backgroundColor={backgroundColor}
      $border={border}
      $borderRadius={borderRadius}
      ref={forwardedRef}
    >
      {children}
    </BoxLayoutBase>
  );
};

const BoxLayout = forwardRef<BoxLayoutElement, BoxLayoutProps>(BoxLayoutInner);
BoxLayout.displayName = BoxLayoutConstants.DISPLAY_NAME;

export { BoxLayout };
export type { BoxLayoutProps, BoxLayoutElement };
