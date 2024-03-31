import styled, { css, keyframes } from 'styled-components';
import type { Nullable } from '../../common/shared';
import type { Theme } from '../../common/theme';
import { isValidSize } from '../../utils';

type StyledSkeletonProps = {
  $width?: string;
  $height?: string;
  $borderRadius?: string;
  $theme: Nullable<Theme>;
};

const shimmer = keyframes`
  to {
    background-position-x: 0%
  }
`;

const SkeletonBase = styled.div<StyledSkeletonProps>`
  margin: 0.25rem;

  ${(props) =>
    isValidSize(props.$height) &&
    css`
      width: ${props.$width};
    `}

  height: ${(props) => (isValidSize(props.$height) ? props.$height : '1.5rem')};
  border-radius: ${(props) =>
    isValidSize(props.$borderRadius) ? props.$borderRadius : '0.25rem'};

  background: ${(props) =>
    css`linear-gradient(120deg, ${props.$theme?.colors.neutral300 ?? '#eee'} 40%, ${props.$theme?.colors.neutral200 ?? '#fafafa'} 50%, ${props.$theme?.colors.neutral300 ?? '#eee'} 60%)`};
  background-size: 300%;
  background-position-x: 100%;
  animation: ${shimmer} 1s infinite linear;
`;

export { SkeletonBase };
