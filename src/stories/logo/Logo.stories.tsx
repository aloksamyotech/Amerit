import type { Meta, StoryObj } from '@storybook/react';

import Logo from '@components/logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  render: (args) => <Logo {...args} />,
  args: {
    width: 130,
    height: 45
  }
};
