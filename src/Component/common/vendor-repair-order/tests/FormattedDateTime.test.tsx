import { render, screen } from '@core/test/test-utils';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import FormattedDateTime from '../FormattedDateTime';

describe('FormattedDateTime', () => {
  test('renders correctly', async () => {
    const row = MOCK_VENDOR_REPAIR_ORDERS[0];
    render(<FormattedDateTime date={row.estimateDue} direction='row' />);
    expect(screen.getByText('2/2/2023')).toBeInTheDocument();
    expect(screen.getByText('12:00 AM')).toBeInTheDocument();
  });
});
