import styled, { css } from 'styled-components';
import { DataTableCellConstants } from './data-table-cell.constants';
import type {
  TableCellAlignment,
  TableCellVariant
} from './data-table-cell.types';
import { Text } from '../text';
import { isValidSize } from '../../../utils/is-valid-size';

type StyledTableCellProps = {
  $alignment: TableCellAlignment;
  $width?: string;
  $minWidth?: string;
  $maxWidth?: string;
};

const getTableCellCss = (
  alignment: string,
  width?: string,
  minWidth?: string,
  maxWidth?: string
) => css`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0.5rem 1rem;

  border: none;

  ${alignment === DataTableCellConstants.ALIGNMENTS.stretch &&
  css`
    justify-content: flex-start;
    & > * {
      flex-grow: 1;
    }
  `}
  ${alignment === DataTableCellConstants.ALIGNMENTS.left &&
  css`
    justify-content: flex-start;
  `}
  ${alignment === DataTableCellConstants.ALIGNMENTS.center &&
  css`
    justify-content: center;
  `}
  ${alignment === DataTableCellConstants.ALIGNMENTS.right &&
  css`
    justify-content: flex-end;
  `}

  ${!width &&
  css`
    flex: 1;
  `}

  ${isValidSize(width) &&
  css`
    width: ${width};
  `}
  ${isValidSize(minWidth) &&
  css`
    min-width: ${minWidth};
  `}
  ${isValidSize(maxWidth) &&
  css`
    max-width: ${maxWidth};
  `}
`;

const HeaderTableCell = styled.th<StyledTableCellProps>`
  ${(props) =>
    getTableCellCss(
      props.$alignment,
      props.$width,
      props.$minWidth,
      props.$maxWidth
    )}
`;

const BodyTableCell = styled.td<StyledTableCellProps>`
  ${(props) =>
    getTableCellCss(
      props.$alignment,
      props.$width,
      props.$minWidth,
      props.$maxWidth
    )}
`;

const FooterTableCell = styled.td<StyledTableCellProps>`
  ${(props) =>
    getTableCellCss(
      props.$alignment,
      props.$width,
      props.$minWidth,
      props.$maxWidth
    )}
`;

const TableCellText = styled(Text).attrs<{
  $variant: TableCellVariant;
  $color?: string;
}>((props) => {
  return {
    variant: 'body2',
    fontWeight:
      props.$variant === DataTableCellConstants.VARIANTS.header
        ? 'bold'
        : 'regular',
    color: props.$color,
    truncate: true
  };
})`
  padding: 0.5rem;
`;

export { HeaderTableCell, BodyTableCell, FooterTableCell, TableCellText };
