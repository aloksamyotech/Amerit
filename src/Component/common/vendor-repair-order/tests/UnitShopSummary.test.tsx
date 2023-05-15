import { render, screen } from '@core/test/test-utils';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import UnitShopSummary from '../UnitShopSummary';

describe('UnitShopSummary', () => {
  test('renders correctly', async () => {
    const row = MOCK_VENDOR_REPAIR_ORDERS[0];
    render(<UnitShopSummary row={row} />);
    expect(screen.getByText(row.shop.name)).toBeInTheDocument();
    expect(screen.getByText(row.shop.address.line)).toBeInTheDocument();
    expect(screen.getByText(`${row.shop.address.city},`)).toBeInTheDocument();
    expect(
      screen.getByText(`${row.shop.address.state} ${row.shop.address.zip}`)
    ).toBeInTheDocument();
  });
});
