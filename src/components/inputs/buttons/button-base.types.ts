import type { ReactElement } from 'react';
import { ButtonBaseConstants } from './button-base.constants';
import type { IconProps } from '../../data-display';

type ButtonIcon = ReactElement<IconProps>;
type ButtonSize = keyof typeof ButtonBaseConstants.BUTTON_SIZES;
type ButtonVariant = keyof typeof ButtonBaseConstants.BUTTON_VARIANTS;

export type { ButtonIcon, ButtonSize, ButtonVariant };
