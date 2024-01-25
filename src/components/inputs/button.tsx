import { type ButtonHTMLAttributes, type FC } from 'react';
import resources from './button.resources.json';
import styled from 'styled-components';

type ButtonProps = {
  label: string;
  variant?: 'contained' | 'outlined' | 'text';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonBase = styled.button``;

const ContainedButton = styled(ButtonBase)``;

const OutlinedButton = styled(ButtonBase)``;

const TextButton = styled(ButtonBase)``;

const Button: FC<ButtonProps> = (props) => {
  const { label, variant = resources.defaultButtonVariant, ...rest } = props;

  switch (variant) {
    case 'contained':
      return <ContainedButton {...rest}>{label}</ContainedButton>;
    case 'outlined':
      return <OutlinedButton {...rest}>{label}</OutlinedButton>;
    case 'text':
      return <TextButton {...rest}>{label}</TextButton>;
    default:
      throw new Error(`Unsupported button variant: ${variant}`);
  }
};

export default Button;
export type { ButtonProps };
