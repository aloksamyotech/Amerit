import type { Meta, StoryObj } from '@storybook/react';

import { UnitShopSummary as UnitShopSummaryComponent } from '@components/common/vendor-repair-order';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';

const meta: Meta<typeof UnitShopSummaryComponent> = {
  title: 'Common/Vendor Repair Order/UnitShopSummary',
  component: UnitShopSummaryComponent
};

export default meta;
type Story = StoryObj<typeof UnitShopSummaryComponent>;

export const UnitShopSummary: Story = {
  render: () => <UnitShopSummaryComponent row={MOCK_VENDOR_REPAIR_ORDERS[0]} />
};
