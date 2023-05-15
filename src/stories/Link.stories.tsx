import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: (props) => <Link {...props} />,
  args: {
    label: 'My link text',
    href: '/page'
  }
};
