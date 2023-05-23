import * as React from 'react';
import {
  Paper,
  Typography,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Button,
  FormHelperText,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
  useTheme
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CropSquare, Square } from '@mui/icons-material';
import { Profile as ProfileProps } from './types/ProfileForm';
import { style } from '../style';
import ProfileFormSchema from '../schema';
import {
  OWNER_SHIP_TERMS_ADMIN,
  PAYMENT_TERMS_ADMIN
} from '../__mocks__/utils';
import { SelectOptionsProps } from './types/SelectOptionsProps';
import { useProfile } from '../context/ProfileContext';
import { StateList } from 'src/constants';
import { saveAdminProfileDetails } from 'src/services/admin';

const defaultValues: ProfileProps = {
  companyName: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  yearEstablished: '',
  federalTaxIdNumber: '',
  dunsNumber: '',
  minorityOwned: '',
  paymentTermsId: 0,
  services: false,
  parts: false,
  toolsAndSupplies: false,
  oemDealer: false
};

const Profile = () => {
  const { updateTab, handleProgress, setUserid } = useProfile();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ProfileProps>({
    defaultValues,
    resolver: yupResolver(ProfileFormSchema as any)
  });

  const theme = useTheme();

  const onSubmit = async (data: ProfileProps) => {
    const userid = await saveAdminProfileDetails(data);
    setUserid(Number(userid));
    updateTab(0);
    handleProgress('profile');
  };

  return (
    <Grid item xs={12}>
      <Paper elevation={2} sx={{ marginLeft: '1.0rem' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={2}
            sx={{
              paddingLeft: '3.0rem',
              paddingRight: '3.0rem',
              paddingTop: '1.0rem',
              paddingBottom: '1.0rem'
            }}
          >
            <Grid item sm={12}>
              <FormControl fullWidth>
                <Grid item xs={12}>
                  <Typography variant='body1' gutterBottom>
                    Vendor Type (Please check at least one)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormGroup row>
                    <Controller
                      name='services'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              icon={<CropSquare />}
                              checkedIcon={<Square />}
                              value={value}
                              onChange={onChange}
                            />
                          }
                          label='Services'
                        />
                      )}
                    />

                    <Controller
                      name='parts'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              icon={<CropSquare />}
                              checkedIcon={<Square />}
                              value={value}
                              onChange={onChange}
                            />
                          }
                          label='Parts'
                        />
                      )}
                    />

                    <Controller
                      name='toolsAndSupplies'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              icon={<CropSquare />}
                              checkedIcon={<Square />}
                              value={value}
                              onChange={onChange}
                            />
                          }
                          label='Tools & Supplies'
                        />
                      )}
                    />

                    <Controller
                      name='oemDealer'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              icon={<CropSquare />}
                              checkedIcon={<Square />}
                              value={value}
                              onChange={onChange}
                            />
                          }
                          label='OEM Dealer'
                        />
                      )}
                    />
                  </FormGroup>
                </Grid>
              </FormControl>
            </Grid>

            <Grid item sm={12} lg={12}>
              <FormControl fullWidth>
                <Controller
                  name='companyName'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <TextField
                      type='text'
                      id='companyName'
                      size='small'
                      sx={style}
                      value={value}
                      onChange={onChange}
                      data-testid='companyName'
                      placeholder='Company Name'
                      error={Boolean(errors.companyName)}
                    />
                  )}
                />
                {errors.companyName && (
                  <FormHelperText
                    sx={{ color: 'error.main', marginLeft: '0px' }}
                  >
                    {errors.companyName.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item sm={12} lg={12}>
              <FormControl fullWidth>
                <Controller
                  name='address1'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <TextField
                      type='text'
                      id='address1'
                      size='small'
                      sx={style}
                      value={value}
                      onChange={onChange}
                      data-testid='Address1'
                      placeholder='Address 1'
                      error={Boolean(errors.address1)}
                    />
                  )}
                />
                {errors.address1 && (
                  <FormHelperText
                    sx={{ color: 'error.main', marginLeft: '0px' }}
                  >
                    {errors.address1.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item sm={12} lg={12}>
              <FormControl fullWidth>
                <Controller
                  name='address2'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <TextField
                      type='text'
                      id='address2'
                      size='small'
                      sx={style}
                      value={value}
                      onChange={onChange}
                      data-testid='Address2'
                      placeholder='Address 2'
                      error={Boolean(errors.address2)}
                    />
                  )}
                />
                {errors.address2 && (
                  <FormHelperText
                    sx={{ color: 'error.main', marginLeft: '0px' }}
                  >
                    {errors.address2.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item sm={4} lg={4}>
              <FormControl fullWidth>
                <Controller
                  name='city'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <TextField
                      type='text'
                      id='city'
                      size='small'
                      sx={style}
                      value={value}
                      onChange={onChange}
                      data-testid='city'
                      placeholder='City'
                      error={Boolean(errors.city)}
                    />
                  )}
                />
                {errors.city && (
                  <FormHelperText
                    sx={{ color: 'error.main', marginLeft: '0px' }}
                  >
                    {errors.city.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item sm={4} lg={4}>
              <FormControl fullWidth>
                <Controller
                  name='state'
                  control={control}
                  render={({ field: { value, onChange } }: any) => {
                    return (
                      <Select
                        labelId='state'
                        id='state'
                        size='small'
                        variant='outlined'
                        value={value === '' ? 'State' : value}
                        onChange={onChange}
                        sx={{ width: '100%' }}
                        SelectDisplayProps={{
                          style: {
                            border: `1px solid ${theme.palette.grey[100]}`
                          }
                        }}
                      >
                        {StateList.map((state: any) => (
                          <MenuItem
                            key={state.id}
                            value={state.value}
                            disabled={state.disabled}
                          >
                            {state.label}
                          </MenuItem>
                        ))}
                      </Select>
                    );
                  }}
                />
                {errors.state && (
                  <FormHelperText error sx={{ ml: 0 }}>
                    {errors.state.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item sm={4} lg={4}>
              <FormControl fullWidth>
                <Controller
                  name='zip'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <TextField
                      type='text'
                      id='zip'
                      size='small'
                      sx={style}
                      value={value}
                      onChange={onChange}
                      data-testid='Zip'
                      placeholder='Zip'
                      error={Boolean(errors.zip)}
                    />
                  )}
                />
                {errors.zip && (
                  <FormHelperText
                    sx={{ color: 'error.main', marginLeft: '0px' }}
                  >
                    {errors.zip.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item sm={12} lg={6}>
              <FormControl fullWidth>
                <Controller
                  name='yearEstablished'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <TextField
                      type='text'
                      sx={style}
                      id='yearEstablished'
                      size='small'
                      value={value}
                      onChange={onChange}
                      data-testid='yearEstablished'
                      placeholder='Year Established'
                      error={Boolean(errors.yearEstablished)}
                    />
                  )}
                />
                {errors.yearEstablished && (
                  <FormHelperText
                    sx={{ color: 'error.main', marginLeft: '0px' }}
                  >
                    {errors.yearEstablished.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <Controller
                  name='federalTaxIdNumber'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <TextField
                      type='text'
                      id='federalTaxIdNumber'
                      size='small'
                      sx={style}
                      value={value}
                      onChange={onChange}
                      data-testid='federalTaxIdNumber'
                      placeholder='Federal Tax ID Number (EIN)'
                      error={Boolean(errors.federalTaxIdNumber)}
                    />
                  )}
                />
                {errors.federalTaxIdNumber && (
                  <FormHelperText
                    sx={{ color: 'error.main', marginLeft: '0px' }}
                  >
                    {errors.federalTaxIdNumber.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid xs={12} lg={6} item>
              <FormControl fullWidth>
                <Controller
                  name='dunsNumber'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <TextField
                      type='text'
                      id='dunsNumber'
                      size='small'
                      sx={style}
                      value={value}
                      onChange={onChange}
                      data-testid='dunsNumber-number'
                      placeholder='DUNS Number'
                      error={Boolean(errors.dunsNumber)}
                    />
                  )}
                />
                {errors.dunsNumber && (
                  <FormHelperText
                    sx={{ color: 'error.main', marginLeft: '0px' }}
                  >
                    {errors.dunsNumber.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <Controller
                  name='minorityOwned'
                  control={control}
                  render={({ field: { value, onChange } }: any) => {
                    return (
                      <Select
                        labelId='Minority Owned'
                        variant='outlined'
                        value={value === '' ? 'Ownership Terms' : value}
                        onChange={onChange}
                        id='minorityOwned'
                        size='small'
                        displayEmpty
                        sx={{ width: '100%' }}
                        SelectDisplayProps={{
                          style: {
                            border: `1px solid ${theme.palette.grey[100]}`
                          }
                        }}
                      >
                        {OWNER_SHIP_TERMS_ADMIN.map(
                          (vendor: SelectOptionsProps) => (
                            <MenuItem
                              key={vendor.id}
                              value={vendor.label}
                              disabled={vendor.disabled}
                            >
                              {vendor.label}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    );
                  }}
                />
                {errors.minorityOwned && (
                  <FormHelperText error sx={{ ml: 0 }}>
                    {errors.minorityOwned.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <Controller
                  name='paymentTermsId'
                  control={control}
                  render={({ field: { value, onChange } }: any) => {
                    return (
                      <Select
                        labelId='Payment Terms'
                        variant='outlined'
                        id='paymentTermsId'
                        size='small'
                        value={value === '' ? 'Payment Terms' : value}
                        onChange={onChange}
                        displayEmpty
                        sx={{ width: '100%' }}
                        SelectDisplayProps={{
                          style: {
                            border: `1px solid ${theme.palette.grey[100]}`
                          }
                        }}
                      >
                        {PAYMENT_TERMS_ADMIN.map(
                          (vendor: SelectOptionsProps) => (
                            <MenuItem
                              key={vendor.id}
                              value={vendor.value}
                              disabled={vendor.disabled}
                            >
                              {vendor.label}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    );
                  }}
                />
                {errors.paymentTermsId && (
                  <FormHelperText
                    sx={{ color: 'error.main', marginLeft: '0px' }}
                  >
                    {errors.paymentTermsId.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}></Grid>
            <Grid item xs={12} lg={6}>
              <Button
                color='secondary'
                variant='contained'
                size='large'
                type='submit'
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default Profile;
