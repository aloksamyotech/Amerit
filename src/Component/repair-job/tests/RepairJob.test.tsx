import { render, screen } from '@core/test/test-utils';
import RepairJob from '../RepairJob';

const repairJob = {
  id: 1,
  vmrs: '013-010-001 Brake System - Full Air',
  complaint: 'Lorem ipsum dolor sit amet',
  repairReason: 'Lorem ipsum dolor sit amet',
  description: 'Lorem ipsum dolor sit amet'
};

const handleExpandedChange = jest.fn();
const expanded: Set<number> = new Set();

describe('RepairJob', () => {
  beforeEach(() => {
    render(
      <RepairJob
        repairJob={repairJob}
        count={1}
        expanded={expanded}
        handleExpandedChange={handleExpandedChange}
      />
    );
  });
  test('renders correctly', async () => {
    expect(screen.getByTestId('repairjob')).toBeInTheDocument();
  });
});
