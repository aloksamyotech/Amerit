import type { Meta, StoryObj } from '@storybook/react';

import { RepairOrderLink as RepairOrderLinkComponent } from '@components/common/vendor-repair-order';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';

const meta: Meta<typeof RepairOrderLinkComponent> = {
  title: 'Common/Vendor Repair Order/RepairOrderLink',
  component: RepairOrderLinkComponent
};

export default meta;
type Story = StoryObj<typeof RepairOrderLinkComponent>;

const row = MOCK_VENDOR_REPAIR_ORDERS[0];
export const RepairOrderLink: Story = {
  render: () => <RepairOrderLinkComponent row={row} />
};
