import styled, { keyframes } from 'styled-components';
import { DottedProgressIndicatorConstants } from './dotted-progress-indicator.constants';
import type { DottedProgressIndicatorSize } from './dotted-progress-indicator.types';
import type { Nullable } from '../../common/shared';
import { commonColors, type Theme } from '../../common/theme';

type StyledBouncingDotProps = {
  $color?: string;
  $size?: DottedProgressIndicatorSize;
  $animationDelay?: string;
  $theme: Nullable<Theme>;
};

const BouncingDotSizes: Record<DottedProgressIndicatorSize, string> = {
  [DottedProgressIndicatorConstants.DOTTED_PROGRESS_INDICATOR_SIZES.small]:
    '0.5rem',
  [DottedProgressIndicatorConstants.DOTTED_PROGRESS_INDICATOR_SIZES.regular]:
    '0.75rem',
  [DottedProgressIndicatorConstants.DOTTED_PROGRESS_INDICATOR_SIZES.large]:
    '1rem'
};

const getBouncingDotSize = (
  size: DottedProgressIndicatorSize = DottedProgressIndicatorConstants.DEFAULT_DOTTED_PROGRESS_INDICATOR_SIZE
) => BouncingDotSizes[size];

const bounceAnimation = keyframes`
  0%, 75%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(25%);
  }
`;

const BouncingDot = styled.div<StyledBouncingDotProps>`
  width: ${(props) => getBouncingDotSize(props.$size)};
  height: ${(props) => getBouncingDotSize(props.$size)};
  background-color: ${(props) =>
    props.$color ?? props.$theme?.colors.primary500 ?? commonColors.black};
  animation: ${bounceAnimation} 0.6s infinite alternate;
  animation-delay: ${(props) => props.$animationDelay ?? '0s'};
  border-radius: 100%;
`;

export { BouncingDot };
