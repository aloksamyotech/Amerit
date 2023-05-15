import { render, screen } from '@core/test/test-utils';
import Link from '../Link';

describe('Link', () => {
  test('renders correctly', async () => {
    render(<Link href='/'>Test link</Link>);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getAllByText('Test link')).toHaveLength(1);
  });
});
