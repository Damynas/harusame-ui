import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Icon, type IconElement, type IconProps } from './icon';
import { IconConstants } from './icon.constants';

const iconTestId = 'icon-test-id';

const defaultProps: IconProps = {
  children: [<path key={0} />, <circle key={1} />]
};

const renderIcon = (
  props: IconProps = defaultProps,
  ref?: Ref<IconElement>
) => {
  render(
    <Icon
      {...props}
      data-testid={iconTestId}
      ref={ref}
    />
  );
};

describe('Icon Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render icon', () => {
    renderIcon();
    const icon = screen.queryByTestId(iconTestId);
    expect(icon).toBeDefined();
  });

  it('Should forward a ref to the icon', () => {
    const iconRef = createRef<IconElement>();
    renderIcon(defaultProps, iconRef);
    const icon = screen.queryByTestId(iconTestId);
    expect(icon).toBeDefined();
    expect(iconRef.current).not.toBeNull();
  });

  it('Should have a default width and height if size property is not given', () => {
    renderIcon();
    const icon = screen.queryByTestId(iconTestId);
    expect(icon).toBeDefined();
    expect(icon).toHaveAttribute('width', IconConstants.DEFAULT_ICON_SIZE);
    expect(icon).toHaveAttribute('height', IconConstants.DEFAULT_ICON_SIZE);
  });

  it('Should have a custom width and height if size property is given', () => {
    const props: IconProps = {
      ...defaultProps,
      size: '2rem'
    };
    renderIcon(props);
    const icon = screen.queryByTestId(iconTestId);
    expect(icon).toBeDefined();
    expect(icon).toHaveAttribute('width', '2rem');
    expect(icon).toHaveAttribute('height', '2rem');
  });

  it('Should throw an exception if there are no children', () => {
    const props: IconProps = {
      ...defaultProps,
      children: []
    };
    expect(() => renderIcon(props)).toThrow(
      IconConstants.CHILDREN_COUNT_ERROR_MESSAGE
    );
  });
});
