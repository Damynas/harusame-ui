import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  IconButton,
  type IconButtonElement,
  type IconButtonProps
} from './icon-button';
import { ButtonBaseConstants } from './button-base.constants';
import { CloseIcon } from '../../../common';

const iconButtonTestId = 'icon-button-test-id';

const defaultProps: IconButtonProps = {
  icon: <CloseIcon />
};

const renderIconButton = (
  props: IconButtonProps = defaultProps,
  ref?: Ref<IconButtonElement>
) => {
  render(
    <IconButton
      {...props}
      data-testid={iconButtonTestId}
      ref={ref}
    />
  );
};

describe('IconButton Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render contained icon button', () => {
    const props: IconButtonProps = {
      ...defaultProps,
      variant: ButtonBaseConstants.BUTTON_VARIANTS.contained
    };
    renderIconButton(props);
    const iconButton = screen.queryByTestId(iconButtonTestId);
    expect(iconButton).toBeDefined();
    expect(iconButton).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render outlined icon button', () => {
    const props: IconButtonProps = {
      ...defaultProps,
      variant: ButtonBaseConstants.BUTTON_VARIANTS.outlined
    };
    renderIconButton(props);
    const iconButton = screen.queryByTestId(iconButtonTestId);
    expect(iconButton).toBeDefined();
    expect(iconButton).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render text icon button', () => {
    const props: IconButtonProps = {
      ...defaultProps,
      variant: ButtonBaseConstants.BUTTON_VARIANTS.text
    };
    renderIconButton(props);
    const iconButton = screen.queryByTestId(iconButtonTestId);
    expect(iconButton).toBeDefined();
    expect(iconButton).toHaveAttribute('data-variant', props.variant);
  });

  it('Should forward a ref to the icon button', () => {
    const iconButtonRef = createRef<IconButtonElement>();
    renderIconButton(defaultProps, iconButtonRef);
    const iconButton = screen.queryByTestId(iconButtonTestId);
    expect(iconButton).toBeDefined();
    expect(iconButtonRef.current).not.toBeNull();
  });

  it('Should render small icon button', () => {
    const props: IconButtonProps = {
      ...defaultProps,
      size: ButtonBaseConstants.BUTTON_SIZES.small
    };
    renderIconButton(props);
    const iconButton = screen.queryByTestId(iconButtonTestId);
    expect(iconButton).toBeDefined();
    expect(iconButton).toHaveStyle({
      'height': '2rem',
      'line-height': 'calc(2rem - 1rem)'
    });
  });

  it('Should render regular icon button', () => {
    const props: IconButtonProps = {
      ...defaultProps,
      size: ButtonBaseConstants.BUTTON_SIZES.regular
    };
    renderIconButton(props);
    const iconButton = screen.queryByTestId(iconButtonTestId);
    expect(iconButton).toBeDefined();
    expect(iconButton).toHaveStyle({
      'height': '2.25rem',
      'line-height': 'calc(2.25rem - 1rem)'
    });
  });

  it('Should render large icon button', () => {
    const props: IconButtonProps = {
      ...defaultProps,
      size: ButtonBaseConstants.BUTTON_SIZES.large
    };
    renderIconButton(props);
    const iconButton = screen.queryByTestId(iconButtonTestId);
    expect(iconButton).toBeDefined();
    expect(iconButton).toHaveStyle({
      'height': '2.5rem',
      'line-height': 'calc(2.5rem - 1rem)'
    });
  });

  it('Should render loading icon button', () => {
    const props: IconButtonProps = {
      ...defaultProps,
      loading: true
    };
    renderIconButton(props);
    const iconButton = screen.queryByTestId(iconButtonTestId);
    expect(iconButton).toBeDefined();
    expect(iconButton?.children.length).toEqual(2);
    expect(iconButton?.children[0]).toBeVisible();
    expect(iconButton?.children[1]).not.toBeVisible();
  });
});
