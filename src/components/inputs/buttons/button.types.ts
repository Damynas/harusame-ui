import { ContainedButton, OutlinedButton, TextButton } from './button.styles';

type StyledButton =
  | typeof ContainedButton
  | typeof OutlinedButton
  | typeof TextButton;

export type { StyledButton };
