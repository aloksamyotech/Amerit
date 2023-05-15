import { render, screen } from '@core/test/test-utils';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import ActionButtons from '../ActionButtons';

describe('ActionButtons', () => {
  test('renders two buttons when status is Requested', async () => {
    const requested = {
      ...MOCK_VENDOR_REPAIR_ORDERS[0],
      status: 'Requested'
    };
    render(<ActionButtons row={requested} />);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
  test('renders one button when status is not Requested', async () => {
    render(<ActionButtons row={MOCK_VENDOR_REPAIR_ORDERS[0]} />);
    expect(screen.getAllByRole('button')).toHaveLength(1);
  });
});
