import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  ConfirmDialog,
  type ConfirmDialogElement,
  type ConfirmDialogProps
} from './confirm-dialog';
import { ConfirmDialogConstants } from './confirm-dialog.constants';

const confirmDialogTestId = 'confirm-dialog-test-id';

const defaultProps: ConfirmDialogProps = {
  isOpen: true,
  onClose: jest.fn(),
  message: 'Test Message'
};

const renderDialog = (
  props: ConfirmDialogProps = defaultProps,
  ref?: Ref<ConfirmDialogElement>
) => {
  render(
    <ConfirmDialog
      {...props}
      data-testid={confirmDialogTestId}
      ref={ref}
    />
  );
};

describe('Confirm Dialog Tests', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
  });

  afterEach(() => {
    cleanup();
  });

  it('Should have default title when it is not provided', () => {
    renderDialog();
    const confirmDialog = screen.queryByTestId(confirmDialogTestId);
    expect(confirmDialog).toBeDefined();
    expect(confirmDialog).toHaveTextContent(
      ConfirmDialogConstants.DEFAULT_TITLE_TEXT
    );
  });

  it('Should have given title when it is provided', () => {
    const title = 'Title';
    const props: ConfirmDialogProps = {
      ...defaultProps,
      title
    };
    renderDialog(props);
    const confirmDialog = screen.queryByTestId(confirmDialogTestId);
    expect(confirmDialog).toBeDefined();
    expect(confirmDialog).toHaveTextContent(title);
  });

  it('Should have given message', () => {
    renderDialog();
    const confirmDialog = screen.queryByTestId(confirmDialogTestId);
    expect(confirmDialog).toBeDefined();
    expect(confirmDialog).toHaveTextContent(defaultProps.message);
  });

  it('Should have default confirm button text when it is not provided', () => {
    renderDialog();
    const confirmDialog = screen.queryByTestId(confirmDialogTestId);
    expect(confirmDialog).toBeDefined();
    expect(confirmDialog).toHaveTextContent(
      ConfirmDialogConstants.DEFAULT_CONFIRM_BUTTON_TEXT
    );
  });

  it('Should have given confirm button text when it is provided', () => {
    const confirmButtonText = 'Accept Button';
    const props: ConfirmDialogProps = {
      ...defaultProps,
      confirmButtonText
    };
    renderDialog(props);
    const confirmDialog = screen.queryByTestId(confirmDialogTestId);
    expect(confirmDialog).toBeDefined();
    expect(confirmDialog).toHaveTextContent(confirmButtonText);
  });

  it('Should have default cancel button text when it is not provided', () => {
    renderDialog();
    const confirmDialog = screen.queryByTestId(confirmDialogTestId);
    expect(confirmDialog).toBeDefined();
    expect(confirmDialog).toHaveTextContent(
      ConfirmDialogConstants.DEFAULT_CANCEL_BUTTON_TEXT
    );
  });

  it('Should have given cancel button text when it is provided', () => {
    const confirmButtonText = 'Decline Button';
    const props: ConfirmDialogProps = {
      ...defaultProps,
      confirmButtonText
    };
    renderDialog(props);
    const confirmDialog = screen.queryByTestId(confirmDialogTestId);
    expect(confirmDialog).toBeDefined();
    expect(confirmDialog).toHaveTextContent(confirmButtonText);
  });

  it('Should forward a ref to the confirm dialog', () => {
    const confirmDialogRef = createRef<ConfirmDialogElement>();
    renderDialog(defaultProps, confirmDialogRef);
    const confirmDialog = screen.queryByTestId(confirmDialogTestId);
    expect(confirmDialog).toBeDefined();
    expect(confirmDialogRef.current).not.toBeNull();
  });
});
