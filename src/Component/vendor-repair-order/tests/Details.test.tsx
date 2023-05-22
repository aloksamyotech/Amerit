import { render, screen } from '@core/test/test-utils';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import {
  STATUS_AWAITING_ESTIMATE,
  STATUS_ESTIMATE_APPROVED,
  STATUS_ESTIMATE_REJECTED,
  STATUS_ESTIMATE_SUBMITTED,
  STATUS_PENDING_APPROVAL,
  STATUS_REQUESTED
} from 'src/constants';
import Details from '../Details';

const vendorRepairOrderRequested = {
  ...MOCK_VENDOR_REPAIR_ORDERS[0],
  status: STATUS_REQUESTED
};
const vendorRepairOrderAwaiting = {
  ...MOCK_VENDOR_REPAIR_ORDERS[0],
  status: STATUS_AWAITING_ESTIMATE
};
const vendorRepairOrderSubmitted = {
  ...MOCK_VENDOR_REPAIR_ORDERS[0],
  status: STATUS_ESTIMATE_SUBMITTED
};
const vendorRepairOrderRejected = {
  ...MOCK_VENDOR_REPAIR_ORDERS[0],
  status: STATUS_ESTIMATE_REJECTED
};
const vendorRepairOrderPending = {
  ...MOCK_VENDOR_REPAIR_ORDERS[0],
  status: STATUS_PENDING_APPROVAL
};
const vendorRepairOrderApproved = {
  ...MOCK_VENDOR_REPAIR_ORDERS[0],
  status: STATUS_ESTIMATE_APPROVED
};

