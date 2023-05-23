import { Dispatch, SetStateAction, useContext } from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { Grid, Typography, Button, Box } from '@mui/material';
import {
  FormattedDateTime,
  VendorShopSummary
} from '@components/common/vendor-repair-order';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import useSummaries from '@hooks/summaries';
import { STATUS_REQUESTED } from 'src/constants';
import { TaxesContext } from './taxes-provider';
import OdoInput from './OdoInput';
import WorkOrderInput from './WorkOrderInput';
import { EMPTY_VALUE } from 'src/constants';
import { EstimateMetadata } from './types';
import { formCaption, formValue } from './styles';

const Content = ({
  vendorRepairOrder,
  control,
  errors,
  setDisplaySummary
}: {
  vendorRepairOrder: VendorRepairOrder;
  control: Control<EstimateMetadata, any>;
  errors: FieldErrors<EstimateMetadata>;
  setDisplaySummary: Dispatch<SetStateAction<boolean>>;
}) => {
  const { status, unit, estimateDue, responseDue, shopAvailable } =
    vendorRepairOrder;
  const { vin, year, make, model, due } = unit;
  const { estimateTaxes } = useContext(TaxesContext);

  const { summary } = useSummaries();

  return (
    <Grid item container xs={12} sx={{ color: 'charcoal.main' }}>
      <Grid item container lg={9} xs={12} order={{ xs: 2, lg: 1 }}>
        <Grid
          item
          container
          columns={20}
          alignItems='center'
          sx={(theme) => ({
            padding: '10px 15px',
            borderRight: `1px solid ${theme.palette.charcoal[200]}`,
            borderBottom: `1px solid ${theme.palette.charcoal[200]}`
          })}
        >
          <Grid item xs={3}>
            <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>
              Order Info
            </Typography>
          </Grid>
          <Grid item container xs={true} alignItems='center'>
            <Grid
              item
              xs={6}
              lg={3}
              sx={{ marginBottom: { xs: '10px', lg: '0' } }}
            >
              <Typography sx={formCaption}>Status</Typography>
              <Typography sx={formValue}>{status}</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              lg={vendorRepairOrder.status !== STATUS_REQUESTED ? 3 : 9}
              sx={{ marginBottom: { xs: '10px', lg: '0' } }}
            >
              <Typography sx={formCaption}>Contact</Typography>
              <Typography sx={formValue}>
                {vendorRepairOrder?.shop?.name ?? EMPTY_VALUE}
              </Typography>
            </Grid>
            {vendorRepairOrder.status !== STATUS_REQUESTED && (
              <>
                <Grid item xs={6} lg={3}>
                  <Typography sx={formCaption}>Estimate Total</Typography>
                  <Button
                    onClick={() => setDisplaySummary(true)}
                    color='secondary'
                    variant='contained'
                    sx={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Typography fontSize='11px' sx={{ fontWeight: 700 }}>
                      ${(summary.sectionTotal + estimateTaxes).toFixed(2)}
                    </Typography>
                    <Typography fontSize='11px'>See Breakdown</Typography>
                  </Button>
                </Grid>
                <Grid item xs={6} lg={3}>
                  <Typography sx={formCaption}>Actual Total</Typography>
                  <Button
                    onClick={() => setDisplaySummary(true)}
                    color='secondary'
                    variant='contained'
                    sx={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* TODO: Replace with actual total once the API is available */}
                    <Typography fontSize='11px' sx={{ fontWeight: 700 }}>
                      $0.00
                    </Typography>
                    <Typography fontSize='11px'>See Breakdown</Typography>
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
        <Grid
          item
          container
          columns={20}
          alignItems='center'
          sx={(theme) => ({
            padding: '10px 15px',
            borderRight: `1px solid ${theme.palette.charcoal[200]}`,
            borderBottom: `1px solid ${theme.palette.charcoal[200]}`
          })}
        >
          <Grid item xs={3}>
            <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>
              Vehicle Info
            </Typography>
          </Grid>
          <Grid item container xs={true} alignItems='center'>
            <Grid
              item
              xs={6}
              lg={3}
              sx={{ marginBottom: { xs: '10px', lg: '0' } }}
            >
              <Typography sx={formValue}>VIN {vin}</Typography>
              <Typography
                sx={formValue}
              >{`${year} ${make}, ${model}`}</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              lg={3}
              sx={{ marginBottom: { xs: '10px', lg: '0' } }}
            >
              <Typography sx={formCaption}>Unit</Typography>
              <Typography sx={formValue}>
                {vendorRepairOrder?.unit?.id ?? EMPTY_VALUE}
              </Typography>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Typography sx={formCaption}>ODO*</Typography>
              {vendorRepairOrder.status !== STATUS_REQUESTED ? (
                <OdoInput control={control} errors={errors} />
              ) : (
                <Typography sx={formValue}>
                  {vendorRepairOrder.odo ?? EMPTY_VALUE}
                </Typography>
              )}
            </Grid>
            <Grid item xs={6} lg={3} sx={{ alignSelf: 'end' }}>
              <Button
                disableElevation={true}
                onClick={() => alert('Measurement placeholder')}
                color='secondary'
                variant='contained'
              >
                Measurement
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          columns={20}
          alignItems='center'
          sx={(theme) => ({
            padding: '10px 15px',
            borderRight: `1px solid ${theme.palette.charcoal[200]}`,
            borderBottom: `1px solid ${theme.palette.charcoal[200]}`
          })}
        >
          <Grid item xs={3}>
            <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>
              Key Dates
            </Typography>
          </Grid>
          <Grid item container xs={true} sx={{ alignItems: 'center' }}>
            <Grid
              item
              xs={6}
              lg={3}
              sx={{ marginBottom: { xs: '10px', lg: '0' } }}
            >
              <Typography sx={formCaption}>Response Due</Typography>
              <FormattedDateTime
                fontSize='14px'
                date={responseDue}
                direction='row'
              />
            </Grid>
            <Grid
              item
              xs={6}
              lg={3}
              sx={{ marginBottom: { xs: '10px', lg: '0' } }}
            >
              <Typography sx={formCaption}>Shop Available</Typography>
              <Typography fontSize='14px'>
                <FormattedDateTime
                  fontSize='14px'
                  date={shopAvailable}
                  direction='row'
                />
              </Typography>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Typography sx={formCaption}>Estimate Due</Typography>
              <FormattedDateTime
                fontSize='14px'
                date={estimateDue}
                direction='row'
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <Typography sx={formCaption}>Unit Due</Typography>
              <FormattedDateTime fontSize='14px' date={due} direction='row' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        lg={3}
        xs={12}
        order={{ xs: 1, lg: 2 }}
        sx={(theme) => ({
          padding: '10px 15px',
          borderBottom: `1px solid ${theme.palette.charcoal[200]}`
        })}
      >
        <Grid item container>
          <Grid item xs={4} lg={12}>
            <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>
              Vendor Info
            </Typography>
            <Box sx={{ marginBottom: { lg: '10px', xs: '0' } }}>
              <VendorShopSummary row={vendorRepairOrder} fontSize='14px' />
            </Box>
          </Grid>
          <Grid item xs={4} lg={12}>
            <Box sx={{ marginBottom: { lg: '10px', xs: '0' } }}>
              <Typography sx={formCaption}>Work Order</Typography>
              {vendorRepairOrder.status !== STATUS_REQUESTED ? (
                <WorkOrderInput control={control} />
              ) : (
                <Typography sx={formValue}>
                  {vendorRepairOrder.vendorWorkOrderNumber ?? EMPTY_VALUE}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={4} lg={12}>
            <Typography sx={formCaption}>Work Invoice</Typography>
            <Typography sx={formValue}>
              {vendorRepairOrder.workInvoiceNumber ?? EMPTY_VALUE}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
