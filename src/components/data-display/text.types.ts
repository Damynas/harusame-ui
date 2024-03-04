import { TextConstants } from './text.constants';
import { TextBase } from './text.styles';

type FontWeight = keyof typeof TextConstants.FONT_WEIGHTS;
type TextVariant = keyof typeof TextConstants.TEXT_VARIANTS;

type StyledText = typeof TextBase;

export type { FontWeight, TextVariant, StyledText };
