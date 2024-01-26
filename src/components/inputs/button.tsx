import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef
} from 'react';
import styled from 'styled-components';
import resources from './button.resources.json';

type ButtonProps = {
  label: string;
  variant?: 'contained' | 'outlined' | 'text';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonBase = styled.button``;

const ContainedButton = styled(ButtonBase)``;

const OutlinedButton = styled(ButtonBase)``;

const TextButton = styled(ButtonBase)``;

const Button = (
  buttonProps: ButtonProps,
  forwardedRef: ForwardedRef<HTMLButtonElement>
) => {
  const {
    label,
    variant = resources.defaultButtonVariant,
    ...props
  } = buttonProps;
  switch (variant) {
    case 'contained':
      return (
        <ContainedButton
          {...props}
          ref={forwardedRef}
        >
          {label}
        </ContainedButton>
      );
    case 'outlined':
      return (
        <OutlinedButton
          {...props}
          ref={forwardedRef}
        >
          {label}
        </OutlinedButton>
      );
    case 'text':
      return (
        <TextButton
          {...props}
          ref={forwardedRef}
        >
          {label}
        </TextButton>
      );
    default:
      throw new Error(`Unsupported button variant: ${variant}`);
  }
};

export default forwardRef<HTMLButtonElement, ButtonProps>(Button);
export type { ButtonProps };
