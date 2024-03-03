import styled, { css } from 'styled-components';
import { BoxLayoutConstants } from './box-layout.constants';
import { isValidSize } from '@utils/is-valid-size';

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
      BoxLayoutConstants.HORIZONTAL_ALIGNMENT.stretch &&
    css`
      justify-content: flex-start;
      & > * {
        flex-grow: 1;
      }
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      BoxLayoutConstants.HORIZONTAL_ALIGNMENT.left &&
    css`
      justify-content: flex-start;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      BoxLayoutConstants.HORIZONTAL_ALIGNMENT.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      BoxLayoutConstants.HORIZONTAL_ALIGNMENT.right &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      BoxLayoutConstants.VERTICAL_ALIGNMENT.stretch &&
    css`
      align-items: stretch;
    `}
  ${(props) =>
    props.$verticalAlignment === BoxLayoutConstants.VERTICAL_ALIGNMENT.top &&
    css`
      align-items: flex-start;
    `}
  ${(props) =>
    props.$verticalAlignment === BoxLayoutConstants.VERTICAL_ALIGNMENT.center &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.$verticalAlignment === BoxLayoutConstants.VERTICAL_ALIGNMENT.bottom &&
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
