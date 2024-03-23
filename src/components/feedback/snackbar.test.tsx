import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Snackbar, type SnackbarElement, type SnackbarProps } from './snackbar';
import { SnackbarConstants } from './snackbar.constants';

const snackbarTestId = 'snackbar-test-id';

const defaultProps: SnackbarProps = {
  isOpen: true,
  message: SnackbarConstants.DISPLAY_NAME,
  onClose: jest.fn()
};

const renderSnackbar = (
  props: SnackbarProps = defaultProps,
  ref?: Ref<SnackbarElement>
) => {
  render(
    <Snackbar
      {...props}
      data-testid={snackbarTestId}
      ref={ref}
    />
  );
};

describe('Snackbar Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render snackbar', () => {
    renderSnackbar();
    const snackbar = screen.queryByTestId(snackbarTestId);
    expect(snackbar).toBeDefined();
  });

  it('Should render info snackbar', () => {
    const props: SnackbarProps = {
      ...defaultProps,
      variant: SnackbarConstants.SNACKBAR_VARIANTS.info
    };
    renderSnackbar(props);
    const snackbar = screen.queryByTestId(snackbarTestId);
    expect(snackbar).toBeDefined();
    expect(snackbar).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render success snackbar', () => {
    const props: SnackbarProps = {
      ...defaultProps,
      variant: SnackbarConstants.SNACKBAR_VARIANTS.success
    };
    renderSnackbar(props);
    const snackbar = screen.queryByTestId(snackbarTestId);
    expect(snackbar).toBeDefined();
    expect(snackbar).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render warning snackbar', () => {
    const props: SnackbarProps = {
      ...defaultProps,
      variant: SnackbarConstants.SNACKBAR_VARIANTS.warning
    };
    renderSnackbar(props);
    const snackbar = screen.queryByTestId(snackbarTestId);
    expect(snackbar).toBeDefined();
    expect(snackbar).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render error snackbar', () => {
    const props: SnackbarProps = {
      ...defaultProps,
      variant: SnackbarConstants.SNACKBAR_VARIANTS.error
    };
    renderSnackbar(props);
    const snackbar = screen.queryByTestId(snackbarTestId);
    expect(snackbar).toBeDefined();
    expect(snackbar).toHaveAttribute('data-variant', props.variant);
  });

  it('Should have given message', () => {
    renderSnackbar();
    const snackbar = screen.queryByTestId(snackbarTestId);
    expect(snackbar).toBeDefined();
    expect(snackbar).toHaveTextContent(SnackbarConstants.DISPLAY_NAME);
  });

  it('Should forward a ref to the snackbar', () => {
    const snackbarRef = createRef<SnackbarElement>();
    renderSnackbar(defaultProps, snackbarRef);
    const snackbar = screen.queryByTestId(snackbarTestId);
    expect(snackbar).toBeDefined();
    expect(snackbarRef.current).not.toBeNull();
  });
});
