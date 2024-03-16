import type { ReactElement } from 'react';
import type { IconProps } from '@components/data-display';
import { ButtonBaseConstants } from './button-base.constants';

type ButtonIcon = ReactElement<IconProps>;
type ButtonSize = keyof typeof ButtonBaseConstants.BUTTON_SIZES;

export type { ButtonIcon, ButtonSize };
