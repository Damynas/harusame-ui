import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef
} from 'react';
import {
  ContainedButton,
  OutlinedButton,
  TextButton,
  LabelContainer,
  ProgressIndicatorContainer,
  ProgressIndicator,
  type StyledButton
} from './button.styles';
import { ButtonConstants } from './button.constants';
import type { ButtonSize, ButtonVariant } from './button.types';
import { useTheme } from '@common/theme';

type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonElement = HTMLButtonElement;

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
  const { label, variant, size, loading, ...props } = buttonProps;
  const ButtonComponent = getButtonComponent(variant);
  const theme = useTheme();
  return (
    <ButtonComponent
      {...props}
      ref={forwardedRef}
      data-variant={variant}
      $size={size}
      $loading={loading}
      $theme={theme}
    >
      {loading && (
        <ProgressIndicatorContainer
          horizontalAlignment='center'
          verticalAlignment='center'
        >
          <ProgressIndicator
            size='small'
            $variant={variant}
            $theme={theme}
          />
        </ProgressIndicatorContainer>
      )}
      <LabelContainer $loading={loading}>{label}</LabelContainer>
    </ButtonComponent>
  );
};

const Button = forwardRef<ButtonElement, ButtonProps>(ButtonInner);
Button.displayName = ButtonConstants.DISPLAY_NAME;

export { Button };
export type { ButtonElement, ButtonProps };
