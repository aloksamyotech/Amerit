import { render, screen } from '@core/test/test-utils';
import '@testing-library/jest-dom';

import Logo from '../Logo';

describe('Logo', () => {
  test('renders correctly', async () => {
    render(<Logo width='300' height='100' />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
