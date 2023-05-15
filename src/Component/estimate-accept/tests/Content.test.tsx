import { render, screen } from '@core/test/test-utils';
import Content from '@components/estimate-accept/Content';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';

const mockVendorRepairOrder = MOCK_VENDOR_REPAIR_ORDERS[0];

describe('Content', () => {
  beforeEach(() => {
    render(<Content vendorRepairOrder={mockVendorRepairOrder} />);
  });
  test('renders the form correctly', async () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(6);
  });
});