describe('Details', () => {
  test('renders correctly', async () => {
    render(<Details vendorRepairOrder={MOCK_VENDOR_REPAIR_ORDERS[0]} />);
    expect(screen.queryAllByRole('region')).toHaveLength(1);
  });
  test('renders Reopen Estimate button when appropriate', async () => {
    const { rerender } = render(
      <Details vendorRepairOrder={vendorRepairOrderRequested} />
    );
    expect(
      screen.queryAllByRole('button', { name: 'Reopen Estimate' })
    ).toHaveLength(0);
    rerender(<Details vendorRepairOrder={vendorRepairOrderAwaiting} />);
    expect(
      screen.queryAllByRole('button', { name: 'Reopen Estimate' })
    ).toHaveLength(0);
    rerender(<Details vendorRepairOrder={vendorRepairOrderSubmitted} />);
    expect(
      screen.queryAllByRole('button', { name: 'Reopen Estimate' })
    ).toHaveLength(0);
    rerender(<Details vendorRepairOrder={vendorRepairOrderRejected} />);
    expect(
      screen.queryAllByRole('button', { name: 'Reopen Estimate' })
    ).toHaveLength(0);
    rerender(<Details vendorRepairOrder={vendorRepairOrderPending} />);
    expect(
      screen.queryAllByRole('button', { name: 'Reopen Estimate' })
    ).toHaveLength(0);
    rerender(<Details vendorRepairOrder={vendorRepairOrderApproved} />);
    expect(
      screen.queryAllByRole('button', { name: 'Reopen Estimate' })
    ).toHaveLength(1);
  });
  test('renders Accept & Decline button when appropriate', async () => {
    const { rerender } = render(
      <Details vendorRepairOrder={vendorRepairOrderRequested} />
    );
    expect(screen.queryAllByRole('button', { name: 'Accept' })).toHaveLength(1);
    expect(screen.queryAllByRole('button', { name: 'Decline' })).toHaveLength(
      1
    );
    rerender(<Details vendorRepairOrder={vendorRepairOrderAwaiting} />);
    expect(screen.queryAllByRole('button', { name: 'Accept' })).toHaveLength(0);
    expect(screen.queryAllByRole('button', { name: 'Decline' })).toHaveLength(
      0
    );
    rerender(<Details vendorRepairOrder={vendorRepairOrderSubmitted} />);
    expect(screen.queryAllByRole('button', { name: 'Accept' })).toHaveLength(0);
    expect(screen.queryAllByRole('button', { name: 'Decline' })).toHaveLength(
      0
    );
    rerender(<Details vendorRepairOrder={vendorRepairOrderRejected} />);
    expect(screen.queryAllByRole('button', { name: 'Accept' })).toHaveLength(0);
    expect(screen.queryAllByRole('button', { name: 'Decline' })).toHaveLength(
      0
    );
    rerender(<Details vendorRepairOrder={vendorRepairOrderPending} />);
    expect(screen.queryAllByRole('button', { name: 'Accept' })).toHaveLength(0);
    expect(screen.queryAllByRole('button', { name: 'Decline' })).toHaveLength(
      0
    );
    rerender(<Details vendorRepairOrder={vendorRepairOrderApproved} />);
    expect(screen.queryAllByRole('button', { name: 'Accept' })).toHaveLength(0);
    expect(screen.queryAllByRole('button', { name: 'Decline' })).toHaveLength(
      0
    );
  });
  test('renders Accept & Decline button when appropriate', async () => {
    render(<Details vendorRepairOrder={vendorRepairOrderRequested} />);
    expect(screen.queryAllByRole('button', { name: 'Accept' })).toHaveLength(1);
    expect(screen.queryAllByRole('button', { name: 'Decline' })).toHaveLength(
      1
    );
  });
  test('renders Save Changes button when appropriate', async () => {
    const { rerender } = render(
      <Details vendorRepairOrder={vendorRepairOrderRequested} />
    );
    expect(
      screen.queryAllByRole('button', { name: 'Save Changes' })
    ).toHaveLength(0);
    rerender(<Details vendorRepairOrder={vendorRepairOrderAwaiting} />);
    expect(
      screen.queryAllByRole('button', { name: 'Save Changes' })
    ).toHaveLength(1);
    rerender(<Details vendorRepairOrder={vendorRepairOrderSubmitted} />);
    expect(
      screen.queryAllByRole('button', { name: 'Save Changes' })
    ).toHaveLength(1);
    rerender(<Details vendorRepairOrder={vendorRepairOrderRejected} />);
    expect(
      screen.queryAllByRole('button', { name: 'Save Changes' })
    ).toHaveLength(1);
    rerender(<Details vendorRepairOrder={vendorRepairOrderPending} />);
    expect(
      screen.queryAllByRole('button', { name: 'Save Changes' })
    ).toHaveLength(1);
    rerender(<Details vendorRepairOrder={vendorRepairOrderApproved} />);
    expect(
      screen.queryAllByRole('button', { name: 'Save Changes' })
    ).toHaveLength(1);
  });
  test('renders Submit Estimate button when appropriate', async () => {
    const { rerender } = render(
      <Details vendorRepairOrder={vendorRepairOrderRequested} />
    );
    expect(
      screen.queryAllByRole('button', { name: 'Submit Estimate' })
    ).toHaveLength(0);
    rerender(<Details vendorRepairOrder={vendorRepairOrderAwaiting} />);
    expect(
      screen.queryAllByRole('button', { name: 'Submit Estimate' })
    ).toHaveLength(1);
    rerender(<Details vendorRepairOrder={vendorRepairOrderSubmitted} />);
    expect(
      screen.queryAllByRole('button', { name: 'Submit Estimate' })
    ).toHaveLength(0);
    rerender(<Details vendorRepairOrder={vendorRepairOrderRejected} />);
    expect(
      screen.queryAllByRole('button', { name: 'Submit Estimate' })
    ).toHaveLength(1);
    rerender(<Details vendorRepairOrder={vendorRepairOrderPending} />);
    expect(
      screen.queryAllByRole('button', { name: 'Submit Estimate' })
    ).toHaveLength(0);
    rerender(<Details vendorRepairOrder={vendorRepairOrderApproved} />);
    expect(
      screen.queryAllByRole('button', { name: 'Submit Estimate' })
    ).toHaveLength(0);
  });
});
