import { createRef, type Ref } from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';
import {
  ButtonBase,
  type ButtonBaseElement,
  type ButtonBaseProps
} from './button-base';
import { ButtonBaseConstants } from './button-base.constants';
import { CloseIcon } from '../../../common';

const buttonBaseTestId = 'button-base-test-id';

const defaultProps: ButtonBaseProps = {
  text: ButtonBaseConstants.DISPLAY_NAME,
  icon: null
};

const renderButtonBase = (
  props: ButtonBaseProps = defaultProps,
  ref?: Ref<ButtonBaseElement>
) => {
  render(
    <ButtonBase
      {...props}
      data-testid={buttonBaseTestId}
      ref={ref}
    />
  );
};

describe('Button Base Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render button base', () => {
    renderButtonBase();
    const buttonBase = screen.queryByTestId(buttonBaseTestId);
    expect(buttonBase).toBeDefined();
  });

  it('Should render leading icon', () => {
    const props: ButtonBaseProps = {
      ...defaultProps,
      leadingIcon: <CloseIcon data-testid='icon-test-id' />
    };
    renderButtonBase(props);
    const buttonBase = screen.queryByTestId(buttonBaseTestId);
    expect(buttonBase).toBeDefined();
    const leadingIcon = screen.queryByTestId('icon-test-id');
    expect(leadingIcon).toBeDefined();
  });

  it('Should render trailing icon', () => {
    const props: ButtonBaseProps = {
      ...defaultProps,
      trailingIcon: <CloseIcon data-testid='icon-test-id' />
    };
    renderButtonBase(props);
    const buttonBase = screen.queryByTestId(buttonBaseTestId);
    expect(buttonBase).toBeDefined();
    const trailingIcon = screen.queryByTestId('icon-test-id');
    expect(trailingIcon).toBeDefined();
  });

  it('Should render icon', () => {
    const props: ButtonBaseProps = {
      ...defaultProps,
      icon: <CloseIcon data-testid='icon-test-id' />
    };
    renderButtonBase(props);
    const buttonBase = screen.queryByTestId(buttonBaseTestId);
    expect(buttonBase).toBeDefined();
    const icon = screen.queryByTestId('icon-test-id');
    expect(icon).toBeDefined();
  });

  it('Should forward a ref to the button base', () => {
    const buttonBaseRef = createRef<ButtonBaseElement>();
    renderButtonBase(defaultProps, buttonBaseRef);
    const buttonBase = screen.queryByTestId(buttonBaseTestId);
    expect(buttonBase).toBeDefined();
    expect(buttonBaseRef.current).not.toBeNull();
  });

  it('Should trigger onPointerDown event', () => {
    const props: ButtonBaseProps = {
      ...defaultProps,
      onPointerDown: () => {
        screen
          .queryByTestId(buttonBaseTestId)
          ?.setAttribute('text', 'Text after event');
      }
    };
    renderButtonBase(props);
    const buttonBase = screen.queryByTestId(buttonBaseTestId);
    expect(buttonBase).toBeDefined();
    if (!buttonBase) {
      throw new Error('Button base is null');
    }
    expect(buttonBase).toHaveTextContent(ButtonBaseConstants.DISPLAY_NAME);
    fireEvent.pointerDown(buttonBase);
    waitFor(() => expect(buttonBase).toHaveTextContent('Text after event'));
  });
});
