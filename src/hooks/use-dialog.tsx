import { useState } from 'react';
import { Dialog, type DialogProps } from '../components';

type PropsToOmit = 'isOpen' | 'onClose';

const useDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const DialogComponent = (
    dialogComponentProps: Omit<DialogProps, PropsToOmit>
  ) => {
    const { children, ...props } = dialogComponentProps;
    return (
      <Dialog
        {...props}
        isOpen={isOpen}
        onClose={closeDialog}
      >
        {children}
      </Dialog>
    );
  };

  return [DialogComponent, openDialog, closeDialog];
};

export { useDialog };
