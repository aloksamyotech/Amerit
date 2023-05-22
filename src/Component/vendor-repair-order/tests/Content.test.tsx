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
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
  test('renders inputs when appropriate', async () => {
    // Status is "Requested" - we should not display inputs
    const { rerender } = render(
      <Details vendorRepairOrder={vendorRepairOrderRequested} />
    );
    expect(screen.queryAllByRole('textbox')).toHaveLength(0);

    // Status is not "Requested" - we should display inputs
    rerender(<Details vendorRepairOrder={vendorRepairOrderAwaiting} />);
    expect(screen.queryAllByRole('textbox')).toHaveLength(2);
    rerender(<Details vendorRepairOrder={vendorRepairOrderSubmitted} />);
    expect(screen.queryAllByRole('textbox')).toHaveLength(2);
    rerender(<Details vendorRepairOrder={vendorRepairOrderRejected} />);
    expect(screen.queryAllByRole('textbox')).toHaveLength(2);
    rerender(<Details vendorRepairOrder={vendorRepairOrderPending} />);
    expect(screen.queryAllByRole('textbox')).toHaveLength(2);
    rerender(<Details vendorRepairOrder={vendorRepairOrderApproved} />);
    expect(screen.queryAllByRole('textbox')).toHaveLength(2);
  });
  test('renders Accept / Decline buttons when appropriate', async () => {
    const vendorRepairOrder = {
      ...MOCK_VENDOR_REPAIR_ORDERS[0],
      status: STATUS_REQUESTED
    };
    const { rerender } = render(
      <Details vendorRepairOrder={vendorRepairOrder} />
    );
    expect(
      screen.queryByRole('button', { name: 'Accept' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Decline' })
    ).toBeInTheDocument();
    rerender(<Details vendorRepairOrder={MOCK_VENDOR_REPAIR_ORDERS[0]} />);
    expect(
      screen.queryByRole('button', { name: 'Accept' })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Decline' })
    ).not.toBeInTheDocument();
  });
});
