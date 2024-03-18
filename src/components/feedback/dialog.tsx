import {
  forwardRef,
  useEffect,
  useRef,
  type ForwardedRef,
  type HTMLAttributes,
  type MouseEvent
} from 'react';
import { DialogConstants } from './dialog.constants';
import { DialogBase, DialogInnerContainer } from './dialog.styles';
import { useTheme } from '../../common/theme';

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
    ...props
  } = dialogProps;
  const dialogRef = useRef<DialogElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      const action = isOpen ? dialog.showModal : dialog.close;
      action.call(dialog);
    }
  }, [isOpen]);

  const handleClick = (event: MouseEvent<DialogElement>) => {
    if (isOpen && event.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <DialogBase
      {...props}
      ref={forwardedRef ?? dialogRef}
      onClick={handleClick}
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
