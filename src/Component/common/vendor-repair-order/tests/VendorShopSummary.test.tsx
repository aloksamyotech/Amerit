import { render, screen } from '@core/test/test-utils';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import VendorShopSummary from '../VendorShopSummary';

describe('VendorShopSummary', () => {
  test('renders correctly', async () => {
    const row = MOCK_VENDOR_REPAIR_ORDERS[0];
    render(<VendorShopSummary row={row} />);
    expect(screen.getByText(row.vendor.address.line)).toBeInTheDocument();
    expect(screen.getByText(`${row.vendor.address.city},`)).toBeInTheDocument();
    expect(
      screen.getByText(`${row.vendor.address.state} ${row.vendor.address.zip}`)
    ).toBeInTheDocument();
    expect(screen.getByText(row.vendor.name)).toBeInTheDocument();
  });
});
