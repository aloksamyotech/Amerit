import type { Meta, StoryObj } from '@storybook/react';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { DataGrid } from './DataGrid';

const meta: Meta<typeof DataGrid> = {
  title: 'Components/DataGrid',
  component: DataGrid
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

const columns: GridColDef[] = [
  {
    field: 'col1',
    headerName: 'Column 1',
    sortable: false
  },
  {
    field: 'col2',
    headerName: 'Column 2',
    sortable: false
  },
  {
    field: 'col3',
    headerName: 'Column 3',
    sortable: false
  }
].map((column) => ({ ...column, flex: 1, headerAlign: 'center' }));

const rows: GridRowsProp = [
  {
    id: 1,
    col1: 'Data one',
    col2: 'Data two',
    col3: 'Data three'
  },
  {
    id: 2,
    col1: 'Data one',
    col2: 'Data two',
    col3: 'Data three'
  }
];

export const WithData: Story = {
  render: (props) => <DataGrid {...props} />,
  args: {
    rows,
    columns
  }
};

export const Default: Story = {
  render: (props) => <DataGrid {...props} />,
  args: {
    rows: [],
    columns
  }
};
