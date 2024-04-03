import { useState, useCallback } from 'react';
import { Snackbar, type SnackbarProps } from '../components';
import type { SnackbarVariant } from '../components/feedback/snackbar.types';

type PropsToOmit = 'isOpen' | 'onClose' | 'message' | 'variant' | 'duration';

type SnackbarState = {
  isOpen: boolean;
  message: string;
  variant: SnackbarVariant;
  duration?: number;
};

const useSnackbar = () => {
  const [state, setState] = useState<SnackbarState>({
    isOpen: false,
    message: '',
    variant: 'default'
  });

  const openSnackbar = useCallback(
    (message: string, variant?: SnackbarVariant, duration?: number) => {
      setState((prevState) => ({
        ...prevState,
        isOpen: true,
        message,
        variant: variant || prevState.variant,
        duration: duration || prevState.duration
      }));
    },
    []
  );

  const closeSnackbar = useCallback(
    () => setState((prevState) => ({ ...prevState, isOpen: false })),
    []
  );

  const SnackbarComponent = useCallback(
    (snackbarComponentProps: Omit<SnackbarProps, PropsToOmit>) => {
      const { children, ...props } = snackbarComponentProps;
      return (
        <Snackbar
          {...props}
          isOpen={state.isOpen}
          onClose={closeSnackbar}
          message={state.message}
          variant={state.variant}
          duration={state.duration}
        >
          {children}
        </Snackbar>
      );
    },
    [closeSnackbar, state.duration, state.isOpen, state.message, state.variant]
  );

  return { SnackbarComponent, openSnackbar, closeSnackbar };
};

export { useSnackbar };
