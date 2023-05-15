import { Grid, Typography } from '@mui/material';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';

const Header = ({
  vendorRepairOrder
}: {
  vendorRepairOrder: VendorRepairOrder;
}) => (
  <Grid
    item
    container
    sx={{ alignItems: 'center', marginTop: '15px', marginBottom: '10px' }}
  >
    <Grid item xs={6}>
      <Typography
        variant='h1'
        sx={{ color: 'charcoal.main', fontSize: '1.1em', fontWeight: 600 }}
      >
        Repair Order {vendorRepairOrder.repairOrderNumber} | Purchase Order XXXX
      </Typography>
    </Grid>
    <Grid item xs={6} sx={{ textAlign: 'right' }}>
      <Typography
        variant='h2'
        color='charcoal.main'
        sx={{ fontSize: '1.1em', fontWeight: 600 }}
      >
        Additional Repair Must Be Authorized
      </Typography>
    </Grid>
  </Grid>
);

export default Header;
