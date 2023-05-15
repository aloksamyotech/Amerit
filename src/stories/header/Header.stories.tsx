import { SessionProvider } from 'next-auth/react';
import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_SESSION } from '@core/test/mocks';

import Header from '@components/header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <SessionProvider session={MOCK_SESSION}>
      <Header />
    </SessionProvider>
  )
};
