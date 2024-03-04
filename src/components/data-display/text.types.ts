import { TextConstants } from './text.constants';

type FontWeight = keyof typeof TextConstants.FONT_WEIGHTS;
type TextVariant = keyof typeof TextConstants.TEXT_VARIANTS;

export type { FontWeight, TextVariant };
