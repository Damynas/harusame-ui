import styled, { css } from 'styled-components';
import type { Nullable } from '../../../common/shared';
import type { Theme } from '../../../common/theme';
import { isValidSize } from '../../../utils/is-valid-size';

type StyledTableProps = {
  $width?: string;
  $minWidth?: string;
  $maxWidth?: string;
  $margin?: string;
  $borderRadius?: string;
  $theme: Nullable<Theme>;
};

const Table = styled.table<StyledTableProps>`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  margin: ${(props) => props.$margin ?? '0.5rem'};

  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.2);

  border: none;
  border-radius: ${(props) =>
    isValidSize(props.$borderRadius) ? props.$borderRadius : '0.25rem'};

  ${(props) =>
    isValidSize(props.$width) &&
    css`
      width: ${props.$width};
    `}
  ${(props) =>
    isValidSize(props.$minWidth) &&
    css`
      min-width: ${props.$minWidth};
    `}
  ${(props) =>
    isValidSize(props.$maxWidth) &&
    css`
      max-width: ${props.$maxWidth};
    `}
`;

export { Table };
