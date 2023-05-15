import type { Meta, StoryObj } from '@storybook/react';
import VendorRepairOrderList from '@components/vendor-repair-order-list';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';

const meta: Meta<typeof VendorRepairOrderList> = {
  title: 'Components/VendorRepairOrderList',
  component: VendorRepairOrderList
};

export default meta;
type Story = StoryObj<typeof VendorRepairOrderList>;

export const Default: Story = {
  render: () => (
    <VendorRepairOrderList searchResults={MOCK_VENDOR_REPAIR_ORDERS} />
  )
};
