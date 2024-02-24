import styled, { css } from 'styled-components';
import type { Theme } from 'common/theme';

type StyledButtonProps = {
  $size: string;
  theme?: Theme;
};

const ButtonBase = styled.button<StyledButtonProps>`
  border: none;
  cursor: pointer;
  margin: 0.25rem;
  min-width: 4rem;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  ${(props) => css`
    height: ${props.$size};
    line-height: calc(${props.$size} - 1rem);
  `}
  ${(props) =>
    props.theme?.typography &&
    css`
      font-size: ${props.theme.typography.body2.fontSize};
      font-family: ${props.theme.typography.body2.fontFamily};
      font-weight: ${props.theme.typography.body2.fontWeights.regular};
    `}
`;

const ContainedButton = styled(ButtonBase)`
  ${(props) =>
    props.theme?.colors &&
    css`
      border: 0.06rem solid;
      color: ${props.theme.colors.white};
      border-color: ${props.theme.colors.primary500};
      background-color: ${props.theme.colors.primary500};
      &:hover {
        border-color: ${props.theme.colors.primary400};
        background-color: ${props.theme.colors.primary400};
      }
      &:active {
        border-color: ${props.theme.colors.primary700};
        background-color: ${props.theme.colors.primary700};
      }
      &:focus {
        outline: 0.125rem solid ${props.theme.colors.primary700};
        outline-offset: 0.125rem;
      }
    `}
`;

const OutlinedButton = styled(ButtonBase)`
  ${(props) =>
    props.theme?.colors &&
    css`
      border: 0.06rem solid;
      background-color: transparent;
      color: ${props.theme.colors.primary500};
      border-color: ${props.theme.colors.primary500};
      &:hover {
        background-color: ${props.theme.colors.primary100};
      }
      &:active {
        background-color: ${props.theme.colors.primary300};
      }
      &:focus {
        outline: 0.125rem solid ${props.theme.colors.primary700};
        outline-offset: 0.125rem;
      }
    `}
`;

const TextButton = styled(ButtonBase)`
  ${(props) =>
    props.theme?.colors &&
    css`
      background-color: transparent;
      color: ${props.theme.colors.primary500};
      &:hover {
        background-color: ${props.theme.colors.primary100};
      }
      &:active {
        background-color: ${props.theme.colors.primary300};
      }
      &:focus {
        outline: 0.125rem solid ${props.theme.colors.primary700};
        outline-offset: 0.125rem;
      }
    `}
`;

export type StyledButton = typeof ButtonBase;
export { ContainedButton, OutlinedButton, TextButton };
