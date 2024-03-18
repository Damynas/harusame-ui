import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  DottedProgressIndicator,
  type DottedProgressIndicatorElement,
  type DottedProgressIndicatorProps
} from './dotted-progress-indicator';

const dottedProgressIndicatorTestId = 'dotted-progress-indicator-test-id';

const defaultProps: DottedProgressIndicatorProps = {};

const renderDottedProgressIndicator = (
  props: DottedProgressIndicatorProps = defaultProps,
  ref?: Ref<DottedProgressIndicatorElement>
) => {
  render(
    <DottedProgressIndicator
      {...props}
      data-testid={dottedProgressIndicatorTestId}
      ref={ref}
    />
  );
};

describe('Dotted Progress Indicator Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render dotted progress indicator', () => {
    renderDottedProgressIndicator();
    const dottedProgressIndicator = screen.queryByTestId(
      dottedProgressIndicatorTestId
    );
    expect(dottedProgressIndicator).toBeDefined();
  });

  it('Should forward a ref to the dotted progress indicator', () => {
    const dottedProgressIndicatorRef =
      createRef<DottedProgressIndicatorElement>();
    renderDottedProgressIndicator(defaultProps, dottedProgressIndicatorRef);
    const dottedProgressIndicator = screen.queryByTestId(
      dottedProgressIndicatorTestId
    );
    expect(dottedProgressIndicator).toBeDefined();
    expect(dottedProgressIndicatorRef.current).not.toBeNull();
  });
});
