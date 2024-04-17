import type { ReactElement } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { IconProps } from '../../components';
import { CloseIcon } from './close-icon';
import { DeleteIcon } from './delete-icon';
import { EditIcon } from './edit-icon';
import { HomeIcon } from './home-icon';
import { MenuIcon } from './menu-icon';
import { SearchIcon } from './search-icon';
import { SettingsIcon } from './settings-icon';

const iconsTestId = 'icons-test-id';

const renderIcon = (icon: ReactElement<IconProps>) => {
  render(icon);
};

describe('Icons Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render close icon', () => {
    renderIcon(<CloseIcon data-testid={iconsTestId} />);
    const icon = screen.queryByTestId(iconsTestId);
    expect(icon).toBeDefined();
  });

  it('Should render delete icon', () => {
    renderIcon(<DeleteIcon data-testid={iconsTestId} />);
    const icon = screen.queryByTestId(iconsTestId);
    expect(icon).toBeDefined();
  });

  it('Should render edit icon', () => {
    renderIcon(<EditIcon data-testid={iconsTestId} />);
    const icon = screen.queryByTestId(iconsTestId);
    expect(icon).toBeDefined();
  });

  it('Should render home icon', () => {
    renderIcon(<HomeIcon data-testid={iconsTestId} />);
    const icon = screen.queryByTestId(iconsTestId);
    expect(icon).toBeDefined();
  });

  it('Should render menu icon', () => {
    renderIcon(<MenuIcon data-testid={iconsTestId} />);
    const icon = screen.queryByTestId(iconsTestId);
    expect(icon).toBeDefined();
  });

  it('Should render search icon', () => {
    renderIcon(<SearchIcon data-testid={iconsTestId} />);
    const icon = screen.queryByTestId(iconsTestId);
    expect(icon).toBeDefined();
  });

  it('Should render settings icon', () => {
    renderIcon(<SettingsIcon data-testid={iconsTestId} />);
    const icon = screen.queryByTestId(iconsTestId);
    expect(icon).toBeDefined();
  });
});
