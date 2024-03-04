import { type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  Separator,
  type SeparatorElement,
  type SeparatorProps
} from './separator';
import { SeparatorConstants } from './separator.constants';

const separatorTestId = 'separator-test-id';

const defaultProps: SeparatorProps = {};

const renderSeparator = (
  props: SeparatorProps = defaultProps,
  ref?: Ref<SeparatorElement>
) => {
  render(
    <Separator
      {...props}
      data-testid={separatorTestId}
      ref={ref}
    />
  );
};

describe('Separator tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render horizontal separator when no orientation is given', () => {
    renderSeparator();
    const separator = screen.queryByTestId(separatorTestId);
    expect(separator).toBeDefined();
    expect(separator).toHaveStyle({
      height: SeparatorConstants.DEFAULT_SEPARATOR_SIZE
    });
  });

  it('Should render horizontal separator', () => {
    const props: SeparatorProps = {
      orientation: SeparatorConstants.ORIENTATIONS.horizontal
    };
    renderSeparator(props);
    const separator = screen.queryByTestId(separatorTestId);
    expect(separator).toBeDefined();
    expect(separator).toHaveStyle({
      height: SeparatorConstants.DEFAULT_SEPARATOR_SIZE
    });
  });

  it('Should render vertical separator', () => {
    const props: SeparatorProps = {
      orientation: SeparatorConstants.ORIENTATIONS.vertical
    };
    renderSeparator(props);
    const separator = screen.queryByTestId(separatorTestId);
    expect(separator).toBeDefined();
    expect(separator).toHaveStyle({
      width: SeparatorConstants.DEFAULT_SEPARATOR_SIZE
    });
  });
});
