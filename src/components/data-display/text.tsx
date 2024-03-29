import { forwardRef, type ForwardedRef, type HTMLAttributes } from 'react';
import { TextConstants } from './text.constants';
import {
  Body1,
  Body2,
  Caption1,
  Caption2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  type StyledText
} from './text.styles';
import type { FontWeight, TextVariant } from './text.types';
import { useTheme } from '../../common/theme';

type TextProps = {
  variant?: TextVariant;
  color?: string;
  truncate?: boolean;
  selectionDisabled?: boolean;
  fontWeight?: FontWeight;
} & HTMLAttributes<HTMLSpanElement>;

type TextElement = HTMLSpanElement;

const TextComponents: Record<TextVariant, StyledText> = {
  [TextConstants.TEXT_VARIANTS.heading1]: Heading1,
  [TextConstants.TEXT_VARIANTS.heading2]: Heading2,
  [TextConstants.TEXT_VARIANTS.heading3]: Heading3,
  [TextConstants.TEXT_VARIANTS.heading4]: Heading4,
  [TextConstants.TEXT_VARIANTS.heading5]: Heading5,
  [TextConstants.TEXT_VARIANTS.heading6]: Heading6,
  [TextConstants.TEXT_VARIANTS.body1]: Body1,
  [TextConstants.TEXT_VARIANTS.body2]: Body2,
  [TextConstants.TEXT_VARIANTS.caption1]: Caption1,
  [TextConstants.TEXT_VARIANTS.caption2]: Caption2
};

const getTextComponent = (
  variant: TextVariant = TextConstants.DEFAULT_TEXT_VARIANT
) => TextComponents[variant];

const TextInner = (
  textProps: TextProps,
  forwardedRef: ForwardedRef<TextElement>
) => {
  const {
    variant,
    color,
    truncate,
    selectionDisabled,
    fontWeight,
    children,
    ...props
  } = textProps;
  const TextComponent = getTextComponent(variant);
  const theme = useTheme();
  return (
    <TextComponent
      {...props}
      ref={forwardedRef}
      data-variant={variant}
      $color={color}
      $truncate={truncate}
      $selectionDisabled={selectionDisabled}
      $fontWeight={fontWeight}
      $theme={theme}
    >
      {children}
    </TextComponent>
  );
};

const Text = forwardRef<TextElement, TextProps>(TextInner);
Text.displayName = TextConstants.DISPLAY_NAME;

export { Text };
export type { TextElement, TextProps };
