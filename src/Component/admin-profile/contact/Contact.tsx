import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
  InputLabel
} from '@mui/material';
import { style } from '@components/admin-profile/style';
import ContactFormSchema from './schema';
import { useProfile } from '../context/ProfileContext';
import {
  getAdminContactTypes,
  saveAdminContactDetails
} from 'src/services/admin';
import { CONTACT_TYPES_TITLE } from '../__mocks__/utils';

const defaultValues = {
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
      contactType: 1
    },
    {
      name: '',
      email: '',
      phone: '',
      contactType: 2
    }
  ]
};

const Contact = () => {
  const { updateTab, handleProgress, values } = useProfile();

  const [contactTypes, setContactTypes] =
    useState<Array<{ value: number; name: string }>>();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(ContactFormSchema as any)
  });

  useQuery(['contactTypes'], () =>
    getAdminContactTypes().then((data) => setContactTypes(data))
  );

  const mutation = useMutation((data: typeof defaultValues) =>
    saveAdminContactDetails(data, Number(values?.userid))
  );
  const onSubmit = (data: typeof defaultValues) => {
    updateTab(1);
    handleProgress('contact');
    mutation.mutate(data);
  };

  return (
    <Box width={'100%'} sx={{ marginLeft: '1.0rem', marginRight: '1.0rem' }}>
      <Paper elevation={2} sx={{ padding: '1.5rem' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid container item spacing={2}>
              <Grid item xs={12}>
                <Typography>Principal Person</Typography>
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Name</InputLabel>
                <Box width={'100%'}>
                  <FormControl fullWidth>
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
                            placeholder='Name'
                            error={Boolean(errors.principalPerson)}
                          />
                        </Box>
                      )}
                    />
                  </FormControl>
                  {errors.principalPerson && (
                    <FormHelperText error sx={{ ml: 0 }}>
                      {errors.principalPerson.message}
                    </FormHelperText>
                  )}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Title</InputLabel>

                <Box width={'100%'}>
                  <FormControl fullWidth>
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
                            placeholder='Title'
                            error={Boolean(errors.principalPersonTitle)}
                          />
                        </Box>
                      )}
                    />
                  </FormControl>

                  {errors.principalPersonTitle && (
                    <FormHelperText error sx={{ ml: 0 }}>
                      {errors.principalPersonTitle.message}
                    </FormHelperText>
                  )}
                </Box>
              </Grid>
            </Grid>

            {contactTypes &&
              contactTypes.map((item, index: number) => {
                return (
                  <Grid key={item.value} container item spacing={2}>
                    <Grid item xs={12}>
                      <Typography>{` ${
                        CONTACT_TYPES_TITLE[item.name]
                      } Contact `}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>Name</InputLabel>
                      <Box width={'100%'}>
                        <FormControl fullWidth>
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
                                  placeholder='Name'
                                  error={Boolean(
                                    errors.otherContacts?.[index]?.name
                                  )}
                                />
                              </Box>
                            )}
                          />
                        </FormControl>
                        {errors.otherContacts?.[index]?.name && (
                          <FormHelperText error sx={{ marginLeft: '0px' }}>
                            {errors.otherContacts?.[index]?.name?.message}
                          </FormHelperText>
                        )}
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>Email</InputLabel>
                      <Box width={'100%'}>
                        <FormControl fullWidth>
                          <Controller
                            name={`otherContacts.${index}.email`}
                            control={control}
                            render={({ field: { value, onChange } }: any) => (
                              <Box>
                                <TextField
                                  size='small'
                                  value={value}
                                  sx={style}
                                  onChange={onChange}
                                  data-testid={`otherContacts[${index}].email`}
                                  placeholder='Email'
                                  error={Boolean(
                                    errors.otherContacts?.[index]?.email
                                  )}
                                />
                              </Box>
                            )}
                          />
                        </FormControl>
                        {errors.otherContacts?.[index]?.email && (
                          <FormHelperText
                            sx={{ color: 'error.main', marginLeft: '0px' }}
                          >
                            {errors.otherContacts?.[index]?.email?.message}
                          </FormHelperText>
                        )}
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>Phone</InputLabel>
                      <Box width={'100%'}>
                        <FormControl fullWidth>
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
                                  data-testid={`otherContacts[${index}].phone`}
                                  placeholder='Phone'
                                  error={Boolean(
                                    errors.otherContacts?.[index]?.phone
                                  )}
                                />
                              </Box>
                            )}
                          />
                        </FormControl>
                        {errors.otherContacts?.[index]?.phone && (
                          <FormHelperText
                            sx={{ color: 'error.main', marginLeft: '0px' }}
                          >
                            {errors.otherContacts?.[index]?.phone?.message}
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
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
