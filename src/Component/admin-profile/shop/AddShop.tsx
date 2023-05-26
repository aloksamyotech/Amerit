import React, { useState } from 'react';
import { useQuery } from 'react-query';
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
import { AddNewShop as AddShopSchema } from './schema';

import {
  addVendorShopByVendorId,
  getAllJobTypes
} from 'src/services/admin/vendor-shop';
import {
  ServiceType,
  AddShop as AddShopProps,
  ShopHoursOfOperation
} from './types';

const defaultValues: ShopProps = {
  shopName: 'ABC',
  phone: '9898989898',
  address1: 'Address1',
  address2: 'Address2',
  city: 'City',
  state: 'CA',
  zip: '12345'
};

const AddShop = () => {
  const { addNewShop, values } = useProfile();
  const [allJobTypes, setAllJobTypes] = useState<ServiceType[]>([]);

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<ShopProps>({
    defaultValues,
    resolver: yupResolver(AddShopSchema as any)
  });

  useQuery(['allJobTypes'], () =>
    getAllJobTypes().then((data) => setAllJobTypes(data))
  );

  const getAdditionalServicesIds = (data: ShopProps) => {
    const additionalServicesIds: number[] = [];
    const dataObj = JSON.parse(JSON.stringify(data));
    const additionServicesKeys = Object.keys(dataObj.additionalServices);
    additionServicesKeys.map((m: string) => {
      if (dataObj.additionalServices[m]) {
        const serviceId = allJobTypes.find(
          (jobType) => jobType.serviceName.replace(/\s/g, '') == m
        )?.id;
        additionalServicesIds.push(serviceId ?? 0);
      }
    });

    return additionalServicesIds;
  };

  const getFormattedTime = (dateTime: Date) => {
    return `${(dateTime.getHours() < 10 ? '0' : '') + dateTime.getHours()}:${
      (dateTime.getMinutes() < 10 ? '0' : '') + dateTime.getMinutes()
    }:00`;
  };

  const getHoursOfOperations = (data: ShopProps) => {
    const dataObj = JSON.parse(JSON.stringify(data));
    const hoursOfOperations: ShopHoursOfOperation[] =
      dataObj.hoursOfOperation.map(
        (item: ShopHoursOfOperation, index: number) => {
          if (item.startTime != undefined && item.endTime != undefined) {
            return {
              dayOfWeek: index,
              hours24: item.hours24 ? item.hours24 : false,
              startTime: getFormattedTime(new Date(item.startTime)),
              endTime: getFormattedTime(new Date(item.endTime))
            };
          }
        }
      );

    return hoursOfOperations.filter((m: any) => m != undefined);
  };

  const onSubmit = (data: ShopProps) => {
    addNewShop(false);
    const {
      shopName,
      address1,
      address2,
      city,
      state,
      zip,
      phone,
      EmergencyRoadServices,
      rateEmergencyRoadServices,
      MobileService,
      rateMobileService,
      MechanicalShop,
      rateMechanicalShop,
      TrailerShop,
      rateTrailerShop,
      BodyShop,
      rateBodyShop
    } = data;

    const shopData: AddShopProps = {
      shopName: shopName,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zip: zip,
      phone: phone.toString(),
      emergencyRoadService:
        EmergencyRoadServices == undefined
          ? false
          : EmergencyRoadServices == 'true',
      emergencyRoadServiceRate: isNaN(Number(rateEmergencyRoadServices))
        ? 0
        : Number(rateEmergencyRoadServices),
      mobileService:
        MobileService == undefined ? false : MobileService == 'true',
      mobileServiceRate: isNaN(Number(rateMobileService))
        ? 0
        : Number(rateMobileService),
      mechanicalShop:
        MechanicalShop == undefined ? false : MechanicalShop == 'true',
      mechanicalShopRate: isNaN(Number(rateMechanicalShop))
        ? 0
        : Number(rateMechanicalShop),
      trailerShop: TrailerShop == undefined ? false : TrailerShop == 'true',
      trailerShopRate: isNaN(Number(rateTrailerShop))
        ? 0
        : Number(rateTrailerShop),
      bodyShop: BodyShop == undefined ? false : BodyShop == 'true',
      bodyShopRate: isNaN(Number(rateBodyShop)) ? 0 : Number(rateBodyShop),
      additionalServices: getAdditionalServicesIds(data),
      hoursOfOperation: getHoursOfOperations(data)
    };

    const vendorId = Number(values?.userid);
    addVendorShopByVendorId(vendorId, shopData);
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
          <Typography variant='h4'>Add a New Location</Typography>
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
                    <Typography variant='h4'>Hours of Operation</Typography>
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
                        name={`hoursOfOperation.${index}.hours24`}
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
                        name={`hoursOfOperation.${index}.startTime`}
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
              <Typography variant='h4'>Service and Rates</Typography>
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
                          name={`${service.replace(/\s/g, '')}`}
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
                        name={`rate${service.replace(/\s/g, '')}`}
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
              <AddCheckbox control={control} jobTypes={allJobTypes} />
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
