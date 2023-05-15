import type { Meta, StoryObj } from '@storybook/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Details from '@components/estimate-accept/Details';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';

const meta: Meta<typeof Details> = {
  title: 'Estimate Accept/Details',
  component: Details
};

export default meta;
type Story = StoryObj<typeof Details>;

export const Default: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Details vendorRepairOrder={MOCK_VENDOR_REPAIR_ORDERS[0]} />
    </LocalizationProvider>
  )
};
