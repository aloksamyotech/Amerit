import { render, screen } from '@core/test/test-utils';
import '@testing-library/jest-dom';

import Home from '../Home';

describe('Home', () => {
  test('renders correctly', async () => {
    render(<Home />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
