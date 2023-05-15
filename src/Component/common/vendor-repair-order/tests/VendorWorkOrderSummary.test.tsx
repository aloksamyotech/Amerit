import { render, screen } from '@core/test/test-utils';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import VendorWorkOrderSummary from '../VendorWorkOrderSummary';

// TODO: Update this when we have an idea what a Work Order Summary
// is or looks like

describe('VendorWorkOrderSummary', () => {
  test('renders correctly', async () => {
    render(<VendorWorkOrderSummary row={MOCK_VENDOR_REPAIR_ORDERS[0]} />);
    expect(screen.getByText('1234')).toBeInTheDocument();
  });
});
