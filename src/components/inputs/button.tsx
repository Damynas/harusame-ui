import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef
} from 'react';
import {
  ButtonBase,
  ContainedButton,
  OutlinedButton,
  TextButton
} from './button.styles';
import { ButtonConstants } from './button.constants';
import { useTheme } from '@common/theme';

type ButtonVariant = keyof typeof ButtonConstants.BUTTON_VARIANTS;
type ButtonSize = keyof typeof ButtonConstants.BUTTON_SIZES;

type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonElement = HTMLButtonElement;

type StyledButton = typeof ButtonBase;

const ButtonSizes: Record<ButtonSize, string> = {
  [ButtonConstants.BUTTON_SIZES.small]: '2rem',
  [ButtonConstants.BUTTON_SIZES.regular]: '2.25rem',
  [ButtonConstants.BUTTON_SIZES.large]: '2.5rem'
};

const getButtonSize = (
  size: ButtonSize = ButtonConstants.DEFAULT_BUTTON_SIZE
) => ButtonSizes[size];

const ButtonComponents: Record<ButtonVariant, StyledButton> = {
  [ButtonConstants.BUTTON_VARIANTS.contained]: ContainedButton,
  [ButtonConstants.BUTTON_VARIANTS.outlined]: OutlinedButton,
  [ButtonConstants.BUTTON_VARIANTS.text]: TextButton
};

const getButtonComponent = (
  variant: ButtonVariant = ButtonConstants.DEFAULT_BUTTON_VARIANT
) => ButtonComponents[variant];

const ButtonInner = (
  buttonProps: ButtonProps,
  forwardedRef: ForwardedRef<ButtonElement>
) => {
  const { label, variant, size, ...props } = buttonProps;
  const ButtonComponent = getButtonComponent(variant);
  const theme = useTheme();
  return (
    <ButtonComponent
      {...props}
      ref={forwardedRef}
      data-variant={variant}
      $size={getButtonSize(size)}
      $theme={theme}
    >
      {label}
    </ButtonComponent>
  );
};

const Button = forwardRef<ButtonElement, ButtonProps>(ButtonInner);
Button.displayName = ButtonConstants.DISPLAY_NAME;

export { Button };
export type { ButtonElement, ButtonProps };
