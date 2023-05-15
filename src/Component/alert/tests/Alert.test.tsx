import { render, screen } from '@core/test/test-utils';

import Alert from '../Alert';

describe('Alert', () => {
  test('renders correctly', async () => {
    render(<Alert />);
    expect(screen.getByTestId('alert-icon')).toBeInTheDocument();
  });
});
