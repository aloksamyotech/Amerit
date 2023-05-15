import { render, screen } from '@core/test/test-utils';
import Status from '../Status';

describe('Status', () => {
  test('renders correctly', async () => {
    const row = { id: '1', status: 'Status' };
    render(<Status row={row} />);
    expect(screen.getByText(row.status)).toBeInTheDocument();
  });
});
