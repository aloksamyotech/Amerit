import { Box, Typography } from '@mui/material';
import { TypographyVendorShopSummary } from './types';

const VendorShopSummary = ({
  row: vendorRepairOrder,
  ...typographyProps
}: TypographyVendorShopSummary) => {
  const { vendor } = vendorRepairOrder;
  const { name, address } = vendor;

  return (
    <Box component='p'>
      <Typography
        component='span'
        sx={{ display: 'block' }}
        {...typographyProps}
      >
        {name}
      </Typography>
      <Typography
        component='span'
        sx={{ display: 'block' }}
        {...typographyProps}
      >
        {address.line}
      </Typography>
      <Typography
        component='span'
        sx={{ display: 'block' }}
        {...typographyProps}
      >
        {address.city},
      </Typography>
      <Typography component='span' {...typographyProps}>
        {`${address.state} ${address.zip}`}
      </Typography>
    </Box>
  );
};

export default VendorShopSummary;
