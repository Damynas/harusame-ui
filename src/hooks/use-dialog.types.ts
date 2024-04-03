import {
  ConfirmDialog,
  Dialog,
  type DialogProps,
  type ConfirmDialogProps
} from '../components/feedback/dialogs';
import { UseDialogConstants } from './use-dialog.constants';

type DialogComponent = typeof Dialog | typeof ConfirmDialog;
type DialogComponentProps = DialogProps & ConfirmDialogProps;
type DialogVariant = keyof typeof UseDialogConstants.VARIANTS;

export type { DialogComponent, DialogComponentProps, DialogVariant };
