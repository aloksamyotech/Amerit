import { render, screen } from '@core/test/test-utils';
import RepairJobs from '../RepairJobs';

jest.mock('../../../mocks/repair-job', () => ({
  repairJobs: [1, 2, 3].map((id) => ({ id }))
}));

describe('RepairJobs', () => {
  beforeEach(() => {
    render(<RepairJobs />);
  });
  test('renders correctly', async () => {
    expect(screen.getByTestId('repair-jobs')).toBeInTheDocument();
  });
  test('renders the correct number of RepairJobs', async () => {
    expect(screen.getAllByTestId('repairjob')).toHaveLength(3);
  });
});
