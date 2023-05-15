import type { Meta, StoryObj } from '@storybook/react';

import VendorRepairOrderComponent from '@components/vendor-repair-order';

const meta: Meta<typeof VendorRepairOrderComponent> = {
  title: 'Vendor Repair Order/VendorRepairOrder',
  component: VendorRepairOrderComponent
};

export default meta;
type Story = StoryObj<typeof VendorRepairOrderComponent>;

export const VendorRepairOrder: Story = {
  render: () => <VendorRepairOrderComponent />
};

VendorRepairOrder.parameters = {
  nextRouter: {
    query: { vendorRepairOrderId: '1' }
  }
};
