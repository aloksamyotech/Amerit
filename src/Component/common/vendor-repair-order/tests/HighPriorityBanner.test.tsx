import { render, screen } from '@core/test/test-utils';
import HighPriorityBanner from '../HighPriorityBanner';

describe('HighPriorityBanner', () => {
  test('renders correctly', async () => {
    render(<HighPriorityBanner />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
