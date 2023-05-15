import { render, screen } from '@core/test/test-utils';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import Details from '../Details';

describe('Details', () => {
  test('renders correctly', async () => {
    render(
      <Details
        vendorRepairOrder={MOCK_VENDOR_REPAIR_ORDERS[0]}
        estimateCreate={true}
      />
    );
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
  test('renders inputs when appropriate', async () => {
    const { rerender } = render(
      <Details
        vendorRepairOrder={MOCK_VENDOR_REPAIR_ORDERS[0]}
        estimateCreate={true}
      />
    );
    expect(screen.queryAllByRole('textbox')).toHaveLength(2);
    rerender(
      <Details
        vendorRepairOrder={MOCK_VENDOR_REPAIR_ORDERS[0]}
        estimateCreate={false}
      />
    );
    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });
  test('renders additional buttons when appropriate', async () => {
    const vendorRepairOrder = {
      ...MOCK_VENDOR_REPAIR_ORDERS[0],
      status: 'Requested'
    };
    const { rerender } = render(
      <Details vendorRepairOrder={vendorRepairOrder} estimateCreate={true} />
    );
    expect(screen.queryAllByRole('button')).toHaveLength(7);
    rerender(
      <Details vendorRepairOrder={vendorRepairOrder} estimateCreate={false} />
    );
    expect(screen.queryAllByRole('button')).toHaveLength(5);
  });
});
