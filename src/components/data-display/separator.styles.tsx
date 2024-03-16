import styled from 'styled-components';
import type { Nullable } from '../../common/shared';
import { commonColors, type Theme } from '../../common/theme';
import { isValidSize } from '../../utils';
import { SeparatorConstants } from './separator.constants';

type StyledSeparatorProps = {
  $color?: string;
  $size?: string;
  $theme: Nullable<Theme>;
};

type StyledSeparator = typeof SeparatorBase;

const SeparatorBase = styled.div<StyledSeparatorProps>`
  background-color: ${(props) =>
    props.$color ?? props.$theme?.colors.neutral300 ?? commonColors.black};
`;

const HorizontalSeparator = styled(SeparatorBase)`
  height: ${(props) =>
    isValidSize(props.$size)
      ? props.$size
      : SeparatorConstants.DEFAULT_SEPARATOR_SIZE};
`;

const VerticalSeparator = styled(SeparatorBase)`
  width: ${(props) =>
    isValidSize(props.$size)
      ? props.$size
      : SeparatorConstants.DEFAULT_SEPARATOR_SIZE};
`;

export { HorizontalSeparator, VerticalSeparator };
export type { StyledSeparator };
