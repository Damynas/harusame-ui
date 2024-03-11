import {
  cloneElement,
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef
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
import { DottedProgressIndicator } from '@components/feedback';
import { useTheme } from '@common/theme';

type ButtonBaseProps = {
  text: string;
  loading?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
  leadingIcon?: ButtonIcon;
  trailingIcon?: ButtonIcon;
  borderRadius?: string;
  textColor?: string;
  hoveredTextColor?: string;
  pressedTextColor?: string;
  disabledTextColor?: string;
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
    loading,
    disabled,
    size,
    leadingIcon,
    trailingIcon,
    borderRadius,
    textColor,
    hoveredTextColor,
    pressedTextColor,
    disabledTextColor,
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
    ...props
  } = buttonBaseProps;
  const theme = useTheme();
  return (
    <ButtonContainer
      {...props}
      ref={forwardedRef}
      disabled={disabled}
      $loading={loading}
      $disabled={disabled}
      $size={size}
      $borderRadius={borderRadius}
      $textColor={textColor}
      $hoveredTextColor={hoveredTextColor}
      $pressedTextColor={pressedTextColor}
      $disabledTextColor={disabledTextColor}
      $backgroundColor={backgroundColor}
      $hoveredBackgroundColor={hoveredBackgroundColor}
      $pressedBackgroundColor={pressedBackgroundColor}
      $disabledBackgroundColor={disabledBackgroundColor}
      $borderColor={borderColor}
      $hoveredBorderColor={hoveredBorderColor}
      $pressedBorderColor={pressedBorderColor}
      $disabledBorderColor={disabledBorderColor}
      $leadingIconColor={leadingIconColor}
      $disabledLeadingIconColor={disabledLeadingIconColor}
      $trailingIconColor={trailingIconColor}
      $disabledTrailingIconColor={disabledTrailingIconColor}
      $focusedOutlineColor={focusedOutlineColor}
      $theme={theme}
    >
      {loading && (
        <ProgressIndicatorContainer
          horizontalAlignment='center'
          verticalAlignment='center'
        >
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
      <ItemContainer $loading={loading}>
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
    </ButtonContainer>
  );
};

const ButtonBase = forwardRef<ButtonBaseElement, ButtonBaseProps>(
  ButtonBaseInner
);
ButtonBase.displayName = ButtonBaseConstants.DISPLAY_NAME;

export { ButtonBase };
export type { ButtonBaseElement, ButtonBaseProps };
