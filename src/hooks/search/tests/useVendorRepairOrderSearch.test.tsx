import { render, screen, act } from '@core/test/test-utils';
import VendorRepairOrderSearch from './VendorRepairOrderSearch';

jest.mock('src/services/search', () => ({
  search: jest.fn().mockReturnValue(Promise.resolve([{ id: '1' }]))
}));

describe('useVendorRepairOrderSearch', () => {
  test('works as expected', async () => {
    await act(async () => {
      render(<VendorRepairOrderSearch />);
    });
    expect(screen.getByTestId('result')).toHaveTextContent('1');
  });
});
