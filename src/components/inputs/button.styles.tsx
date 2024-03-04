import styled, { css } from 'styled-components';
import { ButtonConstants } from './button.constants';
import type { ButtonSize, ButtonVariant } from './button.types';
import type { Nullable } from '@common/shared';
import type { Theme } from '@common/theme';
import { BoxLayout } from '@components/layouts';
import { DottedProgressIndicator } from '@components/feedback';

type StyledButtonProps = {
  $size?: ButtonSize;
  $loading?: boolean;
  $theme: Nullable<Theme>;
};

type StyledButton = typeof ButtonBase;

const ButtonSizes: Record<ButtonSize, string> = {
  [ButtonConstants.BUTTON_SIZES.small]: '2rem',
  [ButtonConstants.BUTTON_SIZES.regular]: '2.25rem',
  [ButtonConstants.BUTTON_SIZES.large]: '2.5rem'
};

const getButtonSize = (
  size: ButtonSize = ButtonConstants.DEFAULT_BUTTON_SIZE
) => ButtonSizes[size];

const ButtonBase = styled.button<StyledButtonProps>`
  border: none;
  margin: 0.25rem;
  min-width: 4rem;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  ${(props) =>
    !props.$loading &&
    css`
      cursor: pointer;
    `}
  ${(props) => css`
    height: ${getButtonSize(props.$size)};
    line-height: calc(${getButtonSize(props.$size)} - 1rem);
  `}
  ${(props) =>
    props.$theme?.typography &&
    css`
      font-size: ${props.$theme.typography.body2.fontSize};
      font-family: ${props.$theme.typography.body2.fontFamily};
      font-weight: ${props.$theme.typography.body2.fontWeights.regular};
    `}
`;

const ContainedButton = styled(ButtonBase)`
  ${(props) =>
    props.$theme &&
    css`
      border: 0.06rem solid;
      color: ${props.$theme.colors.white};
      border-color: ${props.$theme.colors.primary500};
      background-color: ${props.$theme.colors.primary500};
      ${!props.$loading &&
      css`
        &:hover {
          border-color: ${props.$theme.colors.primary400};
          background-color: ${props.$theme.colors.primary400};
        }
        &:active {
          border-color: ${props.$theme.colors.primary700};
          background-color: ${props.$theme.colors.primary700};
        }
        &:focus {
          outline: 0.125rem solid ${props.$theme.colors.primary700};
          outline-offset: 0.125rem;
        }
      `}
    `}
`;

const OutlinedButton = styled(ButtonBase)`
  ${(props) =>
    props.$theme &&
    css`
      border: 0.06rem solid;
      background-color: transparent;
      color: ${props.$theme.colors.primary500};
      border-color: ${props.$theme.colors.primary500};
      ${!props.$loading &&
      css`
        &:hover {
          background-color: ${props.$theme.colors.primary100};
        }
        &:active {
          background-color: ${props.$theme.colors.primary300};
        }
        &:focus {
          outline: 0.125rem solid ${props.$theme.colors.primary700};
          outline-offset: 0.125rem;
        }
      `}
    `}
`;

const TextButton = styled(ButtonBase)`
  ${(props) =>
    props.$theme &&
    css`
      background-color: transparent;
      color: ${props.$theme.colors.primary500};
      ${!props.$loading &&
      css`
        &:hover {
          background-color: ${props.$theme.colors.primary100};
        }
        &:active {
          background-color: ${props.$theme.colors.primary300};
        }
        &:focus {
          outline: 0.125rem solid ${props.$theme.colors.primary700};
          outline-offset: 0.125rem;
        }
      `}
    `}
`;

const LabelContainer = styled(BoxLayout)<{ $loading?: boolean }>`
  ${(props) =>
    props.$loading &&
    css`
      visibility: hidden;
    `}
`;

const ProgressIndicatorContainer = styled(BoxLayout)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const ProgressIndicator = styled(DottedProgressIndicator)<{
  $variant?: ButtonVariant;
  $theme: Nullable<Theme>;
}>`
  ${(props) =>
    props.$variant &&
    props.$theme &&
    css`
      & > * {
        background-color: ${props.$variant ===
        ButtonConstants.BUTTON_VARIANTS.contained
          ? props.$theme?.colors.white
          : props.$theme?.colors.primary500};
      }
    `}
`;

export {
  ContainedButton,
  OutlinedButton,
  TextButton,
  LabelContainer,
  ProgressIndicatorContainer,
  ProgressIndicator
};
export type { StyledButton };
