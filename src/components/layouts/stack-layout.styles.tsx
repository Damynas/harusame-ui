import styled, { css } from 'styled-components';
import { StackLayoutConstants } from './stack-layout.constants';

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

const StackLayoutBase = styled.div<StyledStackLayoutProps>`
  display: flex;
  box-sizing: border-box;
  flex-grow: 1;
  flex-basis: auto;
  flex-wrap: nowrap;
  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}
  ${(props) =>
    props.$minWidth &&
    css`
      min-width: ${props.$minWidth};
    `}
  ${(props) =>
    props.$minHeight &&
    css`
      min-height: ${props.$minHeight};
    `}
  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width};
    `}
  ${(props) =>
    props.$height &&
    css`
      height: ${props.$height};
    `}
  ${(props) =>
    props.$maxWidth &&
    css`
      max-width: ${props.$maxWidth};
    `}
  ${(props) =>
    props.$maxHeight &&
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
    props.$borderRadius &&
    css`
      border-radius: ${props.$borderRadius};
    `}
`;

const HorizontalStackLayout = styled(StackLayoutBase)`
  flex-direction: row;
  ${(props) =>
    props.$gap &&
    css`
      column-gap: ${props.$gap};
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENT.stretch &&
    css`
      justify-content: flex-start;
      & > * {
        flex-grow: 1;
      }
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENT.left &&
    css`
      justify-content: flex-start;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENT.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENT.right &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENT.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENT.spaceAround &&
    css`
      justify-content: space-around;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENT.spaceEvenly &&
    css`
      justify-content: space-evenly;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENT.stretch &&
    css`
      align-items: stretch;
    `}
  ${(props) =>
    props.$verticalAlignment === StackLayoutConstants.VERTICAL_ALIGNMENT.top &&
    css`
      align-items: flex-start;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENT.center &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENT.bottom &&
    css`
      align-items: flex-end;
    `}
`;

const VerticalStackLayout = styled(StackLayoutBase)`
  flex-direction: column;
  ${(props) =>
    props.$gap &&
    css`
      row-gap: ${props.$gap};
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENT.stretch &&
    css`
      align-items: stretch;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENT.left &&
    css`
      align-items: flex-start;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENT.center &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      StackLayoutConstants.HORIZONTAL_ALIGNMENT.right &&
    css`
      align-items: flex-end;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENT.stretch &&
    css`
      justify-content: flex-start;
      & > * {
        flex-grow: 1;
      }
    `}
  ${(props) =>
    props.$verticalAlignment === StackLayoutConstants.VERTICAL_ALIGNMENT.top &&
    css`
      justify-content: flex-start;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENT.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENT.bottom &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENT.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENT.spaceAround &&
    css`
      justify-content: space-around;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      StackLayoutConstants.VERTICAL_ALIGNMENT.spaceEvenly &&
    css`
      justify-content: space-evenly;
    `}
`;

export { StackLayoutBase, HorizontalStackLayout, VerticalStackLayout };
