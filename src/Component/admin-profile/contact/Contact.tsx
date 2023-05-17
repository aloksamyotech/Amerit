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
  principalPersonTitle: '',
  principalPerson: '',
  otherContacts: [
    {
      name: '',
      email: '',
      phone: '',
      contactType: 0
    },
    {
      name: '',
      email: '',
      phone: '',
      contactType: 0
    },
    {
      name: '',
      email: '',
      phone: '',
      contactType: 0
    }
  ]
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
    let x = data.otherContacts.
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
                      name='principalPerson'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <Box>
                          <TextField
                            size='small'
                            sx={style}
                            value={value}
                            onChange={onChange}
                            data-testid='principalPerson'
                            placeholder='Name'
                            error={Boolean(errors.principalPerson)}
                          />
                        </Box>
                      )}
                    />
                    {errors.principalPerson && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.principalPerson.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box width={'100%'}>
                    <Controller
                      name='principalPersonTitle'
                      control={control}
                      render={({ field: { value, onChange } }: any) => (
                        <Box>
                          <TextField
                            size='small'
                            sx={style}
                            value={value}
                            onChange={onChange}
                            data-testid='principalPersonTitle'
                            placeholder='Title'
                            error={Boolean(errors.principalPersonTitle)}
                          />
                        </Box>
                      )}
                    />
                    {errors.principalPersonTitle && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.principalPersonTitle.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>
              </Grid>

              {contactTypes &&
                contactTypes.map((item, index) => {
                  return (
                    <Grid key={item.value} container item spacing={2}>
                      <Grid item xs={12}>
                        <Typography>{item && item.name}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Box width={'100%'}>
                          <Controller
                            name={`otherContacts.${index}.name`}
                            control={control}
                            render={({ field: { value, onChange } }: any) => (
                              <Box>
                                <TextField
                                  size='small'
                                  sx={style}
                                  value={value}
                                  onChange={onChange}
                                  data-testid={`otherContacts.${index}.name`}
                                  placeholder='Name'
                                  error={Boolean(errors.otherContacts)}
                                />
                              </Box>
                            )}
                          />
                          {errors.otherContacts && (
                            <FormHelperText
                              sx={{ color: 'error.main', marginLeft: '0px' }}
                            >
                              {errors.otherContacts.message}
                            </FormHelperText>
                          )}
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          name={`otherContacts.${index}.email`}
                          control={control}
                          render={({ field: { value, onChange } }: any) => (
                            <TextField
                              size='small'
                              sx={style}
                              value={value}
                              onChange={onChange}
                              data-testid={`otherContacts.${index}.email`}
                              placeholder='Email'
                              error={Boolean(errors.otherContacts)}
                            />
                          )}
                        />
                        {errors.otherContacts && (
                          <FormHelperText
                            sx={{ color: 'error.main', marginLeft: '0px' }}
                          >
                            {errors.otherContacts.message}
                          </FormHelperText>
                        )}
                      </Grid>
                      <Grid item xs={6}>
                        <Box width={'100%'}>
                          <Controller
                            name={`otherContacts.${index}.phone`}
                            control={control}
                            render={({ field: { value, onChange } }: any) => (
                              <Box>
                                <TextField
                                  size='small'
                                  sx={style}
                                  value={value}
                                  onChange={onChange}
                                  data-testid={`otherContacts.${index}.phone`}
                                  placeholder='Phone'
                                  error={Boolean(errors.otherContacts)}
                                />
                              </Box>
                            )}
                          />
                          {errors.otherContacts && (
                            <FormHelperText
                              sx={{ color: 'error.main', marginLeft: '0px' }}
                            >
                              {errors.otherContacts.message}
                            </FormHelperText>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  );
                })}

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

export default AdminContact;
