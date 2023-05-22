import { useMutation, useQueryClient } from 'react-query';
import { Button } from '@mui/material';
import { submitEstimate } from 'src/services/estimate';
import {
  STATUS_AWAITING_ESTIMATE,
  STATUS_ESTIMATE_REJECTED
} from 'src/constants';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import { EstimateAcceptButtonType } from './types';

const EstimateAcceptButtons = ({
  isDirty,
  isSaved,
  vendorRepairOrder
}: EstimateAcceptButtonType) => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation((vendorRepairOrder: VendorRepairOrder) =>
    submitEstimate(vendorRepairOrder)
  );

  // TODO: I'm not sure at this stage what is being submitted, is it the
  // repair order or an estimate? Whatever it is, the repair order will need
  // refreshing once the submission is successful to reflect the new status
  const doSubmitEstimate = () => {
    mutateAsync(vendorRepairOrder)
      .then(() => {
        // Mark the current repair order as stale
        queryClient.invalidateQueries({
          queryKey: ['vendorRepairOrder', vendorRepairOrder.id]
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {[STATUS_AWAITING_ESTIMATE, STATUS_ESTIMATE_REJECTED].includes(
        vendorRepairOrder.status
      ) && (
        <Button
          onClick={doSubmitEstimate}
          type='button'
          disabled={!isSaved}
          color='secondary'
          variant='contained'
          size='small'
        >
          Submit Estimate
        </Button>
      )}
      <Button
        type='submit'
        disabled={!isDirty || isSaved}
        color='secondary'
        variant='contained'
        size='small'
      >
        Save Changes
      </Button>
    </>
  );
};

export default EstimateAcceptButtons;
