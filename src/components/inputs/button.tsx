import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef
} from 'react';
import styled from 'styled-components';
import { ButtonConstants } from './button.constants';

type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonVariant = keyof typeof ButtonConstants.BUTTON_VARIANTS;
type ButtonComponent = typeof ButtonBase;

const ButtonBase = styled.button``;

const ContainedButton = styled(ButtonBase)``;

const OutlinedButton = styled(ButtonBase)``;

const TextButton = styled(ButtonBase)``;

const ButtonComponents: Record<ButtonVariant, ButtonComponent> = {
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
  const { label, variant, ...props } = buttonProps;
  const ButtonComponent = getButtonComponent(variant);
  return (
    <ButtonComponent
      aria-label={label}
      {...props}
      ref={forwardedRef}
      data-variant={variant}
    >
      {label}
    </ButtonComponent>
  );
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonInner);
Button.displayName = ButtonConstants.DISPLAY_NAME;

export { Button, type ButtonProps };
