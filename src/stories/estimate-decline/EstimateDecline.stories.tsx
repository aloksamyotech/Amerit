import type { Meta, StoryObj } from '@storybook/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Details from '@components/estimate-decline/Details';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';

const meta: Meta<typeof Details> = {
  title: 'Estimate Decline/Details',
  component: Details
};

export default meta;
type Story = StoryObj<typeof Details>;

const vendorRepairOrder = MOCK_VENDOR_REPAIR_ORDERS[0];

export const Default: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Details vendorRepairOrder={vendorRepairOrder} />
    </LocalizationProvider>
  )
};
