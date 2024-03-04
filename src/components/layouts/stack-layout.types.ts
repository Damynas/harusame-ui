import { StackLayoutConstants } from './stack-layout.constants';

type Orientation = keyof typeof StackLayoutConstants.ORIENTATIONS;
type HorizontalAlignment =
  keyof typeof StackLayoutConstants.HORIZONTAL_ALIGNMENTS;
type VerticalAlignment = keyof typeof StackLayoutConstants.VERTICAL_ALIGNMENTS;

export type { Orientation, HorizontalAlignment, VerticalAlignment };
