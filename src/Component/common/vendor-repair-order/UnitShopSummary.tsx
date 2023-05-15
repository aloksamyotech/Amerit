import { Box, Typography } from '@mui/material';
import { TypographySummaryProps } from './types';

const UnitShopSummary = ({
  row: vendorRepairOrder,
  color
}: TypographySummaryProps) => {
  const { shop } = vendorRepairOrder;
  const { name, address } = shop;

  return (
    <Box component='p'>
      <Typography component='span' sx={{ display: 'block ' }} color={color}>
        {name}
      </Typography>
      <Typography component='span' sx={{ display: 'block' }} color={color}>
        {address?.line}
      </Typography>
      <Typography component='span' color={color}>
        {`${address?.city},`}
      </Typography>
      <Typography component='span' color={color}>
        {`${address?.state} ${address?.zip}`}
      </Typography>
    </Box>
  );
};

export default UnitShopSummary;
