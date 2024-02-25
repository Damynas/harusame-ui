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

const HorizontalAlignments: Record<HorizontalAlignment, string> = {
  [BoxLayoutConstants.HORIZONTAL_ALIGNMENT.stretch]: '& > * { flex-grow: 1; }',
  [BoxLayoutConstants.HORIZONTAL_ALIGNMENT.left]: 'flex-start',
  [BoxLayoutConstants.HORIZONTAL_ALIGNMENT.center]: 'center',
  [BoxLayoutConstants.HORIZONTAL_ALIGNMENT.right]: 'flex-end'
};

const getHorizontalAlignment = (
  alignment: HorizontalAlignment = BoxLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT
) => HorizontalAlignments[alignment];

const VerticalAlignments: Record<VerticalAlignment, string> = {
  [BoxLayoutConstants.VERTICAL_ALIGNMENT.stretch]: 'stretch',
  [BoxLayoutConstants.VERTICAL_ALIGNMENT.top]: 'flex-start',
  [BoxLayoutConstants.VERTICAL_ALIGNMENT.center]: 'center',
  [BoxLayoutConstants.VERTICAL_ALIGNMENT.bottom]: 'flex-end'
};

const getVerticalAlignment = (
  alignment: VerticalAlignment = BoxLayoutConstants.DEFAULT_VERTICAL_ALIGNMENT
) => VerticalAlignments[alignment];

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
      $horizontalAlignment={getHorizontalAlignment(horizontalAlignment)}
      $verticalAlignment={getVerticalAlignment(verticalAlignment)}
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
