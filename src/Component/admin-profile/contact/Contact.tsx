import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import { style } from '@components/admin-profile/style';
import { Contact as ContactProps } from './types';
import { useProfile } from '../context/ProfileContext';

const defaultValues: ContactProps = {
  principleName: '',
  principleTitle: '',
  primaryName: '',
  primaryPhone: '',
  primaryEmail: '',
  accountName: '',
  accountPhone: '',
  accountEmail: '',
  companyName: '',
  companyPhone: '',
  companyEmail: ''
};

const Contact = () => {
  const { updateTab, handleProgress } = useProfile();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactProps>({
    defaultValues
  });

  const onSubmit = (data: ContactProps) => {
    updateTab(1);
    handleProgress('contact');
    console.log({ data });
  };

  return (
    <Box width={'100%'} sx={{ marginLeft: '1.0rem', marginRight: '1.0rem' }}>
      <Paper elevation={2} sx={{ padding: '1.5rem' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth>
            <Grid container spacing={2}>
              <Grid container item spacing={2}>
                <Grid item xs={12}>
                  <Typography>Principal Person</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Box width={'100%'}>
                    <Controller
                      name='principleName'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <Box>
                          <TextField
                            size='small'
                            sx={style}
                            value={value}
                            onChange={onChange}
                            data-testid='principleName'
                            placeholder='Name'
                            error={Boolean(errors.principleName)}
                          />
                        </Box>
                      )}
                    />
                    {errors.principleName && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.principleName.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box width={'100%'}>
                    <Controller
                      name='principleTitle'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <Box>
                          <TextField
                            size='small'
                            sx={style}
                            value={value}
                            onChange={onChange}
                            data-testid='principleTitle'
                            placeholder='Title'
                            error={Boolean(errors.principleTitle)}
                          />
                        </Box>
                      )}
                    />
                    {errors.principleTitle && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.principleTitle.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={12}>
                  <Typography>Primary Contact</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Box width={'100%'}>
                    <Controller
                      name='primaryName'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <Box>
                          <TextField
                            size='small'
                            sx={style}
                            value={value}
                            onChange={onChange}
                            data-testid='primaryName'
                            placeholder='Name'
                            error={Boolean(errors.primaryName)}
                          />
                        </Box>
                      )}
                    />
                    {errors.primaryName && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.primaryName.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box width={'100%'}>
                    <Controller
                      name='primaryEmail'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <Box>
                          <TextField
                            size='small'
                            sx={style}
                            value={value}
                            onChange={onChange}
                            data-testid='primaryEmail'
                            placeholder='Email'
                            error={Boolean(errors.primaryEmail)}
                          />
                        </Box>
                      )}
                    />
                    {errors.primaryEmail && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.primaryEmail.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box width={'100%'}>
                    <Controller
                      name='primaryPhone'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <Box>
                          <TextField
                            size='small'
                            sx={style}
                            value={value}
                            onChange={onChange}
                            data-testid='primaryPhone'
                            placeholder='Phone'
                            error={Boolean(errors.primaryPhone)}
                          />
                        </Box>
                      )}
                    />
                    {errors.primaryPhone && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.primaryPhone.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={12}>
                  <Typography>Account Receivables Contact</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Box width={'100%'}>
                    <Controller
                      name='accountName'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <Box>
                          <TextField
                            size='small'
                            sx={style}
                            value={value}
                            onChange={onChange}
                            data-testid='accountName'
                            placeholder='Name'
                            error={Boolean(errors.accountName)}
                          />
                        </Box>
                      )}
                    />
                    {errors.accountName && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.accountName.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box width={'100%'}>
                    <Controller
                      name='accountEmail'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <Box>
                          <TextField
                            size='small'
                            sx={style}
                            value={value}
                            onChange={onChange}
                            data-testid='accountEmail'
                            placeholder='Email'
                            error={Boolean(errors.accountEmail)}
                          />
                        </Box>
                      )}
                    />
                    {errors.accountEmail && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.accountEmail.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box width={'100%'}>
                    <Controller
                      name='accountPhone'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <Box>
                          <TextField
                            size='small'
                            sx={style}
                            value={value}
                            onChange={onChange}
                            data-testid='accountPhone'
                            placeholder='Phone'
                            error={Boolean(errors.accountPhone)}
                          />
                        </Box>
                      )}
                    />
                    {errors.accountPhone && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.accountPhone.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={12}>
                  <Typography>Your Company Insurance Contact</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Box width={'100%'}>
                    <Controller
                      name='companyName'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <Box>
                          <TextField
                            size='small'
                            sx={style}
                            value={value}
                            onChange={onChange}
                            data-testid='companyName'
                            placeholder='Name'
                            error={Boolean(errors.companyName)}
                          />
                        </Box>
                      )}
                    />
                    {errors.companyName && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.companyName.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box width={'100%'}>
                    <Controller
                      name='companyEmail'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <Box>
                          <TextField
                            size='small'
                            sx={style}
                            value={value}
                            onChange={onChange}
                            data-testid='companyEmail'
                            placeholder='Email'
                            error={Boolean(errors.companyEmail)}
                          />
                        </Box>
                      )}
                    />
                    {errors.companyEmail && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.companyEmail.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box width={'100%'}>
                    <Controller
                      name='companyPhone'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <Box>
                          <TextField
                            size='small'
                            sx={style}
                            value={value}
                            onChange={onChange}
                            data-testid='companyPhone'
                            placeholder='Phone'
                            error={Boolean(errors.companyPhone)}
                          />
                        </Box>
                      )}
                    />
                    {errors.companyPhone && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.companyPhone.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={6}>
                  <Box width={'100%'} pt={2}>
                    <Button
                      color='secondary'
                      variant='contained'
                      size='large'
                      type='submit'
                    >
                      Save Changes
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </FormControl>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
