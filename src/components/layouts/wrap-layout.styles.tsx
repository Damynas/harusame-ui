import styled, { css } from 'styled-components';
import { WrapLayoutConstants } from './wrap-layout.constants';
import { isValidSize } from '@utils/is-valid-size';

type StyledWrapLayoutProps = {
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
  $rowGap?: string;
  $columnGap?: string;
  $backgroundColor?: string;
  $border?: string;
  $borderRadius?: string;
};

const WrapLayoutBase = styled.div<StyledWrapLayoutProps>`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  ${(props) =>
    (props.$rowGap || props.$columnGap) &&
    css`
      gap: ${props.$rowGap ?? 0} ${props.$columnGap ?? 0};
    `}
  ${(props) =>
    props.$margin &&
    isValidSize(props.$margin) &&
    css`
      margin: ${props.$margin};
    `}
  ${(props) =>
    props.$padding &&
    isValidSize(props.$padding) &&
    css`
      padding: ${props.$padding};
    `}
  ${(props) =>
    props.$minWidth &&
    isValidSize(props.$minWidth) &&
    css`
      min-width: ${props.$minWidth};
    `}
  ${(props) =>
    props.$minHeight &&
    isValidSize(props.$minHeight) &&
    css`
      min-height: ${props.$minHeight};
    `}
  ${(props) =>
    props.$width &&
    isValidSize(props.$width) &&
    css`
      width: ${props.$width};
    `}
  ${(props) =>
    props.$height &&
    isValidSize(props.$height) &&
    css`
      height: ${props.$height};
    `}
  ${(props) =>
    props.$maxWidth &&
    isValidSize(props.$maxWidth) &&
    css`
      max-width: ${props.$maxWidth};
    `}
  ${(props) =>
    props.$maxHeight &&
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
    props.$borderRadius &&
    isValidSize(props.$borderRadius) &&
    css`
      border-radius: ${props.$borderRadius};
    `}
`;

const HorizontalWrapLayout = styled(WrapLayoutBase)`
  flex-direction: row;
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.stretch &&
    css`
      justify-content: flex-start;
      & > * {
        flex-grow: 1;
      }
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.left &&
    css`
      justify-content: flex-start;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.right &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.spaceAround &&
    css`
      justify-content: space-around;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.spaceEvenly &&
    css`
      justify-content: space-evenly;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      WrapLayoutConstants.VERTICAL_ALIGNMENT.stretch &&
    css`
      align-items: stretch;
    `}
  ${(props) =>
    props.$verticalAlignment === WrapLayoutConstants.VERTICAL_ALIGNMENT.top &&
    css`
      align-items: flex-start;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      WrapLayoutConstants.VERTICAL_ALIGNMENT.center &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      WrapLayoutConstants.VERTICAL_ALIGNMENT.bottom &&
    css`
      align-items: flex-end;
    `}
`;

const VerticalWrapLayout = styled(WrapLayoutBase)`
  flex-direction: column;
  flex-flow: column wrap;
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.stretch &&
    css`
      align-content: stretch;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.left &&
    css`
      align-content: flex-start;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.center &&
    css`
      align-content: center;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.right &&
    css`
      align-content: flex-end;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.spaceBetween &&
    css`
      align-content: space-between;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.spaceAround &&
    css`
      align-content: space-around;
    `}
  ${(props) =>
    props.$horizontalAlignment ===
      WrapLayoutConstants.HORIZONTAL_ALIGNMENT.spaceEvenly &&
    css`
      align-content: space-evenly;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      WrapLayoutConstants.VERTICAL_ALIGNMENT.stretch &&
    css`
      justify-content: flex-start;
      & > * {
        flex-grow: 1;
      }
    `}
  ${(props) =>
    props.$verticalAlignment === WrapLayoutConstants.VERTICAL_ALIGNMENT.top &&
    css`
      justify-content: flex-start;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      WrapLayoutConstants.VERTICAL_ALIGNMENT.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      WrapLayoutConstants.VERTICAL_ALIGNMENT.bottom &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      WrapLayoutConstants.VERTICAL_ALIGNMENT.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      WrapLayoutConstants.VERTICAL_ALIGNMENT.spaceAround &&
    css`
      justify-content: space-around;
    `}
  ${(props) =>
    props.$verticalAlignment ===
      WrapLayoutConstants.VERTICAL_ALIGNMENT.spaceEvenly &&
    css`
      justify-content: space-evenly;
    `}
`;

export { WrapLayoutBase, HorizontalWrapLayout, VerticalWrapLayout };
