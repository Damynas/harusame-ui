import { type Ref, createRef } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Button, type ButtonProps } from './button';
import { ButtonConstants } from './button.constants';

const buttonTestId = 'button-test-id';

const defaultProps: ButtonProps = {
  label: ButtonConstants.DISPLAY_NAME
};

const renderButton = (
  props: ButtonProps = defaultProps,
  ref?: Ref<HTMLButtonElement>
) => {
  render(
    <Button
      {...props}
      data-testid={buttonTestId}
      ref={ref}
    />
  );
};

describe('Button tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render contained button', () => {
    const props: ButtonProps = {
      ...defaultProps,
      variant: ButtonConstants.BUTTON_VARIANTS.contained
    };
    renderButton(props);
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
    expect(button).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render outlined button', () => {
    const props: ButtonProps = {
      ...defaultProps,
      variant: ButtonConstants.BUTTON_VARIANTS.outlined
    };
    renderButton(props);
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
    expect(button).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render text button', () => {
    const props: ButtonProps = {
      ...defaultProps,
      variant: ButtonConstants.BUTTON_VARIANTS.text
    };
    renderButton(props);
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
    expect(button).toHaveAttribute('data-variant', props.variant);
  });

  it('Should have given label', () => {
    renderButton();
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
    expect(button).toHaveTextContent(ButtonConstants.DISPLAY_NAME);
  });

  it('Should forward a ref to the button', () => {
    const buttonRef = createRef<HTMLButtonElement>();
    renderButton(defaultProps, buttonRef);
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
    expect(buttonRef.current).not.toBeNull();
  });
});
