import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { Controller, useForm } from 'react-hook-form';
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
  Select,
  MenuItem
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import { decline } from 'src/services/estimate-request';
import { EstimateDecline } from './types';
import schema from './schema';
import { VENDOR_REPAIR_ORDER_PAGE } from 'src/constants';

const Content = ({
  vendorRepairOrder
}: {
  vendorRepairOrder: VendorRepairOrder;
}) => {
  const router = useRouter();

  const { id, repairOrderNumber } = vendorRepairOrder;

  const defaultValues: EstimateDecline = {
    code: '0',
    message: ''
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<EstimateDecline>({
    defaultValues,
    resolver: yupResolver(schema)
  });
  const theme = useTheme();

  const { mutateAsync: declineEstimate } = useMutation(
    async (formData: EstimateDecline) => await decline(formData, id)
  );

  const onSubmit = (formData: EstimateDecline) => {
    declineEstimate(formData)
      .then(() => {
        router.push(`/${VENDOR_REPAIR_ORDER_PAGE}/${repairOrderNumber}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid item xs={12}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          sx={{ color: 'black', fontSize: '1em', fontWeight: 600 }}
          variant='h2'
        >
          Decline Estimate Request
        </Typography>
        <Typography sx={{ padding: '20px 0 30px 0' }}>
          Enter the reason you are declining this request and any message for
          your VFM.
        </Typography>
        <Grid container>
          <Grid item container rowSpacing={{ sm: '30px' }} direction={'column'}>
            <Grid item>
              <FormControl>
                <InputLabel
                  required={true}
                  shrink={true}
                  sx={{ position: 'initial', marginLeft: '-12px' }}
                >
                  Reason for declining
                </InputLabel>
                <Controller
                  name='code'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <Select value={value} size='small' onChange={onChange}>
                      <MenuItem value='0' selected>
                        Please choose
                      </MenuItem>
                      <MenuItem value='1'>
                        Option one a very long one indeed
                      </MenuItem>
                      <MenuItem value='2'>Option two</MenuItem>
                      <MenuItem value='3'>Option three</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel
                  shrink={true}
                  sx={{ position: 'initial', marginLeft: '-12px' }}
                >
                  Message for VFM
                </InputLabel>
                <Controller
                  name='message'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <TextField
                      value={value}
                      onChange={onChange}
                      error={Boolean(errors.message)}
                      InputProps={
                        errors.message && {
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
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: `2px solid ${theme.palette.common.black}`
                        }
                      }}
                    />
                  )}
                />
                {errors.message && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.message?.message as string}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item container>
              <Grid item>
                <Button
                  type='submit'
                  color='secondary'
                  variant='contained'
                  size='small'
                >
                  Decline and send
                </Button>
              </Grid>
              <Grid item>
                <NextLink
                  href={`/${VENDOR_REPAIR_ORDER_PAGE}/${repairOrderNumber}`}
                  passHref
                >
                  <Button size='small'>Cancel</Button>
                </NextLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default Content;
