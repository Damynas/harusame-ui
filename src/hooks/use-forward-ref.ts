import { useEffect, useRef, type ForwardedRef } from 'react';
import type { Nullable } from '../common/shared';

const useForwardRef = <T>(
  forwardedRef: ForwardedRef<T>,
  initialValue: Nullable<T> = null
) => {
  const targetRef = useRef<T>(initialValue);

  useEffect(() => {
    if (!forwardedRef) return;

    if (typeof forwardedRef === 'function') {
      forwardedRef(targetRef.current);
    } else {
      forwardedRef.current = targetRef.current;
    }
  }, [forwardedRef]);

  return targetRef;
};

export { useForwardRef };
