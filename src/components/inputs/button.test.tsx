import { type Ref, createRef } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Button, { type ButtonProps } from './button';

const buttonTestId = 'button-test-id';

const renderButton = (props: ButtonProps, ref?: Ref<HTMLButtonElement>) => {
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
    renderButton({ label: 'Contained Button', variant: 'contained' });
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
  });

  it('Should render outlined button', () => {
    renderButton({ label: 'Outlined Button', variant: 'outlined' });
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
  });

  it('Should render text button', () => {
    renderButton({ label: 'Text Button', variant: 'text' });
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
  });

  it('Should forward a ref to the button', () => {
    const buttonRef = createRef<HTMLButtonElement>();
    renderButton({ label: 'Button' }, buttonRef);
    const button = screen.queryByTestId(buttonTestId);
    expect(button).toBeDefined();
    expect(buttonRef.current).not.toBeNull();
  });
});
