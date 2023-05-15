import type { Meta, StoryObj } from '@storybook/react';

import { UnitVin as UnitVinComponent } from '@components/common/vendor-repair-order';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';

const meta: Meta<typeof UnitVinComponent> = {
  title: 'Common/Vendor Repair Order/UnitVin',
  component: UnitVinComponent
};

export default meta;
type Story = StoryObj<typeof UnitVinComponent>;

const row = MOCK_VENDOR_REPAIR_ORDERS[0];

export const UnitVin: Story = {
  render: () => <UnitVinComponent row={row} />
};
