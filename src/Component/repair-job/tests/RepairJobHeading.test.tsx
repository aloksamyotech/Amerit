import { render, screen } from '@core/test/test-utils';
import RepairJobHeading from '../RepairJobHeading';
import { RepairJob } from '@components/common/vendor-repair-order/types';

const count = 1;
const repairJob: RepairJob = {
  id: 1,
  vmrs: '12345',
  complaint: 'complaint',
  repairReason: 'repairReason',
  description: 'description'
};

describe('RepairJobHeading', () => {
  beforeEach(() => {
    render(<RepairJobHeading count={count} repairJob={repairJob} />);
  });
  test('renders correctly', async () => {
    expect(screen.getByText('Job Section: 1')).toBeInTheDocument();
  });
});
