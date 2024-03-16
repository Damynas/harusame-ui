import styled, { css } from 'styled-components';
import { BoxLayoutConstants } from './box-layout.constants';
import { isValidSize } from '../../utils';

type StyledBoxLayoutProps = {
  $margin?: string;
  $padding?: string;
  $minWidth?: string;
  $minHeight?: string;
  $width?: string;
  $height?: string;
  $maxWidth?: string;
  $maxHeight?: string;
  $horizontalAlignment: string;
  $verticalAlignment: string;
  $backgroundColor?: string;
  $border?: string;
  $borderRadius?: string;
};

const BoxLayoutBase = styled.div<StyledBoxLayoutProps>`
  display: flex;
  box-sizing: border-box;
  ${(props) =>
    isValidSize(props.$margin) &&
    css`
      margin: ${props.$margin};
    `}
  ${(props) =>
    isValidSize(props.$padding) &&
    css`
      padding: ${props.$padding};
    `}
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
  ${(props) =>
    props.$horizontalAlignment ===
      BoxLayoutConstants.HORIZONTAL_ALIGNMENTS.stretch &&
    css`
      justify-content: flex-start;
      & > * {
        flex-grow: 1;
      }
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      BoxLayoutConstants.HORIZONTAL_ALIGNMENTS.left &&
    css`
      justify-content: flex-start;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      BoxLayoutConstants.HORIZONTAL_ALIGNMENTS.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      BoxLayoutConstants.HORIZONTAL_ALIGNMENTS.right &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      BoxLayoutConstants.VERTICAL_ALIGNMENTS.stretch &&
    css`
      align-items: stretch;
    `}
  ${(props) =>
    props.$verticalAlignment === BoxLayoutConstants.VERTICAL_ALIGNMENTS.top &&
    css`
      align-items: flex-start;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      BoxLayoutConstants.VERTICAL_ALIGNMENTS.center &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      BoxLayoutConstants.VERTICAL_ALIGNMENTS.bottom &&
    css`
      align-items: flex-end;
    `}
  ${(props) =>
    props.$backgroundColor &&
    css`
      background-color: ${props.$backgroundColor};
    `}
  ${(props) =>
    props.$border &&
    css`
      border: ${props.$border};
    `}
  ${(props) =>
    isValidSize(props.$borderRadius) &&
    css`
      border-radius: ${props.$borderRadius};
    `}
`;

export { BoxLayoutBase };
