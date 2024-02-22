import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef
} from 'react';
import styled from 'styled-components';
import { ButtonConstants } from './button.constants';
import type { Theme } from 'common/theme';

type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonVariant = keyof typeof ButtonConstants.BUTTON_VARIANTS;
type ButtonSize = keyof typeof ButtonConstants.BUTTON_SIZES;
type ButtonComponent = typeof ButtonBase;

const ButtonBase = styled.button<{
  size?: ButtonSize;
  theme?: Theme;
}>`
  cursor: pointer;
  border: none;
  border-radius: 0.3rem;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  min-width: 4rem;
  height: ${(props) => getButtonSize(props.size)};
  line-height: calc(${(props) => getButtonSize(props.size)} - 1rem);
  font-size: ${(props) =>
    props.theme?.typography?.body2.fontSize ?? '0.875rem'};
  font-family: ${(props) =>
    props.theme?.typography?.body2.fontFamily ?? 'sans-serif'};
  font-weight: ${(props) =>
    props.theme?.typography?.body2.fontWeights.regular ?? 400};
`;

const ContainedButton = styled(ButtonBase)`
  border: 0.06rem solid;
  border-color: ${(props) => props.theme?.colors?.primary500};
  color: ${(props) => props.theme?.colors?.white};
  background-color: ${(props) => props.theme?.colors?.primary500};
  &:hover {
    border-color: ${(props) => props.theme?.colors?.primary400};
    background-color: ${(props) => props.theme?.colors?.primary400};
    box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
  }
  &:active {
    background-color: ${(props) => props.theme?.colors?.primary700};
  }
  &:focus {
    border: 0.125rem solid;
    border-color: ${(props) => props.theme?.colors?.primary700};
  }
`;

const OutlinedButton = styled(ButtonBase)`
  border: 0.06rem solid;
  background-color: transparent;
  color: ${(props) => props.theme?.colors?.primary500};
  border-color: ${(props) => props.theme?.colors?.primary500};
  &:hover {
    color: ${(props) => props.theme?.colors?.primary400};
    box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
    border-color: ${(props) => props.theme?.colors?.primary400};
  }
  &:active {
    color: ${(props) => props.theme?.colors?.primary700};
    border-color: ${(props) => props.theme?.colors?.primary700};
  }
  &:focus {
    border: 0.125rem solid;
    border-color: ${(props) => props.theme?.colors?.primary700};
  }
`;

const TextButton = styled(ButtonBase)`
  background-color: transparent;
  color: ${(props) => props.theme?.colors?.primary500};
  &:hover {
    color: ${(props) => props.theme?.colors?.primary400};
    text-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
  }
  &:active {
    color: ${(props) => props.theme?.colors?.primary700};
  }
  &:focus {
    border: 0.125rem solid;
    border-color: ${(props) => props.theme?.colors?.primary700};
  }
`;

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
