import styled, { css, keyframes } from 'styled-components';
import type { Nullable } from '../../../common/shared';
import { commonColors, type Theme } from '../../../common/theme';
import { isValidSize } from '../../../utils';
import { BoxLayout } from '../../layouts';

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

const getFadeAnimationKeyframes = (
  opacityFrom: number,
  opacityTo: number,
  scaleFrom: Nullable<number> = null,
  scaleTo: Nullable<number> = null
) => keyframes`
  from {
    opacity: ${opacityFrom};
    ${
      scaleFrom &&
      css`
        transform: scale(${scaleFrom});
      `
    }
  }
  to {
    opacity: ${opacityTo};
    ${
      scaleTo &&
      css`
        transform: scale(${scaleTo});
      `
    }
  }
`;

const DialogBase = styled.dialog<StyledDialogProps>`
  padding: 0;
  outline: none;

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

  width: ${(props) => (isValidSize(props.$width) ? props.$width : '37.5rem')};
  height: ${(props) =>
    isValidSize(props.$height) ? props.$height : '17.5rem'};

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

  box-shadow: 0 0.35rem 1rem rgba(0, 0, 0, 0.35);

  &::backdrop {
    opacity: ${(props) => props.$backdropOpacity ?? '0.5'};
    background: ${(props) =>
      props.$backdropColor ?? props.$theme?.colors.neutral500};
  }

  &[open] {
    animation: ${getFadeAnimationKeyframes(0, 1, 0.8, 1)} 0.3s forwards;
  }

  &[open]::backdrop {
    animation: ${(props) =>
        getFadeAnimationKeyframes(0, props.$backdropOpacity ?? 0.5)}
      0.3s forwards;
  }

  &[closing] {
    display: block;
    pointer-events: none;
    inset: 0;
    animation: ${getFadeAnimationKeyframes(1, 0, 1, 0.8)} 0.3s forwards;
  }

  &[closing]::backdrop {
    animation: ${(props) =>
        getFadeAnimationKeyframes(props.$backdropOpacity ?? 0.5, 0)}
      0.3s forwards;
  }
`;

const DialogInnerContainer = styled(
  BoxLayout
).attrs<StyledDialogInnerContainerProps>((props) => ({
  padding: props.$padding,
  backgroundColor:
    props.$backgroundColor ?? props.$theme?.colors.white ?? commonColors.white
}))`
  width: ${(props) =>
    isValidSize(props.$padding)
      ? `calc(100% - ${props.$padding} * 2)`
      : '100%'};
  height: ${(props) =>
    isValidSize(props.$padding)
      ? `calc(100% - ${props.$padding} * 2)`
      : '100%'};
`;

export { DialogBase, DialogInnerContainer };
