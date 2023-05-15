import { ESTIMATE_ACCEPT_PAGE, ESTIMATE_DECLINE_PAGE } from 'src/constants';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import { LinkButton } from '@components/common/vendor-repair-order';

const EstimateReviewButtons = ({
  vendorRepairOrder
}: {
  vendorRepairOrder: VendorRepairOrder;
}) => (
  <>
    <LinkButton
      href={`${ESTIMATE_ACCEPT_PAGE}/${vendorRepairOrder.repairOrderNumber}`}
      text='Accept'
    />
    {vendorRepairOrder.status === 'Requested' && (
      <LinkButton
        href={`${ESTIMATE_DECLINE_PAGE}/${vendorRepairOrder.repairOrderNumber}`}
        text='Decline'
      />
    )}
  </>
);

export default EstimateReviewButtons;
