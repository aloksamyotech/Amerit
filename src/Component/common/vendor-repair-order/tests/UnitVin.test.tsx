import { render, screen } from '@core/test/test-utils';
import UnitVin from '../UnitVin';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';

describe('UnitVin', () => {
  test('renders correctly', async () => {
    const vendorRepairOrder = MOCK_VENDOR_REPAIR_ORDERS[0];
    render(<UnitVin row={vendorRepairOrder} />);
    expect(screen.getByText(vendorRepairOrder.unit?.vin)).toBeInTheDocument();
  });
});
