import { Box } from '@mui/material';
import {
  DataGrid as MuiDataGrid,
  GridColDef,
  GridRowsProp
} from '@mui/x-data-grid';
import { TABLE_DEFAULT_PER_PAGE, TABLE_PAGE_SIZE_OPTIONS } from 'src/constants';
import Pagination from './Pagination';

const DataGrid = ({
  columns,
  rows
}: {
  columns: GridColDef[];
  rows: GridRowsProp;
}) => {
  return (
    <Box>
      <MuiDataGrid
        sx={{
          fontSize: '12px',
          '& .MuiTypography-root': {
            fontSize: '12px'
          },
          '& .MuiDataGrid-virtualScroller': {
            overflow: 'hidden'
          }
        }}
        getRowHeight={() => 'auto'}
        autoHeight
        rows={rows}
        columns={columns}
        slots={{
          pagination: Pagination
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: TABLE_DEFAULT_PER_PAGE
            }
          }
        }}
        pageSizeOptions={TABLE_PAGE_SIZE_OPTIONS}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
      />
    </Box>
  );
};

export default DataGrid;
