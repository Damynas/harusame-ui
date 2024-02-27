import {
  Children,
  forwardRef,
  type ForwardedRef,
  type SVGAttributes
} from 'react';
import { useTheme } from '@common/theme';
import { IconConstants } from './icon.constants';

type PropsToOmit = 'xmlns' | 'viewBox' | 'width' | 'height' | 'fill';

type IconProps = {
  color?: string;
  size?: string;
} & Omit<SVGAttributes<SVGSVGElement>, PropsToOmit>;

type IconElement = SVGSVGElement;

const IconInner = (
  iconProps: IconProps,
  forwardedRef: ForwardedRef<IconElement>
) => {
  const { color, size, children, ...props } = iconProps;
  if (Children.count(children) === 0)
    throw new Error(IconConstants.CHILDREN_COUNT_ERROR_MESSAGE);
  const theme = useTheme();
  return (
    <svg
      {...props}
      ref={forwardedRef}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={size ?? IconConstants.DEFAULT_ICON_SIZE}
      height={size ?? IconConstants.DEFAULT_ICON_SIZE}
      fill={color ?? theme?.colors.primary500}
    >
      {children}
    </svg>
  );
};

const Icon = forwardRef<IconElement, IconProps>(IconInner);
Icon.displayName = IconConstants.DISPLAY_NAME;

export { Icon };
export type { IconElement, IconProps };
