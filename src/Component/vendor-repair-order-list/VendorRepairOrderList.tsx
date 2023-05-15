import { Box } from '@mui/material';
import DataGrid from '@components/datagrid';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import { columns } from 'src/mocks/vendor-repair-order';

const VendorRepairOrderList = ({
  searchResults
}: {
  searchResults: VendorRepairOrder[];
}) => {
  return (
    <Box sx={{ paddingBottom: '6px' }}>
      <DataGrid rows={searchResults} columns={columns} />
    </Box>
  );
};

export default VendorRepairOrderList;
