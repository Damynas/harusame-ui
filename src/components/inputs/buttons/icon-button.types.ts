import {
  ContainedIconButton,
  OutlinedIconButton,
  TextIconButton
} from './icon-button.styles';

type StyledIconButton =
  | typeof ContainedIconButton
  | typeof OutlinedIconButton
  | typeof TextIconButton;

export type { StyledIconButton };
