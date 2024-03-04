import { ColorConstants } from './colors.constants';

type CommonColor = keyof typeof ColorConstants.COMMON_COLORS;
type FeedbackColor = keyof typeof ColorConstants.FEEDBACK_COLORS;
type ThemeColor = keyof typeof ColorConstants.THEME_COLORS;
type ColorStrength = keyof typeof ColorConstants.COLOR_STRENGTHS;

export type { CommonColor, FeedbackColor, ThemeColor, ColorStrength };
