import styled, { css } from 'styled-components';
import type { Nullable } from '../../../common/shared';
import { commonColors, type Theme } from '../../../common/theme';

type StyledTableRowProps = {
  $rowHeight?: string;
  $hoverable?: boolean;
  $borderColor?: string;
  $backgroundColor?: string;
  $hoveredBackgroundColor?: string;
  $theme: Nullable<Theme>;
};

const TableRow = styled.tr<StyledTableRowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: ${(props) => props.$rowHeight ?? '2.5rem'};

  border-top: 0.06rem solid
    ${(props) =>
      props.$borderColor ??
      props.$theme?.colors.neutral300 ??
      commonColors.gray};

  background-color: ${(props) =>
    props.$backgroundColor ?? props.$theme?.colors.white ?? commonColors.white};

  ${(props) =>
    props.$hoverable &&
    css`
      &:hover {
        background-color: ${props.$hoveredBackgroundColor ??
        props.$theme?.colors.neutral200};
      }
    `}
`;

export { TableRow };
