import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef
} from 'react';
import {
  ContainedButton,
  OutlinedButton,
  TextButton,
  type StyledButton
} from './button.styles';
import { ButtonConstants } from './button.constants';
import type { ButtonSize, ButtonVariant } from './button.types';
import { useTheme } from '@common/theme';

type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

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
  const { label, variant, size, ...props } = buttonProps;
  const ButtonComponent = getButtonComponent(variant);
  const theme = useTheme();
  return (
    <ButtonComponent
      {...props}
      ref={forwardedRef}
      data-variant={variant}
      $size={size}
      $theme={theme}
    >
      {label}
    </ButtonComponent>
  );
};

const Button = forwardRef<ButtonElement, ButtonProps>(ButtonInner);
Button.displayName = ButtonConstants.DISPLAY_NAME;

export { Button };
export type { ButtonElement, ButtonProps };
