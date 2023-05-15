import { render, screen } from '@core/test/test-utils';
import DataGrid from '../DataGrid';

describe('DataGrid', () => {
  test('renders correctly', async () => {
    render(<DataGrid columns={[]} rows={[]} />);
    expect(screen.getByRole('grid')).toBeInTheDocument();
  });
});
