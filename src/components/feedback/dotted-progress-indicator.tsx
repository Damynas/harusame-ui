import { forwardRef, type ForwardedRef, type HTMLAttributes } from 'react';
import { DottedProgressIndicatorConstants } from './dotted-progress-indicator.constants';
import type { DottedProgressIndicatorSize } from './dotted-progress-indicator.types';
import { BouncingDot } from './dotted-progress-indicator.styles';
import { useTheme } from '@common/theme';
import { StackLayout } from '@components/layouts';

type DottedProgressIndicatorProps = {
  color?: string;
  size?: DottedProgressIndicatorSize;
} & HTMLAttributes<HTMLDivElement>;

type DottedProgressIndicatorElement = HTMLDivElement;

const DottedProgressIndicatorInner = (
  dottedProgressIndicatorProps: DottedProgressIndicatorProps,
  forwardedRef: ForwardedRef<DottedProgressIndicatorElement>
) => {
  const { color, size, ...props } = dottedProgressIndicatorProps;
  const theme = useTheme();
  return (
    <StackLayout
      {...props}
      ref={forwardedRef}
      horizontalAlignment='center'
      verticalAlignment='center'
      gap='0.25rem'
    >
      <BouncingDot
        $color={color}
        $size={size}
        $animationDelay='0s'
        $theme={theme}
      />
      <BouncingDot
        $color={color}
        $size={size}
        $animationDelay='0.2s'
        $theme={theme}
      />
      <BouncingDot
        $color={color}
        $size={size}
        $animationDelay='0.4s'
        $theme={theme}
      />
    </StackLayout>
  );
};

const DottedProgressIndicator = forwardRef<
  DottedProgressIndicatorElement,
  DottedProgressIndicatorProps
>(DottedProgressIndicatorInner);
DottedProgressIndicator.displayName =
  DottedProgressIndicatorConstants.DISPLAY_NAME;

export { DottedProgressIndicator };
export type { DottedProgressIndicatorElement, DottedProgressIndicatorProps };
