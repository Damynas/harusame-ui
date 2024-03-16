import { forwardRef, type ForwardedRef } from 'react';
import {
  Icon,
  type IconElement,
  type IconProps
} from '../../components/data-display';
import { HomeIconConstants } from './home-icon.constants';

const HomeIconInner = (
  homeIconProps: IconProps,
  forwardedRef: ForwardedRef<IconElement>
) => {
  return (
    <Icon
      {...homeIconProps}
      ref={forwardedRef}
    >
      <path
        d='M0 0h24v24H0V0z'
        fill='none'
      />
      <path d='M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z' />
    </Icon>
  );
};

const HomeIcon = forwardRef<IconElement, IconProps>(HomeIconInner);
HomeIcon.displayName = HomeIconConstants.DISPLAY_NAME;

export { HomeIcon };
