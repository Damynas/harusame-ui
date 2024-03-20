import {
  forwardRef,
  useEffect,
  type ForwardedRef,
  type HTMLAttributes,
  type KeyboardEvent,
  type PointerEvent
} from 'react';
import { DialogConstants } from './dialog.constants';
import { DialogBase, DialogInnerContainer } from './dialog.styles';
import { KeyCodes } from '../../../common/shared';
import { useTheme } from '../../../common/theme';
import { useForwardRef } from '../../../hooks';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  padding?: string;
  minWidth?: string;
  minHeight?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  backgroundColor?: string;
  backdropColor?: string;
  backdropOpacity?: number;
  border?: string;
  borderRadius?: string;
} & HTMLAttributes<DialogElement>;

type DialogElement = HTMLDialogElement;

const DialogInner = (
  dialogProps: DialogProps,
  forwardedRef: ForwardedRef<DialogElement>
) => {
  const {
    isOpen,
    onClose,
    padding,
    minWidth,
    minHeight,
    width,
    height,
    maxWidth,
    maxHeight,
    backgroundColor,
    backdropColor,
    backdropOpacity,
    border,
    borderRadius,
    children,
    onKeyDown,
    onPointerDown,
    ...props
  } = dialogProps;
  const dialogRef = useForwardRef<DialogElement>(forwardedRef);
  const theme = useTheme();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      const action = isOpen ? dialog.showModal : dialog.close;
      action.call(dialog);
    }
  }, [dialogRef, isOpen]);

  const handleClose = () => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.setAttribute('closing', '');
      dialog.addEventListener(
        'animationend',
        () => {
          dialog.removeAttribute('closing');
          onClose();
        },
        { once: true }
      );
    }
  };

  const handleKeyDown = (event: KeyboardEvent<DialogElement>) => {
    event.preventDefault();
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (
      isOpen &&
      event.key === KeyCodes.ESCAPE &&
      event.target === dialogRef.current
    ) {
      handleClose();
    }
  };

  const handlePointerDown = (event: PointerEvent<DialogElement>) => {
    event.preventDefault();
    if (onPointerDown) {
      onPointerDown(event);
    }
    if (isOpen && event.target === dialogRef.current) {
      handleClose();
    }
  };

  return (
    <DialogBase
      {...props}
      ref={dialogRef}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      $minWidth={minWidth}
      $minHeight={minHeight}
      $width={width}
      $height={height}
      $maxWidth={maxWidth}
      $maxHeight={maxHeight}
      $backdropColor={backdropColor}
      $backdropOpacity={backdropOpacity}
      $border={border}
      $borderRadius={borderRadius}
      $theme={theme}
    >
      <DialogInnerContainer
        onClick={(event) => event.stopPropagation()}
        $padding={padding}
        $backgroundColor={backgroundColor}
        $theme={theme}
      >
        {children}
      </DialogInnerContainer>
    </DialogBase>
  );
};

const Dialog = forwardRef<DialogElement, DialogProps>(DialogInner);
Dialog.displayName = DialogConstants.DISPLAY_NAME;

export { Dialog };
export type { DialogElement, DialogProps };
