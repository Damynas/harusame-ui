import { BoxLayoutConstants } from './box-layout.constants';

type HorizontalAlignment =
  keyof typeof BoxLayoutConstants.HORIZONTAL_ALIGNMENTS;
type VerticalAlignment = keyof typeof BoxLayoutConstants.VERTICAL_ALIGNMENTS;

export type { HorizontalAlignment, VerticalAlignment };
