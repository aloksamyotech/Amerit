import { Dispatch, SetStateAction, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '@mui/material/styles';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import Locations from './Locations';
import { schema } from './schema';
import { Search as SearchType } from './types';
import { textField, inputLabel } from './styles';

const defaultValues: SearchType = {
  repairOrderNbr: '',
  vendorWorkOrderNbr: '',
  location: '',
  vin: '',
  userID: '',
  status: ''
};

const Search = ({
  setSearchData,
  searchResults
}: {
  setSearchData: Dispatch<SetStateAction<SearchType | undefined>>;
  searchResults: VendorRepairOrder[];
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<SearchType>({
    defaultValues,
    resolver: yupResolver(schema as any)
  });

  const theme = useTheme();
  const { data: session } = useSession();

  // There is now a requirement to populate the results on mount
  useEffect(() => {
    setSearchData(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetForm = () => {
    reset(defaultValues);
    setSearchData(defaultValues);
  };

  const onSubmit = (data: SearchType) => {
    setSearchData({
      ...data,
      userID: session?.user?.name || ''
    });
  };

  return (
    <Card elevation={0}>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={6} mb={2}>
            <Grid item xs={12} sm={3}>
              <Box width={'100%'}>
                <FormControl fullWidth>
                  <InputLabel id='location' shrink={true} sx={inputLabel}>
                    VIN
                  </InputLabel>
                  <Controller
                    name='vin'
                    control={control}
                    render={({ field: { value, onChange } }: any) => (
                      <Box>
                        <TextField
                          value={value}
                          onChange={onChange}
                          placeholder='Vin'
                          sx={textField}
                          size='small'
                        />
                      </Box>
                    )}
                  />
                  <Box>
                    {errors.vin && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.vin.message}
                      </FormHelperText>
                    )}
                  </Box>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} gap='6px'>
              <Box width={'100%'}>
                <FormControl fullWidth>
                  <InputLabel shrink={true} sx={inputLabel}>
                    Repair Order Nbr
                  </InputLabel>
                  <Controller
                    name='repairOrderNbr'
                    control={control}
                    render={({ field: { value, onChange } }: any) => (
                      <Box>
                        <TextField
                          sx={textField}
                          value={value}
                          onChange={onChange}
                          data-testid='repairOrderNbr'
                          placeholder='Repair Order Nbr'
                          error={Boolean(errors.repairOrderNbr)}
                          InputProps={
                            errors.repairOrderNbr && {
                              endAdornment: (
                                <FontAwesomeIcon
                                  title='Alert'
                                  icon={'exclamation-circle'}
                                  color={theme.palette.error.main}
                                />
                              )
                            }
                          }
                          size='small'
                        />
                      </Box>
                    )}
                  />
                  {errors.repairOrderNbr && (
                    <FormHelperText
                      sx={{ color: 'error.main', marginLeft: '0px' }}
                    >
                      {errors.repairOrderNbr.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box width={'100%'}>
                <FormControl fullWidth>
                  <InputLabel
                    shrink={true}
                    sx={inputLabel}
                    htmlFor='vendorWorkOrderNbr'
                  >
                    Vendor Work Order Nbr
                  </InputLabel>
                  <Controller
                    name='vendorWorkOrderNbr'
                    control={control}
                    render={({ field: { value, onChange } }: any) => (
                      <Box>
                        <TextField
                          value={value}
                          onChange={onChange}
                          placeholder='Vendor Work Order Nbr'
                          sx={textField}
                          size='small'
                        />
                      </Box>
                    )}
                  />
                  <Box>
                    {errors.vendorWorkOrderNbr && (
                      <FormHelperText
                        sx={{ color: 'error.main', marginLeft: '0px' }}
                      >
                        {errors.vendorWorkOrderNbr.message}
                      </FormHelperText>
                    )}
                  </Box>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box width={'100%'}>
                <FormControl fullWidth>
                  <InputLabel id='location' shrink={true} sx={inputLabel}>
                    Location
                  </InputLabel>
                  <Controller
                    name='location'
                    control={control}
                    render={({ field: { value, onChange } }: any) => {
                      return (
                        <Box>
                          <Locations
                            value={value}
                            onChange={onChange}
                            searchResults={searchResults}
                          />
                        </Box>
                      );
                    }}
                  />
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Grid alignItems='center' container justifyContent='left' gap='5px'>
            <Button color='secondary' type='submit' variant='contained'>
              Show Results
            </Button>
            <Button onClick={resetForm}>Reset</Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Search;
