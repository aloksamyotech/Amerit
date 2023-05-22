import { Box, Grid, Typography } from '@mui/material';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import Toolbar from '@components/messaging/Toolbar';
import { EMPTY_VALUE } from 'src/constants';

const Header = ({
  vendorRepairOrder
}: {
  vendorRepairOrder: VendorRepairOrder;
}) => {
  return (
    <Grid
      item
      container
      sx={{ alignItems: 'center', marginTop: '15px', marginBottom: '10px' }}
    >
      <Grid item xs={6}>
        <Typography
          variant='h1'
          sx={{ color: 'common.black', fontSize: '1.1em', fontWeight: 600 }}
        >
          <Box component='span'>
            Repair Order {vendorRepairOrder.repairOrderNumber}
          </Box>{' '}
          |{' '}
          <Box
            sx={{
              opacity:
                vendorRepairOrder?.purchaseOrderNumber?.length > 0 ? 1 : 0.3
            }}
            component='span'
          >
            Purchase Order{' '}
            {vendorRepairOrder.purchaseOrderNumber ?? EMPTY_VALUE}
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={5} sx={{ textAlign: 'right' }}>
        <Typography
          variant='h2'
          color='common.black'
          sx={{ fontSize: '1.1em', fontWeight: 600 }}
        >
          Additional Repair Must Be Authorized
        </Typography>
      </Grid>
      <Grid
        item
        xs={1}
        color='common.black'
        sx={{ textAlign: 'right', fontSize: '1.1em', fontWeight: 600 }}
      >
        <Toolbar />
      </Grid>
    </Grid>
  );
};

export default Header;
