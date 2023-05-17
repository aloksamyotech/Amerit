import React, { useState } from 'react';
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
import { StateList } from 'src/constants';
import AddShopSchema from '.';
import { yupResolver } from '@hookform/resolvers/yup';
import { Shop } from './shopForm';
import { Controller, useForm } from 'react-hook-form';
import { useProfile } from '../context/ProfileContext';
import { CheckList, InputList, Rates } from 'src/mocks/admin-profile';
import { style } from '../style';
import { theme } from '@core/theme/ThemeProvider';
const defaultValues: Shop = {
  state: ''
};
const AddShop = () => {
  const { addNewShop, updateTab } = useProfile();

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<Shop>({
    defaultValues,
    resolver: yupResolver(AddShopSchema as any)
  });
  const onSubmit = (data: Shop) => {
    updateTab(0);
    console.log({ data });
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
            sx={{
              display: 'inline-block',
              fontSize: '30px',
              verticalAlign: 'middle'
            }}
          >
            Add a New Shop
          </Typography>
        </Box>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                {InputList.map((item) => (
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
                              value={value === '' ? 'State' : value}
                              onChange={onChange}
                              displayEmpty
                              SelectDisplayProps={{
                                style: {
                                  border: `1px solid ${theme.palette.grey[100]}`
                                }
                              }}
                            >
                              {item.type.map((vendor: any) => (
                                <MenuItem
                                  key={vendor.id}
                                  value={vendor.value}
                                  disabled={vendor.disabled}
                                >
                                  {vendor.label}
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
                      fontWeight='bold'
                      fontSize='18px'
                      sx={{ mt: 2 }}
                    >
                      Hours of Operation
                    </Typography>
                  </Box>
                </Grid>
                {CheckList.dayOfWeek.map((item, index) => (
                  <Grid
                    item
                    key={index}
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
                        name={`hoursOfOperation.${index}.twentyFourHours`}
                        control={control}
                        render={({ field: { value, onChange } }: any) => (
                          <TimePicker
                            slotProps={{
                              textField: {
                                sx: {
                                  '& .MuiOutlinedInput-notchedOutline': {
                                    border: `2px solid ${theme.palette.common.black}`
                                  },
                                  width: '100%'
                                }
                              }
                            }}
                            disabled={
                              !!watch(
                                `hoursOfOperation.${index}.twentyFourHours`
                              )
                            }
                            value={value}
                            onChange={(newValue) => onChange(newValue)}
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
                            slotProps={{
                              textField: {
                                sx: {
                                  '& .MuiOutlinedInput-notchedOutline': {
                                    border: `2px solid ${theme.palette.common.black}`
                                  },
                                  width: '100%'
                                }
                              }
                            }}
                            disabled={
                              !!watch(
                                `hoursOfOperation.${index}.twentyFourHours`
                              )
                            }
                            value={value}
                            onChange={(newValue) => onChange(newValue)}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Typography
                variant='h4'
                sx={{ fontWeight: 'bold', fontSize: '18px' }}
              >
                Service and Rates
              </Typography>
              <Grid container sx={{ mt: 3 }}>
                {Rates.services.map((service) => (
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
                              control={<Checkbox onChange={onChange} />}
                              label={service}
                              value={value}
                            />
                          )}
                        />
                      </FormGroup>
                      <Controller
                        name='Rate per Hour'
                        control={control}
                        render={({ field: { value, onChange } }: any) => (
                          <TextField
                            type='text'
                            value={value}
                            onChange={onChange}
                            placeholder='Rate Per Hour'
                            error={Boolean(errors.StartTime)}
                          />
                        )}
                      />
                    </Grid>
                  </>
                ))}
              </Grid>
              <AddCheckbox />
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Button
                  color='secondary'
                  variant='contained'
                  size='large'
                  sx={{ mr: 1 }}
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
