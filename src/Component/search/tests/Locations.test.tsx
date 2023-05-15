import { render, screen } from '@core/test/test-utils';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import Locations from '../Locations';

describe('Locations', () => {
  test('renders correctly', async () => {
    render(
      <Locations
        searchResults={MOCK_VENDOR_REPAIR_ORDERS}
        value={''}
        onChange={jest.fn}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
