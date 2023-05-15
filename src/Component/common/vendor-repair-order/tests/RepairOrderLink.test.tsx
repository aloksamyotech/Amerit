import { render, screen } from '@core/test/test-utils';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import RepairOrderLink from '../RepairOrderLink';

describe('RepairOrderLink', () => {
  test('renders correctly', async () => {
    const vendorRepairOrder = MOCK_VENDOR_REPAIR_ORDERS[0];
    if (vendorRepairOrder.repairOrderNumber) {
      render(<RepairOrderLink row={vendorRepairOrder} />);
      expect(screen.getByRole('link')).toHaveTextContent(
        vendorRepairOrder.repairOrderNumber
      );
    }
  });
});
