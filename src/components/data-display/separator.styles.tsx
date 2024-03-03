import type { Nullable } from '@common/shared';
import { commonColors, type Theme } from '@common/theme';
import { isValidSize } from '@utils/is-valid-size';
import styled from 'styled-components';
import { SeparatorConstants } from './separator.constants';

type StyledSeparatorProps = {
  $color?: string;
  $size?: string;
  $theme: Nullable<Theme>;
};

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

export { SeparatorBase, HorizontalSeparator, VerticalSeparator };
