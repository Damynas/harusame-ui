import { forwardRef, type ForwardedRef } from 'react';
import type { ButtonBaseElement, ButtonBaseProps } from './button-base';
import { ButtonConstants } from './button.constants';
import { ButtonBaseConstants } from './button-base.constants';
import { ContainedButton, OutlinedButton, TextButton } from './button.styles';
import type { StyledButton } from './button.types';
import type { ButtonVariant } from './button-base.types';
import { useTheme } from '../../../common/theme';

type PropsToOmit = 'text' | 'icon' | 'iconColor' | 'disabledIconColor';

type ButtonProps = { text: string; variant?: ButtonVariant } & Omit<
  ButtonBaseProps,
  PropsToOmit
>;

type ButtonElement = ButtonBaseElement;

const ButtonComponents: Record<ButtonVariant, StyledButton> = {
  [ButtonBaseConstants.BUTTON_VARIANTS.contained]: ContainedButton,
  [ButtonBaseConstants.BUTTON_VARIANTS.outlined]: OutlinedButton,
  [ButtonBaseConstants.BUTTON_VARIANTS.text]: TextButton
};

const getButtonComponent = (
  variant: ButtonVariant = ButtonBaseConstants.DEFAULT_BUTTON_VARIANT
) => ButtonComponents[variant];

const ButtonInner = (
  buttonProps: ButtonProps,
  forwardedRef: ForwardedRef<ButtonElement>
) => {
  const { variant, ...props } = buttonProps;
  const ButtonComponent = getButtonComponent(variant);
  const theme = useTheme();
  return (
    <ButtonComponent
      {...props}
      ref={forwardedRef}
      data-variant={variant}
      icon={null}
      $theme={theme}
    />
  );
};

const Button = forwardRef<ButtonElement, ButtonProps>(ButtonInner);
Button.displayName = ButtonConstants.DISPLAY_NAME;

export { Button };
export type { ButtonElement, ButtonProps };
