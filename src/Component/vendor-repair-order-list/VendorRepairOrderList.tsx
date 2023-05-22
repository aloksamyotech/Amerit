import { Box } from '@mui/material';
import DataGrid from '@components/datagrid';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import { Columns } from './Columns';

const VendorRepairOrderList = ({
  searchResults
}: {
  searchResults: VendorRepairOrder[];
}) => {
  return (
    <Box sx={{ paddingBottom: '6px' }}>
      <DataGrid rows={searchResults} columns={Columns} />
    </Box>
  );
};

export default VendorRepairOrderList;
