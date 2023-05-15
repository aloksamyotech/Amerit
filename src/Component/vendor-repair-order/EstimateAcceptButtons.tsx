import { Button } from '@mui/material';
import { EstimateAcceptButtonType } from './types';

const EstimateAcceptButtons = ({
  isDirty,
  isSaved
}: EstimateAcceptButtonType) => (
  <>
    <Button
      type='submit'
      disabled={!isSaved}
      color='secondary'
      variant='contained'
      size='small'
    >
      Submit Estimate
    </Button>
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

export default EstimateAcceptButtons;
