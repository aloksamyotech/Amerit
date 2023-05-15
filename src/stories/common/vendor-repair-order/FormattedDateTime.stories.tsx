import type { Meta, StoryObj } from '@storybook/react';
import { FormattedDateTime as FormattedDateTimeComponent } from '@components/common/vendor-repair-order';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';

const meta: Meta<typeof FormattedDateTimeComponent> = {
  title: 'Common/Vendor Repair Order/FormattedDateTime',
  component: FormattedDateTimeComponent
};

export default meta;
type Story = StoryObj<typeof FormattedDateTimeComponent>;

const vendorRepairOrder = MOCK_VENDOR_REPAIR_ORDERS[0];

export const FormattedDateTime: Story = {
  render: (args) => <FormattedDateTimeComponent {...args} />,
  args: {
    date: vendorRepairOrder.estimateDue,
    direction: 'row'
  }
};
