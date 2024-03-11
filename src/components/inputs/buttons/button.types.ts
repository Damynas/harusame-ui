import { ButtonConstants } from './button.constants';
import { ContainedButton, OutlinedButton, TextButton } from './button.styles';

type ButtonVariant = keyof typeof ButtonConstants.BUTTON_VARIANTS;
type StyledButton =
  | typeof ContainedButton
  | typeof OutlinedButton
  | typeof TextButton;

export type { ButtonVariant, StyledButton };
