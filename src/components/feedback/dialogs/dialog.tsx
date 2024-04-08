import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type ForwardedRef,
  type HTMLAttributes,
  type KeyboardEvent,
  type PointerEvent
} from 'react';
import { DialogConstants } from './dialog.constants';
import { DialogBase, DialogInnerContainer } from './dialog.styles';
import { KeyCodes } from '../../../common/shared';
import { useTheme } from '../../../common/theme';
import { useForwardRef } from '../../../hooks/use-forward-ref';

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
  const visibilityStateRef = useRef<boolean>(false);
  const dialogRef = useForwardRef<DialogElement>(forwardedRef);
  const theme = useTheme();

  const handleClose = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.setAttribute('closing', '');
      dialog.addEventListener(
        'animationend',
        () => {
          dialog.removeAttribute('closing');
          dialog.close();
        },
        { once: true }
      );
    }
  }, [dialogRef]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && visibilityStateRef.current !== isOpen) {
      visibilityStateRef.current = isOpen;
      if (isOpen) {
        dialog.showModal();
      } else {
        handleClose();
      }
    }
  }, [dialogRef, isOpen, handleClose]);

  const handleKeyDown = (event: KeyboardEvent<DialogElement>) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (isOpen && event.key === KeyCodes.ESCAPE) {
      event.preventDefault();
      onClose();
    }
  };

  const handlePointerDown = (event: PointerEvent<DialogElement>) => {
    if (onPointerDown) {
      onPointerDown(event);
    }
    if (isOpen && event.target === dialogRef.current) {
      event.preventDefault();
      onClose();
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
