import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@components/link';
import { VENDOR_REPAIR_ORDER_PAGE } from 'src/constants';
import { VendorRepairOrder } from './types';

const RepairOrderLink = ({
  row: vendorRepairOrder
}: {
  row: VendorRepairOrder;
}) => {
  const { repairOrderNumber } = vendorRepairOrder;

  return (
    <Box component='p'>
      <Typography variant='body2'>
        <Link href={`${VENDOR_REPAIR_ORDER_PAGE}/${repairOrderNumber}`}>
          {repairOrderNumber}
        </Link>
      </Typography>
    </Box>
  );
};

export default RepairOrderLink;
