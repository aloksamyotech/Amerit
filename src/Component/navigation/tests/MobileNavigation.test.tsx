import { render, screen } from '@core/test/test-utils';
import '@testing-library/jest-dom';

import MobileNavigation from '../MobileNavigation';

describe('MobileNavigation', () => {
  test('renders menu hamburger button', async () => {
    render(
      <MobileNavigation
        handleCloseNavMenu={jest.fn()}
        handleOpenNavMenu={jest.fn()}
        anchorElNav={null}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
