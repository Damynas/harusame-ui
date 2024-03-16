import { forwardRef, type ForwardedRef } from 'react';
import {
  Icon,
  type IconElement,
  type IconProps
} from '../../components/data-display';
import { CloseIconConstants } from './close-icon.constants';

const CloseIconInner = (
  closeIconProps: IconProps,
  forwardedRef: ForwardedRef<IconElement>
) => {
  return (
    <Icon
      {...closeIconProps}
      ref={forwardedRef}
    >
      <path
        d='M0 0h24v24H0V0z'
        fill='none'
      />
      <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' />
    </Icon>
  );
};

const CloseIcon = forwardRef<IconElement, IconProps>(CloseIconInner);
CloseIcon.displayName = CloseIconConstants.DISPLAY_NAME;

export { CloseIcon };
