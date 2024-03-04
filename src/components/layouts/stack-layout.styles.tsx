import styled, { css } from 'styled-components';
import { StackLayoutConstants } from './stack-layout.constants';
import { isValidSize } from '@utils/is-valid-size';

type StyledStackLayoutProps = {
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
  $gap?: string;
  $backgroundColor?: string;
  $border?: string;
  $borderRadius?: string;
};

type StyledStackLayout = typeof StackLayoutBase;

const StackLayoutBase = styled.div<StyledStackLayoutProps>`
  display: flex;
  box-sizing: border-box;
  flex-wrap: nowrap;
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

const HorizontalStackLayout = styled(StackLayoutBase)`
  flex-direction: row;
  ${(props) =>
    isValidSize(props.$gap) &&
    css`
      column-gap: ${props.$gap};
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENTS.stretch &&
    css`
      justify-content: flex-start;
      & > * {
        flex-grow: 1;
      }
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENTS.left &&
    css`
      justify-content: flex-start;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENTS.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENTS.right &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENTS.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENTS.spaceAround &&
    css`
      justify-content: space-around;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENTS.spaceEvenly &&
    css`
      justify-content: space-evenly;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENTS.stretch &&
    css`
      align-items: stretch;
    `}
  ${(props) =>
    props.$verticalAlignment === StackLayoutConstants.VERTICAL_ALIGNMENTS.top &&
    css`
      align-items: flex-start;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENTS.center &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENTS.bottom &&
    css`
      align-items: flex-end;
    `}
`;

const VerticalStackLayout = styled(StackLayoutBase)`
  flex-direction: column;
  ${(props) =>
    isValidSize(props.$gap) &&
    css`
      row-gap: ${props.$gap};
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENTS.stretch &&
    css`
      align-items: stretch;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENTS.left &&
    css`
      align-items: flex-start;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENTS.center &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENTS.right &&
    css`
      align-items: flex-end;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENTS.stretch &&
    css`
      justify-content: flex-start;
      & > * {
        flex-grow: 1;
      }
    `}
  ${(props) =>
    props.$verticalAlignment === StackLayoutConstants.VERTICAL_ALIGNMENTS.top &&
    css`
      justify-content: flex-start;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENTS.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENTS.bottom &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENTS.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENTS.spaceAround &&
    css`
      justify-content: space-around;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENTS.spaceEvenly &&
    css`
      justify-content: space-evenly;
    `}
`;

export { HorizontalStackLayout, VerticalStackLayout };
export type { StyledStackLayout };
