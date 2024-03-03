import type { HTMLAttributes } from 'react';
import { TextConstants } from './text.constants';
import { TextBase } from './text.styles';

type TextVariant = keyof typeof TextConstants.TEXT_VARIANTS;
type FontWeight = keyof typeof TextConstants.FONT_WEIGHTS;

type TextProps = {
  variant?: TextVariant;
  truncate?: boolean;
  selectionDisabled?: boolean;
  fontWeight?: FontWeight;
} & HTMLAttributes<HTMLSpanElement>;

type TextElement = HTMLSpanElement;

type StyledText = typeof TextBase;

export type { TextVariant, FontWeight, TextProps, TextElement, StyledText };
