import { forwardRef, type ForwardedRef, type HTMLAttributes } from 'react';
import { TextFieldConstants } from './text-field.constants';
import { Container, ErrorMessage, Input, Label } from './text-field.styles';
import type { TextFieldSize } from './text-field.types';
import { useTheme } from '../../common/theme';

type PropsToOmit = 'type' | 'disabled' | 'required';

type TextFieldProps = {
  label?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  size?: TextFieldSize;
  errorMessage?: string;
  borderRadius?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  textColor?: string;
  disabledTextColor?: string;
  placeholderColor?: string;
  disabledPlaceholderColor?: string;
  backgroundColor?: string;
  disabledBackgroundColor?: string;
  labelColor?: string;
  borderColor?: string;
  errorBorderColor?: string;
  hoveredBorderColor?: string;
  focusedBorderColor?: string;
  disabledBorderColor?: string;
  errorMessageColor?: string;
} & Omit<HTMLAttributes<TextFieldElement>, PropsToOmit>;

type TextFieldElement = HTMLInputElement;

const TextFieldInner = (
  textFieldProps: TextFieldProps,
  forwardedRef: ForwardedRef<TextFieldElement>
) => {
  const {
    label,
    required,
    disabled,
    size,
    errorMessage,
    borderRadius,
    width,
    minWidth,
    maxWidth,
    textColor,
    disabledTextColor,
    placeholderColor,
    disabledPlaceholderColor,
    backgroundColor,
    disabledBackgroundColor,
    labelColor,
    borderColor,
    errorBorderColor,
    hoveredBorderColor,
    focusedBorderColor,
    disabledBorderColor,
    errorMessageColor,
    ...props
  } = textFieldProps;

  const theme = useTheme();

  return (
    <Container
      $size={size}
      $width={width}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
    >
      {label && (
        <Label $color={labelColor}>{`${label}${required ? '*' : ''}`}</Label>
      )}
      <Input
        {...props}
        ref={forwardedRef}
        type='text'
        required={required}
        disabled={disabled}
        $disabled={disabled}
        $error={!!errorMessage && !disabled}
        $borderRadius={borderRadius}
        $textColor={textColor}
        $disabledTextColor={disabledTextColor}
        $placeholderColor={placeholderColor}
        $disabledPlaceholderColor={disabledPlaceholderColor}
        $backgroundColor={backgroundColor}
        $disabledBackgroundColor={disabledBackgroundColor}
        $borderColor={borderColor}
        $errorBorderColor={errorBorderColor}
        $hoveredBorderColor={hoveredBorderColor}
        $focusedBorderColor={focusedBorderColor}
        $disabledBorderColor={disabledBorderColor}
        $theme={theme}
      />
      {errorMessage && !disabled && (
        <ErrorMessage
          $color={errorMessageColor}
          $theme={theme}
        >
          {errorMessage}
        </ErrorMessage>
      )}
    </Container>
  );
};

const TextField = forwardRef<TextFieldElement, TextFieldProps>(TextFieldInner);
TextField.displayName = TextFieldConstants.DISPLAY_NAME;

export { TextField };
export type { TextFieldElement, TextFieldProps };
