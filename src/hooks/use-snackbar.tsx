import { useState } from 'react';
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

  const openSnackbar = (
    message: string,
    variant?: SnackbarVariant,
    duration?: number
  ) =>
    setState({
      ...state,
      isOpen: true,
      message: message,
      ...(variant && { variant: variant }),
      ...(duration && { duration: duration })
    });
  const closeSnackbar = () =>
    setState({
      ...state,
      isOpen: false
    });

  const SnackbarComponent = (
    snackbarComponentProps: Omit<SnackbarProps, PropsToOmit>
  ) => {
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
  };

  return { SnackbarComponent, openSnackbar, closeSnackbar };
};

export { useSnackbar };
