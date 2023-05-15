import type { Meta, StoryObj } from '@storybook/react';

import AlertComponent from '@components/alert';

const meta: Meta<typeof AlertComponent> = {
  title: 'Common/Vendor Repair Order/Alert',
  component: AlertComponent
};

export default meta;
type Story = StoryObj<typeof AlertComponent>;

export const Alert: Story = {
  render: () => <AlertComponent />
};
