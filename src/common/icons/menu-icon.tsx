import { forwardRef, type ForwardedRef } from 'react';
import {
  Icon,
  type IconElement,
  type IconProps
} from '@components/data-display';
import { MenuIconConstants } from './menu-icon.constants';

const MenuIconInner = (
  menuIconProps: IconProps,
  forwardedRef: ForwardedRef<IconElement>
) => {
  return (
    <Icon
      {...menuIconProps}
      ref={forwardedRef}
    >
      <path
        d='M0 0h24v24H0V0z'
        fill='none'
      />
      <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
    </Icon>
  );
};

const MenuIcon = forwardRef<IconElement, IconProps>(MenuIconInner);
MenuIcon.displayName = MenuIconConstants.DISPLAY_NAME;

export { MenuIcon };
