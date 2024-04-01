import { DataTableCellConstants } from './data-table-cell.constants';
import {
  BodyTableCell,
  FooterTableCell,
  HeaderTableCell
} from './data-table-cell.styles';

type TableCellAlignment = keyof typeof DataTableCellConstants.ALIGNMENTS;
type TableCellVariant = keyof typeof DataTableCellConstants.VARIANTS;

type StyledTableCell =
  | typeof HeaderTableCell
  | typeof BodyTableCell
  | typeof FooterTableCell;

export type { TableCellAlignment, TableCellVariant, StyledTableCell };
