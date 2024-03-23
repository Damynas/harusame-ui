import { SnackbarConstants } from './snackbar.constants';
import {
  SnackbarBase,
  InfoSnackbar,
  SuccessSnackbar,
  WarningSnackbar,
  ErrorSnackbar
} from './snackbar.styles';

type SnackbarPosition = keyof typeof SnackbarConstants.SNACKBAR_POSITIONS;
type SnackbarVariant = keyof typeof SnackbarConstants.SNACKBAR_VARIANTS;

type StyledSnackbar =
  | typeof SnackbarBase
  | typeof InfoSnackbar
  | typeof SuccessSnackbar
  | typeof WarningSnackbar
  | typeof ErrorSnackbar;

export type { SnackbarPosition, SnackbarVariant, StyledSnackbar };
