import type { Meta, StoryObj } from '@storybook/react';

import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import { VendorWorkOrderSummary as VendorWorkOrderSummaryComponent } from '@components/common/vendor-repair-order';

const meta: Meta<typeof VendorWorkOrderSummaryComponent> = {
  title: 'Common/Vendor Repair Order/VendorWorkOrderSummary',
  component: VendorWorkOrderSummaryComponent
};

export default meta;
type Story = StoryObj<typeof VendorWorkOrderSummaryComponent>;

export const VendorWorkOrderSummary: Story = {
  render: () => (
    <VendorWorkOrderSummaryComponent row={MOCK_VENDOR_REPAIR_ORDERS[0]} />
  )
};
