import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  FormHelperText,
  Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import schema from './schema';
import { EstimateAccept } from './types';
import { VENDOR_REPAIR_ORDER_PAGE } from 'src/constants';

const Content = ({
  vendorRepairOrder
}: {
  vendorRepairOrder: VendorRepairOrder;
}) => {
  const { shop } = vendorRepairOrder;

  const defaultValues: EstimateAccept = {
    vendorWorkOrder: '',
    vendorShop: shop.name,
    availableDate: new Date(),
    availableTimeFrom: new Date(),
    availableTimeTo: new Date(),
    vendorFleetManagerMessage: ''
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<EstimateAccept>({ defaultValues, resolver: yupResolver(schema) });
  const theme = useTheme();

  const onSubmit = (data: EstimateAccept) => console.log(data);

  return (
    <Grid item xs={12}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          sx={{ color: 'black', fontSize: '1em', fontWeight: 600 }}
          variant='h2'
        >
          Accept Estimate Request
        </Typography>
        <Typography sx={{ padding: '20px 0 40px 0' }}>
          Enter the Shop/Location that will do the work, the available date and
          time, and your work order number.
        </Typography>
        <Grid container rowSpacing={'40px'}>
          <Grid
            item
            container
            columnSpacing={'20px'}
            rowSpacing={{ sm: '40px' }}
          >
            <Grid item sm={12} lg={3}>
              <FormControl fullWidth>
                <InputLabel
                  required={true}
                  shrink={true}
                  sx={{ position: 'initial', marginLeft: '-12px' }}
                >
                  Vendor Shop
                </InputLabel>
                <Controller
                  name='vendorShop'
                  control={control}
                  render={({ field: { value } }: any) => (
                    <TextField
                      value={value}
                      disabled
                      fullWidth
                      size='small'
                      placeholder='Vendor Shop'
                      sx={{
                        '& .MuiInputBase-input.Mui-disabled': {
                          WebkitTextFillColor: theme.palette.charcoal.main
                        }
                      }}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item sm={12} lg={2}>
              <FormControl fullWidth>
                <InputLabel
                  required={true}
                  shrink={true}
                  sx={{ position: 'initial', marginLeft: '-12px' }}
                >
                  Date
                </InputLabel>
                <Controller
                  name='availableDate'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <DatePicker
                      slotProps={{
                        textField: {
                          size: 'small',
                          sx: {
                            '& .MuiOutlinedInput-notchedOutline': {
                              border: `2px solid ${theme.palette.common.black}`
                            }
                          }
                        }
                      }}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                {errors.availableDate && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.availableDate?.message as string}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item sm={12} lg={2}>
              <FormControl fullWidth>
                <InputLabel
                  required={true}
                  shrink={true}
                  sx={{ position: 'initial', marginLeft: '-12px' }}
                >
                  Time from
                </InputLabel>
                <Controller
                  name='availableTimeFrom'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <TimePicker
                      slotProps={{
                        textField: {
                          size: 'small',
                          sx: {
                            '& .MuiOutlinedInput-notchedOutline': {
                              border: `2px solid ${theme.palette.common.black}`
                            }
                          }
                        }
                      }}
                      value={value}
                      onChange={(newValue) => onChange(newValue)}
                    />
                  )}
                />
                {errors.availableTimeFrom && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.availableTimeFrom?.message as string}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item sm={12} lg={2}>
              <FormControl fullWidth>
                <InputLabel
                  required={true}
                  shrink={true}
                  sx={{ position: 'initial', marginLeft: '-12px' }}
                >
                  Time to
                </InputLabel>
                <Controller
                  name='availableTimeTo'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <TimePicker
                      slotProps={{
                        textField: {
                          size: 'small',
                          sx: {
                            '& .MuiOutlinedInput-notchedOutline': {
                              border: `2px solid ${theme.palette.common.black}`
                            }
                          }
                        }
                      }}
                      value={value}
                      onChange={(newValue) => onChange(newValue)}
                    />
                  )}
                />
                {errors.availableTimeTo && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.availableTimeTo?.message as string}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item sm={12} lg={3}>
              <FormControl fullWidth>
                <InputLabel
                  shrink={true}
                  sx={{ position: 'initial', marginLeft: '-12px' }}
                >
                  Vendor Work Nbr
                </InputLabel>
                <Controller
                  name='vendorWorkOrder'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <TextField
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: `2px solid ${theme.palette.common.black}`
                        }
                      }}
                      value={value}
                      onChange={onChange}
                      error={Boolean(errors.vendorWorkOrder)}
                      InputProps={
                        errors.vendorWorkOrder && {
                          endAdornment: (
                            <FontAwesomeIcon
                              title='Alert'
                              icon={'exclamation-circle'}
                              color={theme.palette.error.main}
                            />
                          )
                        }
                      }
                      fullWidth
                      size='small'
                      placeholder='Vendor Work Order'
                    />
                  )}
                />
                {errors.vendorWorkOrder && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.vendorWorkOrder?.message as string}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid
              item
              sx={{
                width: {
                  lg: '66%',
                  sm: '100%'
                }
              }}
            >
              <FormControl fullWidth>
                <InputLabel
                  shrink={true}
                  sx={{ position: 'initial', marginLeft: '-12px' }}
                >
                  Message for VFM
                </InputLabel>
                <Controller
                  name='vendorFleetManagerMessage'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <TextField
                      value={value}
                      onChange={onChange}
                      error={Boolean(errors.vendorFleetManagerMessage)}
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: `2px solid ${theme.palette.common.black}`
                        }
                      }}
                      InputProps={
                        errors.vendorFleetManagerMessage && {
                          endAdornment: (
                            <FontAwesomeIcon
                              title='Alert'
                              icon={'exclamation-circle'}
                              color={theme.palette.error.main}
                            />
                          )
                        }
                      }
                      fullWidth
                      size='small'
                      placeholder='Message for VFM'
                      multiline
                      rows={4}
                    />
                  )}
                />
                {errors.vendorFleetManagerMessage && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.vendorFleetManagerMessage?.message as string}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container gap='20px' sx={{ paddingTop: '40px' }}>
          <Button
            type='submit'
            color='secondary'
            variant='contained'
            onClick={() => alert('Accept and send placeholder')}
          >
            Accept and send
          </Button>
          <Link href={`/${VENDOR_REPAIR_ORDER_PAGE}/${vendorRepairOrder.id}`}>
            <Button>Cancel</Button>
          </Link>
        </Grid>
      </form>
    </Grid>
  );
};

export default Content;
