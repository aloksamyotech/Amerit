import { Typography } from '@mui/material';
import { VendorRepairOrder } from './types';

const UnitShopSummary = ({
  row: vendorRepairOrder
}: {
  row: VendorRepairOrder;
}) => {
  const { unit } = vendorRepairOrder;

  return (
    <Typography
      component='span'
      sx={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis' }}
    >
      {unit.vin}
    </Typography>
  );
};

export default UnitShopSummary;
