import type { ReactElement } from 'react';
import { ButtonBaseConstants } from './button-base.constants';
import { IconProps } from '@components/data-display';

type ButtonIcon = ReactElement<IconProps>;
type ButtonSize = keyof typeof ButtonBaseConstants.BUTTON_SIZES;

export type { ButtonIcon, ButtonSize };
