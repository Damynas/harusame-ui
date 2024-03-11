import { forwardRef, type ForwardedRef } from 'react';
import { ButtonConstants } from './button.constants';
import { ContainedButton, OutlinedButton, TextButton } from './button.styles';
import type { ButtonVariant, StyledButton } from './button.types';
import { ButtonBaseProps } from './button-base';
import { useTheme } from '@common/theme';

type ButtonProps = { variant?: ButtonVariant } & ButtonBaseProps;

type ButtonElement = HTMLButtonElement;

const ButtonComponents: Record<ButtonVariant, StyledButton> = {
  [ButtonConstants.BUTTON_VARIANTS.contained]: ContainedButton,
  [ButtonConstants.BUTTON_VARIANTS.outlined]: OutlinedButton,
  [ButtonConstants.BUTTON_VARIANTS.text]: TextButton
};

const getButtonComponent = (
  variant: ButtonVariant = ButtonConstants.DEFAULT_BUTTON_VARIANT
) => ButtonComponents[variant];

const ButtonInner = (
  buttonProps: ButtonProps,
  forwardedRef: ForwardedRef<ButtonElement>
) => {
  const {
    variant,
    textColor,
    hoveredTextColor,
    pressedTextColor,
    disabledTextColor,
    backgroundColor,
    hoveredBackgroundColor,
    pressedBackgroundColor,
    disabledBackgroundColor,
    borderColor,
    hoveredBorderColor,
    pressedBorderColor,
    disabledBorderColor,
    leadingIconColor,
    disabledLeadingIconColor,
    trailingIconColor,
    disabledTrailingIconColor,
    progressIndicatorColor,
    disabledProgressIndicatorColor,
    ...props
  } = buttonProps;
  const ButtonComponent = getButtonComponent(variant);
  const theme = useTheme();
  return (
    <ButtonComponent
      {...props}
      ref={forwardedRef}
      data-variant={variant}
      $textColor={textColor}
      $hoveredTextColor={hoveredTextColor}
      $pressedTextColor={pressedTextColor}
      $disabledTextColor={disabledTextColor}
      $backgroundColor={backgroundColor}
      $hoveredBackgroundColor={hoveredBackgroundColor}
      $pressedBackgroundColor={pressedBackgroundColor}
      $disabledBackgroundColor={disabledBackgroundColor}
      $borderColor={borderColor}
      $hoveredBorderColor={hoveredBorderColor}
      $pressedBorderColor={pressedBorderColor}
      $disabledBorderColor={disabledBorderColor}
      $leadingIconColor={leadingIconColor}
      $disabledLeadingIconColor={disabledLeadingIconColor}
      $trailingIconColor={trailingIconColor}
      $disabledTrailingIconColor={disabledTrailingIconColor}
      $progressIndicatorColor={progressIndicatorColor}
      $disabledProgressIndicatorColor={disabledProgressIndicatorColor}
      $theme={theme}
    />
  );
};

const Button = forwardRef<ButtonElement, ButtonProps>(ButtonInner);
Button.displayName = ButtonConstants.DISPLAY_NAME;

export { Button };
export type { ButtonElement, ButtonProps };
