import { ForwardedRef, forwardRef, type HTMLAttributes } from 'react';
import { SeparatorConstants } from './separator.constants';
import {
  HorizontalSeparator,
  VerticalSeparator,
  type StyledSeparator
} from './separator.styles';
import type { Orientation } from './separator.types';
import { useTheme } from '@common/theme';

type SeparatorProps = {
  orientation?: Orientation;
  color?: string;
  size?: string;
} & HTMLAttributes<HTMLDivElement>;

type SeparatorElement = HTMLDivElement;

const SeparatorComponents: Record<Orientation, StyledSeparator> = {
  [SeparatorConstants.ORIENTATIONS.horizontal]: HorizontalSeparator,
  [SeparatorConstants.ORIENTATIONS.vertical]: VerticalSeparator
};

const getSeparatorComponent = (
  orientation: Orientation = SeparatorConstants.DEFAULT_ORIENTATION
) => SeparatorComponents[orientation];

const SeparatorInner = (
  separatorProps: SeparatorProps,
  forwardedRef: ForwardedRef<SeparatorElement>
) => {
  const { orientation, color, size, ...props } = separatorProps;
  const SeparatorComponent = getSeparatorComponent(orientation);
  const theme = useTheme();
  return (
    <SeparatorComponent
      {...props}
      ref={forwardedRef}
      $color={color}
      $size={size}
      $theme={theme}
    />
  );
};

const Separator = forwardRef<SeparatorElement, SeparatorProps>(SeparatorInner);
Separator.displayName = SeparatorConstants.DISPLAY_NAME;

export { Separator };
export type { SeparatorElement, SeparatorProps };
