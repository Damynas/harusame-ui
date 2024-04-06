import { forwardRef, type ForwardedRef } from 'react';
import { Dialog, type DialogElement, type DialogProps } from './dialog';
import { ConfirmDialogConstants } from './confirm-dialog.constants';
import { useTheme } from '../../../common/theme';
import { StackLayout } from '../../layouts';
import {
  ActionContainer,
  CloseButton,
  ContentContainer,
  Divider,
  Message,
  Title,
  TitleContainer
} from './confirm-dialog.styles';
import { CloseIcon } from '../../../common';
import { Button } from '../../inputs';

type ConfirmDialogProps = {
  title?: string;
  titleColor?: string;
  message: string;
  messageColor?: string;
  confirmButtonText?: string;
  confirmButtonLoading?: boolean;
  onConfirmButtonClick?: () => void;
  cancelButtonText?: string;
  cancelButtonLoading?: boolean;
  onCancelButtonClick?: () => void;
} & DialogProps;

type ConfirmDialogElement = DialogElement;

const ConfirmDialogInner = (
  confirmDialogProps: ConfirmDialogProps,
  forwardedRef: ForwardedRef<ConfirmDialogElement>
) => {
  const {
    title,
    titleColor,
    message,
    messageColor,
    confirmButtonText,
    cancelButtonText,
    confirmButtonLoading,
    cancelButtonLoading,
    onConfirmButtonClick,
    onCancelButtonClick,
    onClose,
    height,
    ...props
  } = confirmDialogProps;

  const theme = useTheme();

  return (
    <Dialog
      {...props}
      ref={forwardedRef}
      onClose={onClose}
      height={height}
    >
      <StackLayout orientation='vertical'>
        <TitleContainer>
          <Title $color={titleColor}>
            {title ?? ConfirmDialogConstants.DEFAULT_TITLE_TEXT}
          </Title>
          <CloseButton
            icon={<CloseIcon />}
            onClick={onClose}
            $theme={theme}
          />
        </TitleContainer>
        <Divider />
        <ContentContainer $totalHeight={height}>
          <Message $color={messageColor}>{message}</Message>
        </ContentContainer>
        <Divider />
        <ActionContainer>
          <Button
            text={
              confirmButtonText ??
              ConfirmDialogConstants.DEFAULT_CONFIRM_BUTTON_TEXT
            }
            variant='contained'
            loading={confirmButtonLoading}
            onClick={onConfirmButtonClick}
            autoFocus
          />
          <Button
            text={
              cancelButtonText ??
              ConfirmDialogConstants.DEFAULT_CANCEL_BUTTON_TEXT
            }
            variant='outlined'
            loading={cancelButtonLoading}
            onClick={onCancelButtonClick ?? onClose}
          />
        </ActionContainer>
      </StackLayout>
    </Dialog>
  );
};

const ConfirmDialog = forwardRef<ConfirmDialogElement, ConfirmDialogProps>(
  ConfirmDialogInner
);
ConfirmDialog.displayName = ConfirmDialogConstants.DISPLAY_NAME;

export { ConfirmDialog };
export type { ConfirmDialogElement, ConfirmDialogProps };
