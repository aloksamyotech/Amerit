import type { Meta, StoryObj } from '@storybook/react';

import LineItemsSummary from '@components/common/line-items-summary/LineItemsSummary';

const meta: Meta<typeof LineItemsSummary> = {
  title: 'Common/Line Items Summary/LineItemsSummary',
  component: LineItemsSummary
};

export default meta;
type Story = StoryObj<typeof LineItemsSummary>;

const summaryProps = {
  labor: 10,
  parts: 0,
  shopSupplies: 0,
  fees: 20,
  sublet: 0,
  freight: 30,
  towing: 0,
  travel: 0,
  sectionTotal: 60
};

export const Alert: Story = {
  render: () => (
    <LineItemsSummary
      availableLineItemTypes={[]}
      vendorEstimateItem={summaryProps}
    />
  )
};
