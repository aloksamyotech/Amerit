import { render, screen } from '@core/test/test-utils';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import VendorRepairOrderList from '../VendorRepairOrderList';

describe('VendorRepairOrderList', () => {
  test('renders the datagrid', async () => {
    render(<VendorRepairOrderList searchResults={MOCK_VENDOR_REPAIR_ORDERS} />);
    expect(screen.getByRole('grid')).toBeInTheDocument();
  });
});
