import { useEffect, useRef, type ForwardedRef } from 'react';
import type { Nullable } from '../common/shared';

const useForwardRef = <T>(
  ref: ForwardedRef<T>,
  initialValue: Nullable<T> = null
) => {
  const targetRef = useRef<T>(initialValue);

  useEffect(() => {
    if (!ref) return;

    if (typeof ref === 'function') {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef;
};

export { useForwardRef };
