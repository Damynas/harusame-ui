import styled, { css } from 'styled-components';
import { ButtonBaseConstants } from './button-base.constants';
import type { ButtonSize } from './button-base.types';
import type { Nullable } from '../../../common/shared';
import type { Theme } from '../../../common/theme';
import { BoxLayout, StackLayout } from '../../layouts';
import { isValidSize } from '../../../utils';

type StyledButtonContainerProps = {
  $loading?: boolean;
  $disabled?: boolean;
  $size?: ButtonSize;
  $borderRadius?: string;
  $textColor?: string;
  $disabledTextColor?: string;
  $backgroundColor?: string;
  $hoveredBackgroundColor?: string;
  $pressedBackgroundColor?: string;
  $disabledBackgroundColor?: string;
  $borderColor?: string;
  $hoveredBorderColor?: string;
  $pressedBorderColor?: string;
  $disabledBorderColor?: string;
  $focusedOutlineColor?: string;
  $theme: Nullable<Theme>;
};

const ButtonSizes: Record<ButtonSize, string> = {
  [ButtonBaseConstants.BUTTON_SIZES.small]: '2rem',
  [ButtonBaseConstants.BUTTON_SIZES.regular]: '2.25rem',
  [ButtonBaseConstants.BUTTON_SIZES.large]: '2.5rem'
};

const getButtonSize = (
  size: ButtonSize = ButtonBaseConstants.DEFAULT_BUTTON_SIZE
) => ButtonSizes[size];

const ButtonContainer = styled.button<StyledButtonContainerProps>`
  position: relative;

  cursor: ${(props) => !props.$loading && !props.$disabled && 'pointer'};

  white-space: nowrap;
  z-index: 1;

  height: ${(props) => getButtonSize(props.$size)};
  line-height: calc(${(props) => getButtonSize(props.$size)} - 1rem);

  min-width: 4rem;
  margin: 0.25rem;
  padding: 0.5rem 1rem;

  color: ${(props) => props.$textColor};
  background-color: ${(props) => props.$backgroundColor};

  border-style: solid;
  border-width: 0.06rem;
  border-radius: ${(props) =>
    isValidSize(props.$borderRadius) ? props.$borderRadius : '0.25rem'};
  border-color: ${(props) => props.$borderColor};

  ${(props) =>
    !props.$loading &&
    !props.$disabled &&
    css`
      &:hover {
        border-color: ${props.$hoveredBorderColor};
        background-color: ${props.$hoveredBackgroundColor};
      }
      &:active {
        border-color: ${props.$pressedBorderColor};
        background-color: ${props.$pressedBackgroundColor};
      }
      &:focus {
        outline: 0.125rem solid
          ${props.$focusedOutlineColor ?? props.$theme?.colors.primary700};
        outline-offset: 0.125rem;
      }
    `}

  ${(props) =>
    props.$disabled &&
    css`
      color: ${props.$disabledTextColor};
      border-color: ${props.$disabledBorderColor};
      background-color: ${props.$disabledBackgroundColor};
    `}

    ${(props) =>
    props.$theme?.typography &&
    css`
      font-size: ${props.$theme.typography.body2.fontSize};
      font-family: ${props.$theme.typography.body2.fontFamily};
      font-weight: ${props.$theme.typography.body2.fontWeights.regular};
    `};
`;

const ItemContainer = styled(StackLayout).attrs<{
  $loading?: boolean;
  $hasIcon?: boolean;
}>((props) => ({
  horizontalAlignment: props.$hasIcon ? 'spaceBetween' : 'center',
  verticalAlignment: 'center',
  gap: '0.125rem'
}))`
  visibility: ${(props) => (!props.$loading ? 'visible' : 'hidden')};
`;

const TextContainer = styled(BoxLayout).attrs({
  horizontalAlignment: 'center',
  verticalAlignment: 'center'
})``;

const IconContainer = styled(BoxLayout).attrs({
  horizontalAlignment: 'center',
  verticalAlignment: 'center'
})<{
  $loading?: boolean;
  $size?: ButtonSize;
}>`
  visibility: ${(props) => (!props.$loading ? 'visible' : 'hidden')};
  & > svg {
    width: calc(${(props) => getButtonSize(props.$size)} - 1rem);
    height: calc(${(props) => getButtonSize(props.$size)} - 1rem);
`;

const ProgressIndicatorContainer = styled(BoxLayout).attrs({
  horizontalAlignment: 'center',
  verticalAlignment: 'center'
})`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export {
  getButtonSize,
  ButtonContainer,
  ItemContainer,
  TextContainer,
  IconContainer,
  ProgressIndicatorContainer
};
