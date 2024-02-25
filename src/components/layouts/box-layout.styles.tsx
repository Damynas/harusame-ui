import styled, { css } from 'styled-components';

type StyledBoxLayoutProps = {
  $margin?: string;
  $padding?: string;
  $minWidth?: string;
  $minHeight?: string;
  $width?: string;
  $height?: string;
  $maxWidth?: string;
  $maxHeight?: string;
  $horizontalAlignment?: string;
  $verticalAlignment?: string;
  $backgroundColor?: string;
  $border?: string;
  $borderRadius?: string;
};

const BoxLayoutBase = styled.div<StyledBoxLayoutProps>`
  display: flex;
  box-sizing: border-box;
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
    props.$horizontalAlignment && props.$horizontalAlignment.startsWith('&')
      ? css`
          ${props.$horizontalAlignment};
        `
      : css`
          justify-content: ${props.$horizontalAlignment};
        `}
  ${(props) =>
    props.$verticalAlignment &&
    css`
      align-items: ${props.$verticalAlignment};
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

export { BoxLayoutBase };
