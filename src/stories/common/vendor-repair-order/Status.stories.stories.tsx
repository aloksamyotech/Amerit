import type { Meta, StoryObj } from '@storybook/react';

import { Status as StatusComponent } from '@components/common/vendor-repair-order';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';

const meta: Meta<typeof StatusComponent> = {
  title: 'Common/Vendor Repair Order/Status',
  component: StatusComponent
};

export default meta;
type Story = StoryObj<typeof StatusComponent>;

const row = MOCK_VENDOR_REPAIR_ORDERS[0];

export const Status: Story = {
  render: () => <StatusComponent row={row} />
};
