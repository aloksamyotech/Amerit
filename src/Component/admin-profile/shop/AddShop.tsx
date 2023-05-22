import React from 'react';
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  Container,
  FormHelperText
} from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddCheckbox from './AdditionalServices';
import { yupResolver } from '@hookform/resolvers/yup';
import { Shop as ShopProps } from './shopForm';
import { Controller, useForm } from 'react-hook-form';
import { useProfile } from '../context/ProfileContext';
import { RATES, HOURS_OF_OPERATION, SHOP_INPUT } from 'src/mocks/admin-profile';
import { style } from '../style';
import { theme } from '@core/theme/ThemeProvider';
import { AddShop as AddShopSchema } from './schema';

const AddShop = () => {
  const { addNewShop } = useProfile();

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<ShopProps>({
    resolver: yupResolver(AddShopSchema as any)
  });
  const onSubmit = (data: ShopProps) => {
    addNewShop(false);
    console.log(data);
  };

  return (
    <Container sx={{ bgcolor: 'white' }}>
      <Box className='Box-wrp' sx={{ marginBottom: '25px' }}>
        <Box className='back-blck'>
          <ArrowBackIosIcon
            sx={{
              display: 'inline-block',
              verticalAlign: 'middle',
              cursor: 'pointer'
            }}
            onClick={() => addNewShop(false)}
            role='button'
          />
          <Typography
            variant='h4'
           
          >
            Add a New Shop
          </Typography>
        </Box>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                {SHOP_INPUT.map((item) => (
                  <Grid key={item.id} item xs={item.grid}>
                    <FormControl fullWidth>
                      <Controller
                        name={item.name}
                        control={control}
                        render={({ field: { value, onChange } }: any) => {
                          return item.type ? (
                            <Select
                              name='state'
                              labelId={item.label}
                              variant='outlined'
                              value={value ? value : 'State'}
                              onChange={onChange}
                              SelectDisplayProps={{
                                style: {
                                  border: `1px solid ${theme.palette.grey[100]}`
                                }
                              }}
                            >
                              {item.type.map((state: any) => (
                                <MenuItem
                                  key={state.id}
                                  value={state.value}
                                  disabled={state.disabled}
                                >
                                  {state.label}
                                </MenuItem>
                              ))}
                            </Select>
                          ) : (
                            <TextField
                              sx={style}
                              value={value}
                              onChange={onChange}
                              label={item.label}
                              error={Boolean(errors[item.name])}
                            />
                          );
                        }}
                      />
                      {errors[item.name] && (
                        <FormHelperText error sx={{ ml: 0 }}>
                          {errors[item.name]?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <Box className='back-blck'>
                    <Typography
                      variant='h4'
                    
                     
                    >
                      Hours of Operation
                    </Typography>
                  </Box>
                </Grid>
                {HOURS_OF_OPERATION.dayOfWeek.map((item, index) => (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    container
                    spacing={2}
                    alignItems='center'
                  >
                    <Grid item xs={2}>
                      <Controller
                        name={`hoursOfOperation.${index}.${item}`}
                        control={control}
                        render={({ field: { value, onChange } }: any) => (
                          <FormControlLabel
                            sx={{ pb: '15px' }}
                            control={
                              <Checkbox checked={value} onChange={onChange} />
                            }
                            label={item}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Controller
                        name={`hoursOfOperation.${index}.twentyFourHours`}
                        control={control}
                        render={({ field: { value, onChange } }: any) => (
                          <FormControlLabel
                            sx={{ pb: '15px' }}
                            control={
                              <Checkbox checked={value} onChange={onChange} />
                            }
                            label='24 Hours'
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Controller
                        name={`hoursOfOperation.${index}.starttime`}
                        control={control}
                        render={({ field: { value, onChange } }: any) => (
                          <TimePicker
                            label='Start Time'
                            disabled={!!watch('24hours')}
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Controller
                        name={`hoursOfOperation.${index}.endTime`}
                        control={control}
                        render={({ field: { value, onChange } }: any) => (
                          <TimePicker
                            label='End Time'
                            disabled={!!watch('24hours')}
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Typography
                variant='h4'
              >
                Service and Rates
              </Typography>
              <Grid container spacing={2} sx={{ mt: 3 }}>
                {RATES.services.map((service) => (
                  <>
                    <Grid
                      item
                      xs={4}
                      className='field-block'
                      sx={{
                        display: 'inline-flex',
                        pb: '20px'
                      }}
                    >
                      <FormGroup sx={{ display: 'inline' }}>
                        <Controller
                          name={service}
                          control={control}
                          render={({ field: { value, onChange } }: any) => (
                            <FormControlLabel
                              control={
                                <Checkbox onChange={onChange} checked={value} />
                              }
                              label={service}
                            />
                          )}
                        />
                      </FormGroup>
                      <Controller
                        name='rate'
                        control={control}
                        render={({ field: { value, onChange } }: any) => (
                          <TextField
                            sx={style}
                            value={value}
                            onChange={onChange}
                            label='Rate Per Hour'
                            error={Boolean(errors.StartTime)}
                          />
                        )}
                      />
                    </Grid>
                  </>
                ))}
              </Grid>
              <AddCheckbox />
              <Grid item xs={12} spacing={2} sx={{ mt: 2 }}>
                <Button
                  color='secondary'
                  variant='contained'
                  size='large'
                  type='submit'
                  sx={{ mr: '15px' }}
                >
                  Save Changes
                </Button>
                <Button variant='outlined' size='large'>
                  Cancel
                </Button>
              </Grid>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Container>
  );
};
export default AddShop;
