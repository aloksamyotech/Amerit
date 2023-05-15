import { render, screen } from '@core/test/test-utils';
import '@testing-library/jest-dom';

import Header from '../Header';

describe('Header', () => {
  beforeEach(() => render(<Header />));
  test('renders correctly', async () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
  test('renders two logos (one for desktop, one for mobile)', async () => {
    expect(screen.getAllByAltText('Amerit Fleet Services logo')).toHaveLength(
      2
    );
  });
  test('renders links', async () => {
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
