import { WrapLayoutConstants } from './wrap-layout.constants';

type Orientation = keyof typeof WrapLayoutConstants.ORIENTATIONS;
type HorizontalAlignment =
  keyof typeof WrapLayoutConstants.HORIZONTAL_ALIGNMENTS;
type VerticalAlignment = keyof typeof WrapLayoutConstants.VERTICAL_ALIGNMENTS;

export type { Orientation, HorizontalAlignment, VerticalAlignment };
