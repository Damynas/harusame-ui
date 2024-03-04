import { ButtonConstants } from './button.constants';

type ButtonSize = keyof typeof ButtonConstants.BUTTON_SIZES;
type ButtonVariant = keyof typeof ButtonConstants.BUTTON_VARIANTS;

export type { ButtonSize, ButtonVariant };
