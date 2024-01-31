import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef
} from 'react';
import styled from 'styled-components';
import resources from './button.resources.json';

type ButtonProps = {
  label: string;
  variant?: ButtonVariants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonVariants = keyof typeof resources.buttonVariants;
type ButtonComponent = typeof ButtonBase;

const ButtonBase = styled.button``;

const ContainedButton = styled(ButtonBase)``;

const OutlinedButton = styled(ButtonBase)``;

const TextButton = styled(ButtonBase)``;

const ButtonComponents = {
  [resources.buttonVariants.contained]: ContainedButton,
  [resources.buttonVariants.outlined]: OutlinedButton,
  [resources.buttonVariants.text]: TextButton
} as Record<ButtonVariants, ButtonComponent>;

const getButtonComponent = (
  variant: ButtonVariants = resources.defaultButtonVariant as ButtonVariants
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
    >
      {label}
    </ButtonComponent>
  );
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonInner);
Button.displayName = 'Button';

export default Button;
export type { ButtonProps };
