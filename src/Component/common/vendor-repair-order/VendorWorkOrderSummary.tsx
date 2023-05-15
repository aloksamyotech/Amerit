import { Box, Typography } from '@mui/material';
import { VendorRepairOrder } from './types';

const VendorWorkOrderSummary = ({
  row: vendorRepairOrder
}: {
  row: VendorRepairOrder;
}) => {
  const { vendorWorkOrderNumber } = vendorRepairOrder;

  return (
    <Box component='p'>
      <Typography
        component='span'
        sx={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {vendorWorkOrderNumber}
      </Typography>
    </Box>
  );
};

export default VendorWorkOrderSummary;
