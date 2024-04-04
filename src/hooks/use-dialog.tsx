import { useState, useCallback } from 'react';
import {
  ConfirmDialog,
  Dialog,
  type ConfirmDialogProps,
  type DialogProps
} from '../components/feedback/dialogs';
import { UseDialogConstants } from './use-dialog.constants';
import type { DialogComponent, DialogVariant } from './use-dialog.types';

type PropsToOmit = 'isOpen' | 'onClose';

type DialogComponentProps = Omit<DialogProps & ConfirmDialogProps, PropsToOmit>;

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

  const openDialog = useCallback(() => setIsOpen(true), []);
  const closeDialog = useCallback(() => setIsOpen(false), []);

  const renderDialog = useCallback(
    (dialogComponentProps: Omit<DialogComponentProps, PropsToOmit>) => {
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
    },
    [closeDialog, isOpen, variant]
  );

  return { renderDialog, openDialog, closeDialog };
};

export { useDialog };
