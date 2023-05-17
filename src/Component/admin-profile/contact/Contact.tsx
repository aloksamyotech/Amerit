import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
import Contact from './types';
import ContactFormSchema from './schema';
import { useProfile } from '../context/ProfileContext';
import { GetContactTypes } from 'src/services/admin';

const defaultValues: Contact = {
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

const AdminContact = () => {
  const { updateTab, handleProgress } = useProfile();

  const [contactTypes, setContactTypes] =
    useState<Array<{ value: number; name: string }>>();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Contact>({
    defaultValues,
    resolver: yupResolver(ContactFormSchema as any)
  });

  const onSubmit = (data: Contact) => {
    updateTab(1);
    handleProgress('contact');
    console.log({ data });
  };

  const getContactTypes = async () => {
    const data = await GetContactTypes();
    setContactTypes(data);
  };

  useEffect(() => {
    getContactTypes();
  }, []);

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
                            placeholder='Principle Name'
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
                            placeholder='Principle Title'
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

              {contactTypes &&
                contactTypes.map((item) => {
                  return (
                    <Grid key={item.value} container item spacing={2}>
                      <Grid item xs={12}>
                        <Typography>{item && item.name}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Box width={'100%'}>
                          <Controller
                            name='otherContacts'
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
                  );
                })}
            </Grid>
          </FormControl>
        </form>
      </Paper>
    </Box>
  );
};

export default AdminContact;
