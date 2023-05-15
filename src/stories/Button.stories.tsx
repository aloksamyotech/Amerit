import type { Meta, StoryObj } from '@storybook/react';
import { Button as ButtonComponent } from './Button';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  render: (props) => <ButtonComponent {...props} />,
  args: {
    label: 'Button'
  }
};
