import {
  cloneElement,
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type PointerEvent
} from 'react';
import { ButtonBaseConstants } from './button-base.constants';
import {
  ButtonContainer,
  ItemContainer,
  TextContainer,
  IconContainer,
  ProgressIndicatorContainer
} from './button-base.styles';
import type { ButtonIcon, ButtonSize } from './button-base.types';
import { DottedProgressIndicator } from '../../feedback/dotted-progress-indicator';
import type { Nullable } from '../../../common/shared';
import { useTheme } from '../../../common/theme';

type ButtonBaseProps = {
  text: Nullable<string>;
  icon: Nullable<ButtonIcon>;
  loading?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
  leadingIcon?: ButtonIcon;
  trailingIcon?: ButtonIcon;
  borderRadius?: string;
  textColor?: string;
  disabledTextColor?: string;
  iconColor?: string;
  disabledIconColor?: string;
  backgroundColor?: string;
  hoveredBackgroundColor?: string;
  pressedBackgroundColor?: string;
  disabledBackgroundColor?: string;
  borderColor?: string;
  hoveredBorderColor?: string;
  pressedBorderColor?: string;
  disabledBorderColor?: string;
  leadingIconColor?: string;
  disabledLeadingIconColor?: string;
  trailingIconColor?: string;
  disabledTrailingIconColor?: string;
  progressIndicatorColor?: string;
  disabledProgressIndicatorColor?: string;
  focusedOutlineColor?: string;
} & ButtonHTMLAttributes<ButtonBaseElement>;

type ButtonBaseElement = HTMLButtonElement;

const ButtonBaseInner = (
  buttonBaseProps: ButtonBaseProps,
  forwardedRef: ForwardedRef<ButtonBaseElement>
) => {
  const {
    text,
    icon,
    loading,
    disabled,
    size,
    leadingIcon,
    trailingIcon,
    borderRadius,
    textColor,
    disabledTextColor,
    iconColor,
    disabledIconColor,
    backgroundColor,
    hoveredBackgroundColor,
    pressedBackgroundColor,
    disabledBackgroundColor,
    borderColor,
    hoveredBorderColor,
    pressedBorderColor,
    disabledBorderColor,
    leadingIconColor,
    disabledLeadingIconColor,
    trailingIconColor,
    disabledTrailingIconColor,
    progressIndicatorColor,
    disabledProgressIndicatorColor,
    focusedOutlineColor,
    onPointerDown,
    ...props
  } = buttonBaseProps;
  const theme = useTheme();

  const handlePointerDown = (event: PointerEvent<ButtonBaseElement>) => {
    event.preventDefault();
    if (onPointerDown) {
      onPointerDown(event);
    }
  };

  return (
    <ButtonContainer
      {...props}
      ref={forwardedRef}
      disabled={disabled}
      onPointerDown={handlePointerDown}
      $loading={loading}
      $disabled={disabled}
      $size={size}
      $borderRadius={borderRadius}
      $textColor={textColor}
      $disabledTextColor={disabledTextColor}
      $backgroundColor={backgroundColor}
      $hoveredBackgroundColor={hoveredBackgroundColor}
      $pressedBackgroundColor={pressedBackgroundColor}
      $disabledBackgroundColor={disabledBackgroundColor}
      $borderColor={borderColor}
      $hoveredBorderColor={hoveredBorderColor}
      $pressedBorderColor={pressedBorderColor}
      $disabledBorderColor={disabledBorderColor}
      $focusedOutlineColor={focusedOutlineColor}
      $theme={theme}
    >
      {loading && (
        <ProgressIndicatorContainer>
          <DottedProgressIndicator
            size='small'
            color={
              !disabled
                ? progressIndicatorColor
                : disabledProgressIndicatorColor
            }
          />
        </ProgressIndicatorContainer>
      )}
      {text && (
        <ItemContainer
          $loading={loading}
          $hasIcon={!!(leadingIcon || trailingIcon)}
        >
          {leadingIcon && (
            <IconContainer $size={size}>
              {cloneElement(leadingIcon, {
                color: !disabled ? leadingIconColor : disabledLeadingIconColor
              })}
            </IconContainer>
          )}
          <TextContainer>{text}</TextContainer>
          {trailingIcon && (
            <IconContainer $size={size}>
              {cloneElement(trailingIcon, {
                color: !disabled ? trailingIconColor : disabledTrailingIconColor
              })}
            </IconContainer>
          )}
        </ItemContainer>
      )}
      {icon && (
        <IconContainer
          $loading={loading}
          $size={size}
        >
          {cloneElement(icon, {
            color: !disabled ? iconColor : disabledIconColor
          })}
        </IconContainer>
      )}
    </ButtonContainer>
  );
};

const ButtonBase = forwardRef<ButtonBaseElement, ButtonBaseProps>(
  ButtonBaseInner
);
ButtonBase.displayName = ButtonBaseConstants.DISPLAY_NAME;

export { ButtonBase };
export type { ButtonBaseElement, ButtonBaseProps };
