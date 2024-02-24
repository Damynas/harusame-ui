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

type ButtonVariant = keyof typeof ButtonConstants.BUTTON_VARIANTS;
type ButtonSize = keyof typeof ButtonConstants.BUTTON_SIZES;

type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonSizes: Record<ButtonSize, string> = {
  [ButtonConstants.BUTTON_SIZES.small]: '2rem',
  [ButtonConstants.BUTTON_SIZES.regular]: '2.25rem',
  [ButtonConstants.BUTTON_SIZES.large]: '2.5rem'
};

const getButtonSize = (
  size: ButtonSize = ButtonConstants.DEFAULT_BUTTON_SIZE
) => {
  return ButtonSizes[size];
};

const ButtonComponents: Record<ButtonVariant, StyledButton> = {
  [ButtonConstants.BUTTON_VARIANTS.contained]: ContainedButton,
  [ButtonConstants.BUTTON_VARIANTS.outlined]: OutlinedButton,
  [ButtonConstants.BUTTON_VARIANTS.text]: TextButton
};

const getButtonComponent = (
  variant: ButtonVariant = ButtonConstants.DEFAULT_BUTTON_VARIANT
) => {
  return ButtonComponents[variant];
};

const ButtonInner = (
  buttonProps: ButtonProps,
  forwardedRef: ForwardedRef<HTMLButtonElement>
) => {
  const { label, variant, size, ...props } = buttonProps;
  const ButtonComponent = getButtonComponent(variant);
  return (
    <ButtonComponent
      {...props}
      ref={forwardedRef}
      data-variant={variant}
      $size={getButtonSize(size)}
    >
      {label}
    </ButtonComponent>
  );
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonInner);
Button.displayName = ButtonConstants.DISPLAY_NAME;

export { Button, type ButtonProps };
