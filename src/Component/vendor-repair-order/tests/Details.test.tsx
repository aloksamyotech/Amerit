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
  test('renders Submit and Save buttons when appropriate', async () => {
    render(
      <Details
        vendorRepairOrder={MOCK_VENDOR_REPAIR_ORDERS[0]}
        estimateCreate={true}
      />
    );
    expect(screen.getByText('Submit Estimate')).toBeInTheDocument();
    expect(screen.getByText('Save Changes')).toBeInTheDocument();
  });
  test('renders Accept and Decline buttons when appropriate', async () => {
    const vendorRepairOrder = {
      ...MOCK_VENDOR_REPAIR_ORDERS[0],
      status: 'Requested'
    };
    render(
      <Details vendorRepairOrder={vendorRepairOrder} estimateCreate={false} />
    );
    expect(screen.getByText('Accept')).toBeInTheDocument();
    expect(screen.getByText('Decline')).toBeInTheDocument();
  });
});
