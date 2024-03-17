import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Button, type ButtonElement, type ButtonProps } from './button';
import { ButtonConstants } from './button.constants';
import { ButtonBaseConstants } from './button-base.constants';

const buttonTestId = 'button-test-id';

const defaultProps: ButtonProps = {
  text: ButtonConstants.DISPLAY_NAME
};

const renderButton = (
  props: ButtonProps = defaultProps,
  ref?: Ref<ButtonElement>
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
      variant: ButtonBaseConstants.BUTTON_VARIANTS.contained
    };
    renderButton(props);
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
    expect(button).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render outlined button', () => {
    const props: ButtonProps = {
      ...defaultProps,
      variant: ButtonBaseConstants.BUTTON_VARIANTS.outlined
    };
    renderButton(props);
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
    expect(button).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render text button', () => {
    const props: ButtonProps = {
      ...defaultProps,
      variant: ButtonBaseConstants.BUTTON_VARIANTS.text
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
    const buttonRef = createRef<ButtonElement>();
    renderButton(defaultProps, buttonRef);
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
    expect(buttonRef.current).not.toBeNull();
  });

  it('Should render small button', () => {
    const props: ButtonProps = {
      ...defaultProps,
      size: ButtonBaseConstants.BUTTON_SIZES.small
    };
    renderButton(props);
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
    expect(button).toHaveStyle({
      'height': '2rem',
      'line-height': 'calc(2rem - 1rem)'
    });
  });

  it('Should render regular button', () => {
    const props: ButtonProps = {
      ...defaultProps,
      size: ButtonBaseConstants.BUTTON_SIZES.regular
    };
    renderButton(props);
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
    expect(button).toHaveStyle({
      'height': '2.25rem',
      'line-height': 'calc(2.25rem - 1rem)'
    });
  });

  it('Should render large button', () => {
    const props: ButtonProps = {
      ...defaultProps,
      size: ButtonBaseConstants.BUTTON_SIZES.large
    };
    renderButton(props);
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
    expect(button).toHaveStyle({
      'height': '2.5rem',
      'line-height': 'calc(2.5rem - 1rem)'
    });
  });

  it('Should render loading button', () => {
    const props: ButtonProps = {
      ...defaultProps,
      loading: true
    };
    renderButton(props);
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
    expect(button?.children.length).toEqual(2);
    expect(button?.children[0]).toBeVisible();
    expect(button?.children[1]).not.toBeVisible();
  });
});
