import { useState } from 'react';
import { ConfirmDialog, Dialog } from '../components/feedback/dialogs';
import { UseDialogConstants } from './use-dialog.constants';
import type {
  DialogComponent,
  DialogComponentProps,
  DialogVariant
} from './use-dialog.types';

type PropsToOmit = 'isOpen' | 'onClose';

type useDialogProps = {
  variant?: DialogVariant;
};

const DialogComponentVariants: Record<DialogVariant, DialogComponent> = {
  [UseDialogConstants.VARIANTS.default]: Dialog,
  [UseDialogConstants.VARIANTS.confirm]: ConfirmDialog
};

const getDialogComponent = (
  variant: DialogVariant = UseDialogConstants.DEFAULT_VARIANT
) => DialogComponentVariants[variant];

const useDialog = ({ variant }: useDialogProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const DialogComponent = (
    dialogComponentProps: Omit<DialogComponentProps, PropsToOmit>
  ) => {
    const { children, ...props } = dialogComponentProps;
    const DialogComponent = getDialogComponent(variant);
    return (
      <DialogComponent
        {...props}
        isOpen={isOpen}
        onClose={closeDialog}
      >
        {children}
      </DialogComponent>
    );
  };

  return { DialogComponent, openDialog, closeDialog };
};

export { useDialog };
