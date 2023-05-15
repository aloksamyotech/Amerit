import type { Meta, StoryObj } from '@storybook/react';

import { HighPriorityBanner } from '@components/common/vendor-repair-order';

const meta: Meta<typeof HighPriorityBanner> = {
  title: 'Common/HighPriorityBanner',
  component: HighPriorityBanner
};

export default meta;
type Story = StoryObj<typeof HighPriorityBanner>;

export const Default: Story = {
  render: () => <HighPriorityBanner />
};
