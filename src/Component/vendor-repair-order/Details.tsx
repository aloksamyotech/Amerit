import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  useTheme
} from '@mui/material';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VendorRepairOrder as VendorRepairOrderForm } from './types';
import Content from './Content';
import EstimateReviewButtons from './EstimateReviewButtons';
import EstimateAcceptButtons from './EstimateAcceptButtons';
import { CONTAINER_BORDER_RADIUS } from 'src/constants';
import { schema } from './schema';
import Summaries from './Summaries';

const Details = ({
  vendorRepairOrder,
  estimateCreate
}: {
  vendorRepairOrder: VendorRepairOrder;
  estimateCreate: boolean;
}) => {
  const [formData, setFormData] = useState<VendorRepairOrderForm>();
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [displaySummary, setDisplaySummary] = useState<boolean>(true);

  const theme = useTheme();

  // TODO: These default values should come from the API
  const defaultValues: VendorRepairOrderForm = {
    odo: '123456',
    workOrder: 'AK415732'
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty }
  } = useForm<VendorRepairOrderForm>({
    defaultValues,
    resolver: yupResolver(schema as any)
  });

  // TODO: Once we know what consitutes a "submit" (button click
  // or debounced onChange) we can do the submit, validation and
  // API call
  const onSubmit = (data: VendorRepairOrderForm) => {
    setFormData({
      ...data
    });
    console.log(formData);

    // What we do depends on what our state is
    if (isSaved) {
      // We're submitting the estimate
      // TODO: Mock promise for now...
      Promise.resolve().finally(() => {
        setIsSaved(false);
      });
    } else {
      // We're saving changes
      // TODO: Mock promise for now
      Promise.resolve().finally(() => {
        setIsSaved(true);
      });
    }
  };

  return (
    <section aria-labelledby='card-header'>
      <Card
        elevation={6}
        sx={(theme) => ({
          border: `1px solid ${theme.palette.coolGrey.main}`,
          borderRadius: `${CONTAINER_BORDER_RADIUS}px`
        })}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent sx={{ padding: 0 }}>
            <Content
              vendorRepairOrder={vendorRepairOrder}
              estimateCreate={estimateCreate}
              control={control}
              errors={errors}
            />
          </CardContent>
          <CardActions sx={{ padding: '15px', display: 'flex', gap: '10px' }}>
            {estimateCreate ? (
              <EstimateAcceptButtons isDirty={isDirty} isSaved={isSaved} />
            ) : (
              <EstimateReviewButtons vendorRepairOrder={vendorRepairOrder} />
            )}
            {vendorRepairOrder.status === 'Pending Approval' && (
              <Button
                onClick={() => alert('Reopen estimate placeholder')}
                color='secondary'
                variant='contained'
                size='small'
              >
                Reopen Estimate
              </Button>
            )}
            <Button
              onClick={() => alert('Cancel placeholder')}
              variant='text'
              size='small'
            >
              Cancel
            </Button>
          </CardActions>
          {displaySummary && (
            <CardContent
              sx={{
                padding: 0,
                borderTop: `1px solid ${theme.palette.charcoal[200]}`
              }}
            >
              <Grid container>
                <Grid item textAlign='right' xs={12}>
                  <Button
                    variant='text'
                    onClick={() => setDisplaySummary(false)}
                    sx={{ padding: '5px 10px 0 0', minWidth: '20px' }}
                  >
                    <FontAwesomeIcon
                      title='Close summary'
                      icon={'xmark'}
                      color={theme.palette.common.black}
                      size='2x'
                    />
                  </Button>
                </Grid>
                <Grid
                  container
                  item
                  justifyContent={'center'}
                  xs={12}
                  sx={{
                    padding: '0 15px'
                  }}
                >
                  <Summaries />
                </Grid>
              </Grid>
            </CardContent>
          )}
        </form>
      </Card>
    </section>
  );
};

export default Details;
