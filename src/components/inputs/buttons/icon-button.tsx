import { forwardRef, type ForwardedRef } from 'react';
import type { ButtonBaseElement, ButtonBaseProps } from './button-base';
import { IconButtonConstants } from './icon-button.constants';
import { ButtonBaseConstants } from './button-base.constants';
import {
  ContainedIconButton,
  OutlinedIconButton,
  TextIconButton
} from './icon-button.styles';
import type { StyledIconButton } from './icon-button.types';
import type { ButtonIcon, ButtonVariant } from './button-base.types';
import { useTheme } from '../../../common/theme';

type PropsToOmit =
  | 'icon'
  | 'text'
  | 'textColor'
  | 'disabledTextColor'
  | 'leadingIcon'
  | 'leadingIconColor'
  | 'disabledLeadingIconColor'
  | 'trailingIcon'
  | 'trailingIconColor'
  | 'disabledTrailingIconColor';

type IconButtonProps = { icon: ButtonIcon; variant?: ButtonVariant } & Omit<
  ButtonBaseProps,
  PropsToOmit
>;

type IconButtonElement = ButtonBaseElement;

const IconButtonComponents: Record<ButtonVariant, StyledIconButton> = {
  [ButtonBaseConstants.BUTTON_VARIANTS.contained]: ContainedIconButton,
  [ButtonBaseConstants.BUTTON_VARIANTS.outlined]: OutlinedIconButton,
  [ButtonBaseConstants.BUTTON_VARIANTS.text]: TextIconButton
};

const getIconButtonComponent = (
  variant: ButtonVariant = ButtonBaseConstants.DEFAULT_BUTTON_VARIANT
) => IconButtonComponents[variant];

const IconButtonInner = (
  iconButtonProps: IconButtonProps,
  forwardedRef: ForwardedRef<IconButtonElement>
) => {
  const { variant, ...props } = iconButtonProps;
  const IconButtonComponent = getIconButtonComponent(variant);
  const theme = useTheme();
  return (
    <IconButtonComponent
      {...props}
      ref={forwardedRef}
      data-variant={variant}
      text={null}
      $theme={theme}
    />
  );
};

const IconButton = forwardRef<IconButtonElement, IconButtonProps>(
  IconButtonInner
);
IconButton.displayName = IconButtonConstants.DISPLAY_NAME;

export { IconButton };
export type { IconButtonElement, IconButtonProps };
