import { ConfirmDialog, Dialog } from '../components/feedback/dialogs';
import { UseDialogConstants } from './use-dialog.constants';

type DialogComponent = typeof Dialog | typeof ConfirmDialog;
type DialogVariant = keyof typeof UseDialogConstants.VARIANTS;

export type { DialogComponent, DialogVariant };
