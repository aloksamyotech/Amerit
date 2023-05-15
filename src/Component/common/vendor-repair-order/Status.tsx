import { Box, Typography } from '@mui/material';
import { VendorRepairOrder } from './types';

const Status = ({ row: vendorRepairOrder }: { row: VendorRepairOrder }) => {
  const { status } = vendorRepairOrder;

  return (
    <Box component='p'>
      <Typography component='span'>{status}</Typography>
    </Box>
  );
};

export default Status;
