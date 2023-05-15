import React from 'react';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import DataGridComponent from '../Component/datagrid';

export const DataGrid = ({
  columns,
  rows
}: {
  columns: GridColDef[];
  rows: GridRowsProp;
}) => <DataGridComponent columns={columns} rows={rows} />;
