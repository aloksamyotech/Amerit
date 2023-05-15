import { render, screen, fireEvent } from '@core/test/test-utils';
import '@testing-library/jest-dom';

import DesktopNavigation from '../DesktopNavigation';

describe('DesktopNavigation', () => {
  const handleCloseNavMenu = jest.fn();
  beforeEach(() => {
    render(<DesktopNavigation handleCloseNavMenu={handleCloseNavMenu} />);
  });

  test('renders correctly, including navigation item links and icons', async () => {
    expect(screen.getAllByTestId('desktop-navigation-icon')).toHaveLength(1);
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  test('selecting a menu option calls handleCloseNavMenu', async () => {
    const firstLink = screen.getAllByRole('link')[0];
    fireEvent.click(firstLink);
    expect(handleCloseNavMenu).toHaveBeenCalled();
  });
});
