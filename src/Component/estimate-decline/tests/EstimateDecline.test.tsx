import { render, screen, act } from '@core/test/test-utils';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import EstimateDecline from '../EstimateDecline';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: { vendorRepairOrderId: '1' }
    };
  }
}));

jest.mock('src/services/search', () => ({
  vendorRepairOrder: jest
    .fn()
    .mockReturnValue(Promise.resolve(MOCK_VENDOR_REPAIR_ORDERS[0]))
}));

describe('EstimateDecline', () => {
  test('renders EstimateDecline and RepairJobs', async () => {
    await act(async () => {
      render(<EstimateDecline />);
    });
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByTestId('repair-jobs')).toBeInTheDocument();
  });
});
