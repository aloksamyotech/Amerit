import { render, screen } from '@core/test/test-utils';
import '@testing-library/jest-dom';

import Layout from '../Layout';

const headingText = 'Testing 123';

describe('Layout', () => {
  test('renders correctly, including children', async () => {
    const { container } = render(
      <Layout>
        <h1>{headingText}</h1>
      </Layout>
    );
    expect(container!.firstElementChild!.classList.contains('MuiDrawer-root'));
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText(headingText)).toBeInTheDocument();
  });
});
