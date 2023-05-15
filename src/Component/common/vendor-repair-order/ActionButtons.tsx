import { Box } from '@mui/material';
import { LinkButton } from '@components/common/vendor-repair-order';
import { VendorRepairOrder } from './types';
import { ESTIMATE_DECLINE_PAGE, VENDOR_REPAIR_ORDER_PAGE } from 'src/constants';

const ActionButtons = ({
  row: vendorRepairOrder
}: {
  row: VendorRepairOrder;
}) => {
  return (
    <Box sx={{ display: 'flex', gap: '5px' }}>
      <LinkButton
        href={`${VENDOR_REPAIR_ORDER_PAGE}/${vendorRepairOrder.repairOrderNumber}`}
        text='Review'
        sx={{ fontSize: '10px' }}
      />
      {vendorRepairOrder.status === 'Requested' && (
        <LinkButton
          href={`${ESTIMATE_DECLINE_PAGE}/${vendorRepairOrder.repairOrderNumber}`}
          text='Decline'
          sx={{ fontSize: '10px' }}
        />
      )}
    </Box>
  );
};

export default ActionButtons;
