import type { Meta, StoryObj } from '@storybook/react';
import { Typography as TypographyComponent } from './Typography';

const meta: Meta<typeof TypographyComponent> = {
  title: 'Typography',
  component: TypographyComponent
};

export default meta;
type Story = StoryObj<typeof TypographyComponent>;

export const Typography: Story = {
  render: (props) => <TypographyComponent {...props} />,
  args: {
    label: 'Typography'
  }
};
