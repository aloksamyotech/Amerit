import type { Meta, StoryObj } from '@storybook/react';

import { VendorShopSummary } from '@components/common/vendor-repair-order';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';

const meta: Meta<typeof VendorShopSummary> = {
  title: 'Common/Vendor Repair Order/VendorShopSummary',
  component: VendorShopSummary
};

export default meta;
type Story = StoryObj<typeof VendorShopSummary>;

export const Default: Story = {
  render: () => <VendorShopSummary row={MOCK_VENDOR_REPAIR_ORDERS[0]} />
};
