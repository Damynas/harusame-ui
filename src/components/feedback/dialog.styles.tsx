import styled, { css } from 'styled-components';
import type { Nullable } from '../../common/shared';
import type { Theme } from '../../common/theme';
import { isValidSize } from '../../utils';

type StyledDialogProps = {
  $minWidth?: string;
  $minHeight?: string;
  $width?: string;
  $height?: string;
  $maxWidth?: string;
  $maxHeight?: string;
  $backdropColor?: string;
  $backdropOpacity?: number;
  $border?: string;
  $borderRadius?: string;
  $theme: Nullable<Theme>;
};

type StyledDialogInnerContainerProps = {
  $padding?: string;
  $backgroundColor?: string;
  $theme: Nullable<Theme>;
};

const DialogBase = styled.dialog<StyledDialogProps>`
  padding: 0;

  ${(props) =>
    isValidSize(props.$minWidth) &&
    css`
      min-width: ${props.$minWidth};
    `}
  ${(props) =>
    isValidSize(props.$minHeight) &&
    css`
      min-height: ${props.$minHeight};
    `}
  ${(props) =>
    isValidSize(props.$width) &&
    css`
      width: ${props.$width};
    `}
  ${(props) =>
    isValidSize(props.$height) &&
    css`
      height: ${props.$height};
    `}
  ${(props) =>
    isValidSize(props.$maxWidth) &&
    css`
      max-width: ${props.$maxWidth};
    `}
  ${(props) =>
    isValidSize(props.$maxHeight) &&
    css`
      max-height: ${props.$maxHeight};
    `}
  
  border: ${(props) => (props.$border ? props.$border : 'none')};
  border-radius: ${(props) =>
    isValidSize(props.$borderRadius) ? props.$borderRadius : '0.25rem'};

  &::backdrop {
    opacity: ${(props) => props.$backdropOpacity ?? '0.5'};
    background: ${(props) =>
      props.$backdropColor ?? props.$theme?.colors.neutral500};
  }
`;

const DialogInnerContainer = styled.div<StyledDialogInnerContainerProps>`
  width: ${(props) =>
    isValidSize(props.$padding)
      ? `calc(100% - ${props.$padding} * 2)`
      : '100%'};
  height: ${(props) =>
    isValidSize(props.$padding)
      ? `calc(100% - ${props.$padding} * 2)`
      : '100%'};

  ${(props) =>
    isValidSize(props.$padding) &&
    css`
      padding: ${props.$padding};
    `}
  ${(props) =>
    props.$backgroundColor &&
    css`
      background-color: ${props.$backgroundColor ?? props.$theme?.colors.white};
    `}
`;

export { DialogBase, DialogInnerContainer };
