import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type ForwardedRef
} from 'react';
import { SnackbarConstants } from './snackbar.constants';
import {
  SnackbarBase,
  InfoSnackbar,
  SuccessSnackbar,
  WarningSnackbar,
  ErrorSnackbar,
  SnackbarActions,
  SnackbarMessage,
  SnackbarButton,
  SnackbarIconButton
} from './snackbar.styles';
import type {
  SnackbarPosition,
  SnackbarVariant,
  StyledSnackbar
} from './snackbar.types';
import type { StackLayoutElement, StackLayoutProps } from '../layouts';
import { CloseIcon } from '../../common/icons';
import { useTheme } from '../../common/theme';
import { useForwardRef } from '../../hooks/use-forward-ref';

type PropsToOmit =
  | 'horizontalAlignment'
  | 'verticalAlignment'
  | 'orientation'
  | 'gap';

type SnackbarProps = {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  variant?: SnackbarVariant;
  position?: SnackbarPosition;
  duration?: number;
  messageColor?: string;
  backgroundColor?: string;
  borderRadius?: string;
  closeButtonHidden?: boolean;
  closeButtonColor?: string;
  hoveredCloseButtonColor?: string;
  pressedCloseButtonColor?: string;
  actionButtonText?: string;
  actionButtonColor?: string;
  hoveredActionButtonColor?: string;
  pressedActionButtonColor?: string;
  onActionButtonClick?: () => void;
} & Omit<StackLayoutProps, PropsToOmit>;

type SnackbarElement = StackLayoutElement;

const SnackbarComponents: Record<SnackbarVariant, StyledSnackbar> = {
  [SnackbarConstants.SNACKBAR_VARIANTS.default]: SnackbarBase,
  [SnackbarConstants.SNACKBAR_VARIANTS.info]: InfoSnackbar,
  [SnackbarConstants.SNACKBAR_VARIANTS.success]: SuccessSnackbar,
  [SnackbarConstants.SNACKBAR_VARIANTS.warning]: WarningSnackbar,
  [SnackbarConstants.SNACKBAR_VARIANTS.error]: ErrorSnackbar
};

const getSnackbarComponent = (
  variant: SnackbarVariant = SnackbarConstants.DEFAULT_SNACKBAR_VARIANT
) => SnackbarComponents[variant];

const SnackbarInner = (
  snackbarProps: SnackbarProps,
  forwardedRef: ForwardedRef<SnackbarElement>
) => {
  const {
    isOpen,
    onClose,
    message,
    variant,
    position,
    duration,
    margin,
    padding,
    width,
    height,
    messageColor,
    backgroundColor,
    borderRadius,
    closeButtonHidden,
    closeButtonColor,
    hoveredCloseButtonColor,
    pressedCloseButtonColor,
    actionButtonText,
    actionButtonColor,
    hoveredActionButtonColor,
    pressedActionButtonColor,
    onActionButtonClick,
    ...props
  } = snackbarProps;
  const initialRenderRef = useRef<boolean>(true);
  const snackbarRef = useForwardRef<SnackbarElement>(forwardedRef);

  const handleClose = useCallback(() => {
    const snackbar = snackbarRef.current;
    if (snackbar && isOpen) {
      snackbar.setAttribute('closing', '');
      snackbar.addEventListener(
        'animationend',
        () => {
          snackbar.removeAttribute('closing');
          onClose();
        },
        { once: true }
      );
    }
  }, [snackbarRef, isOpen, onClose]);

  const handleOpen = useCallback(() => {
    if (isOpen && duration) {
      setTimeout(() => {
        handleClose();
      }, duration);
    }
  }, [isOpen, duration, handleClose]);

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    const action = isOpen ? handleOpen : handleClose;
    action.call(null);
  }, [isOpen, handleOpen, handleClose]);

  const SnackbarComponent = getSnackbarComponent(variant);
  const theme = useTheme();

  return (
    isOpen && (
      <SnackbarComponent
        {...props}
        ref={snackbarRef}
        data-variant={variant}
        $position={position ?? SnackbarConstants.DEFAULT_SNACKBAR_POSITION}
        $margin={margin}
        $padding={padding}
        $width={width}
        $height={height}
        $backgroundColor={backgroundColor}
        $borderRadius={borderRadius}
        $closeButtonHidden={closeButtonHidden}
        $actionButtonVisible={!!actionButtonText}
        $theme={theme}
      >
        <SnackbarMessage
          $variant={variant ?? SnackbarConstants.DEFAULT_SNACKBAR_VARIANT}
          $color={messageColor}
          $theme={theme}
        >
          {message}
        </SnackbarMessage>
        <SnackbarActions>
          {actionButtonText && (
            <SnackbarButton
              text={actionButtonText}
              onClick={onActionButtonClick}
              $variant={variant ?? SnackbarConstants.DEFAULT_SNACKBAR_VARIANT}
              $color={actionButtonColor}
              $hoveredColor={hoveredActionButtonColor}
              $pressedColor={pressedActionButtonColor}
              $theme={theme}
            ></SnackbarButton>
          )}
          {!closeButtonHidden && (
            <SnackbarIconButton
              icon={<CloseIcon />}
              onClick={handleClose}
              $variant={variant ?? SnackbarConstants.DEFAULT_SNACKBAR_VARIANT}
              $color={closeButtonColor}
              $hoveredColor={hoveredCloseButtonColor}
              $pressedColor={pressedCloseButtonColor}
              $theme={theme}
            ></SnackbarIconButton>
          )}
        </SnackbarActions>
      </SnackbarComponent>
    )
  );
};

const Snackbar = forwardRef<SnackbarElement, SnackbarProps>(SnackbarInner);
Snackbar.displayName = SnackbarConstants.DISPLAY_NAME;

export { Snackbar };
export type { SnackbarElement, SnackbarProps };
