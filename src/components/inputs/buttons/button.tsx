import { forwardRef, type ForwardedRef } from 'react';
import { ButtonConstants } from './button.constants';
import { ContainedButton, OutlinedButton, TextButton } from './button.styles';
import type { ButtonVariant, StyledButton } from './button.types';
import { ButtonBaseProps } from './button-base';
import { useTheme } from '../../../common/theme';

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
  const { variant, ...props } = buttonProps;
  const ButtonComponent = getButtonComponent(variant);
  const theme = useTheme();
  return (
    <ButtonComponent
      {...props}
      ref={forwardedRef}
      data-variant={variant}
      $theme={theme}
    />
  );
};

const Button = forwardRef<ButtonElement, ButtonProps>(ButtonInner);
Button.displayName = ButtonConstants.DISPLAY_NAME;

export { Button };
export type { ButtonElement, ButtonProps };
