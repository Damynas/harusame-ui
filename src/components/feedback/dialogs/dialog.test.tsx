import { createRef, type Ref } from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Dialog, type DialogElement, type DialogProps } from './dialog';

const dialogTestId = 'dialog-test-id';

const defaultProps: DialogProps = {
  isOpen: true,
  onClose: jest.fn()
};

const renderDialog = (
  props: DialogProps = defaultProps,
  ref?: Ref<DialogElement>
) => {
  render(
    <Dialog
      {...props}
      data-testid={dialogTestId}
      ref={ref}
    />
  );
};

describe('Dialog Tests', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render dialog when isOpen is set to true', () => {
    renderDialog();
    const dialog = screen.queryByTestId(dialogTestId);
    expect(dialog).toBeDefined();
    waitFor(() => expect(dialog).toHaveAttribute('open', ''));
  });

  it('Should not render dialog when isOpen is set to false', () => {
    const props: DialogProps = {
      ...defaultProps,
      isOpen: false
    };
    renderDialog(props);
    const dialog = screen.queryByTestId(dialogTestId);
    expect(dialog).toBeDefined();
    expect(dialog).not.toHaveAttribute('open', '');
  });

  it('Should forward a ref to the dialog', () => {
    const dialogRef = createRef<DialogElement>();
    renderDialog(defaultProps, dialogRef);
    const dialog = screen.queryByTestId(dialogTestId);
    expect(dialog).toBeDefined();
    expect(dialogRef.current).not.toBeNull();
  });
});
