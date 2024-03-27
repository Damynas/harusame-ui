import styled, { css } from 'styled-components';
import { TextFieldConstants } from './text-field.constants';
import type { TextFieldSize } from './text-field.types';
import { isValidSize } from '../../utils';
import { StackLayout } from '../layouts';
import type { Nullable } from '../../common/shared';
import { commonColors, feedbackColors, type Theme } from '../../common/theme';
import { Text } from '../data-display';

const getInputWidth = (width?: string, size?: TextFieldSize) => {
  if (isValidSize(width)) return width;

  switch (size) {
    case TextFieldConstants.TEXT_FIELD_SIZES.extraSmall:
      return '5.5rem';
    case TextFieldConstants.TEXT_FIELD_SIZES.small:
      return '11.5rem';
    case TextFieldConstants.TEXT_FIELD_SIZES.medium:
      return '17.5rem';
    case TextFieldConstants.TEXT_FIELD_SIZES.large:
      return '23.5rem';
    case TextFieldConstants.TEXT_FIELD_SIZES.extraLarge:
      return '35.5rem';
    default:
      return;
  }
};

const Container = styled(StackLayout).attrs<{
  $size?: TextFieldSize;
  $width?: string;
  $minWidth?: string;
  $maxWidth?: string;
}>((props) => ({
  orientation: 'vertical',
  margin: '0.25rem',
  gap: '0.125rem',
  width: getInputWidth(props.$width, props.$size),
  minWidth: props.$minWidth,
  maxWidth: props.$maxWidth
}))``;

const Label = styled(Text).attrs<{
  $color?: string;
}>((props) => {
  return {
    variant: 'caption1',
    fontWeight: 'bold',
    truncate: true,
    color: props.$color
  };
})`
  padding-left: 0.25rem;
`;

const ErrorMessage = styled(Text).attrs<{
  $color?: string;
  $theme: Nullable<Theme>;
}>((props) => {
  return {
    variant: 'caption2',
    fontWeight: 'regular',
    truncate: true,
    color:
      props.$color ?? props.$theme?.colors.error500 ?? feedbackColors.error500
  };
})`
  padding-left: 0.25rem;
`;

const Input = styled.input<{
  $disabled?: boolean;
  $error?: boolean;
  $placeholder?: string;
  $borderRadius?: string;
  $textColor?: string;
  $disabledTextColor?: string;
  $placeholderColor?: string;
  $disabledPlaceholderColor?: string;
  $backgroundColor?: string;
  $disabledBackgroundColor?: string;
  $borderColor?: string;
  $errorBorderColor?: string;
  $hoveredBorderColor?: string;
  $focusedBorderColor?: string;
  $disabledBorderColor?: string;
  $theme: Nullable<Theme>;
}>`
  padding: 0 0.5rem;
  height: 2rem;
  width: 100%;

  outline: none;
  box-sizing: border-box;

  color: ${(props) => props.$textColor ?? props.$theme?.colors.neutral500};
  background-color: ${(props) =>
    props.$backgroundColor ?? props.$theme?.colors.white ?? commonColors.white};

  border-style: solid;
  border-width: 0.125rem;
  border-radius: ${(props) =>
    isValidSize(props.$borderRadius) ? props.$borderRadius : '0.25rem'};
  border-color: ${(props) =>
    props.$borderColor ?? props.$theme?.colors.neutral500};

  &::placeholder {
    color: ${(props) =>
      !props.$disabled
        ? props.$placeholderColor ??
          props.$theme?.colors.gray ??
          commonColors.gray
        : props.$disabledBackgroundColor ??
          props.$theme?.colors.neutral500 ??
          commonColors.gray};
  }

  ${(props) =>
    props.$error &&
    css`
      border-color: ${props.$errorBorderColor ??
      props.$theme?.colors.error500 ??
      feedbackColors.error500};

      &:hover {
        border-color: ${props.$errorBorderColor ??
        props.$theme?.colors.error700 ??
        feedbackColors.error700};
      }
      &:focus {
        border-color: ${props.$errorBorderColor ??
        props.$theme?.colors.error400 ??
        feedbackColors.error400};
      }
    `}

  ${(props) =>
    props.$disabled &&
    css`
      color: ${props.$disabledTextColor ?? props.$theme?.colors.neutral500};
      border-color: ${props.$disabledBorderColor ??
      props.$theme?.colors.neutral500};
      background-color: ${props.$disabledBackgroundColor ??
      props.$theme?.colors.neutral300};
    `}

    ${(props) =>
    !props.$disabled &&
    !props.$error &&
    css`
      &:hover {
        border-color: ${props.$hoveredBorderColor ??
        props.$theme?.colors.primary500};
      }
      &:focus {
        border-color: ${props.$focusedBorderColor ??
        props.$theme?.colors.neutral400};
      }
    `}
`;

export { Container, Label, ErrorMessage, Input };
