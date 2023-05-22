import { useEffect, useState, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  FormHelperText,
  Typography
} from '@mui/material';
import { textFieldStyle } from '@components/common/line-items-summary/styles';
import { createJobSection, types } from 'src/services/estimate';
import { addJobSectionSchema } from './schema';
import { CreateJobSection, JobSection, JobType } from './types';
import { JobSectionsContext } from '@components/vendor-repair-order/providers';

const AddJobSectionItem = ({ sectionNumber, removeElement }: JobSection) => {
  const [typeValue, setSetTypeValue] = useState(''); // TODO - what is default value?
  const [addJobSectionPayload, setAddJobSectionPayload] =
    useState<CreateJobSection>();

  const router = useRouter();
  const { vendorRepairOrderId } = router.query;
  const { refetch } = useContext(JobSectionsContext);

  const { mutate: postJobSection, isSuccess } = useMutation<any, Error>(
    async () => {
      return (
        addJobSectionPayload &&
        (await createJobSection(
          addJobSectionPayload,
          vendorRepairOrderId as string
        ))
      );
    }
  );

  const style = { ...textFieldStyle };
  const { data: typesData } = useQuery(['types'], types);

  const defaultValues: CreateJobSection = {
    jobType: '',
    vrms: '',
    cause: '',
    complaint: '',
    correction: '',
    notes: ''
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateJobSection>({
    defaultValues,
    resolver: yupResolver(addJobSectionSchema as any)
  });

  const onSubmit = (payload: CreateJobSection) => {
    setAddJobSectionPayload(payload);
  };

  const handleTypeChange = (value: string) => {
    setSetTypeValue(value);
  };

  useEffect(() => {
    if (addJobSectionPayload) {
      postJobSection();
    }
  }, [addJobSectionPayload]);

  useEffect(() => {
    if (isSuccess) {
      removeElement && removeElement(sectionNumber - 1);
      refetch();
    }
  }, [isSuccess]);

  return (
    <Box mt={2} p={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel
                shrink={true}
                sx={{ position: 'initial', marginLeft: '-15px' }}
                htmlFor='vrms'
              >
                VRMS *
              </InputLabel>
              <Controller
                name='vrms'
                control={control}
                render={({ field: { value, onChange } }: any) => (
                  <Box sx={{ backgroundColor: 'common.white' }}>
                    <TextField
                      value={value}
                      onChange={onChange}
                      defaultValue={defaultValues.vrms}
                      size='small'
                      sx={style}
                    />
                    {errors.vrms && (
                      <FormHelperText
                        sx={{
                          color: 'error.main',
                          marginLeft: '0px'
                        }}
                      >
                        {errors?.vrms?.message}
                      </FormHelperText>
                    )}
                  </Box>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel
                shrink={true}
                sx={{ position: 'initial', marginLeft: '-15px' }}
                htmlFor='type'
              >
                Type
              </InputLabel>
              <Controller
                name='jobType'
                control={control}
                render={({ field: { value, onChange } }: any) => {
                  return (
                    <Box
                      sx={{
                        backgroundColor: 'common.white',
                        borderRadius: '4px'
                      }}
                    >
                      <Select
                        labelId='jobType'
                        value={value}
                        onChange={(event: any) => {
                          onChange(event);
                          handleTypeChange(event.target.value);
                        }}
                        defaultValue={defaultValues.jobType}
                        displayEmpty
                        sx={{ width: '100%', height: '34px' }}
                        data-testid='type-select'
                        renderValue={
                          typeValue !== ''
                            ? undefined
                            : () => <Typography>Please select</Typography>
                        }
                      >
                        {typesData?.map((type: JobType) => {
                          return (
                            <MenuItem key={type.name} value={type.name}>
                              {type.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      {errors.jobType && (
                      <FormHelperText
                        sx={{
                          color: 'error.main',
                          marginLeft: '0px'
                        }}
                      >
                        {errors?.jobType?.message}
                      </FormHelperText>
                    )}
                    </Box>
                  );
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Box mt={1}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel
                  shrink={true}
                  sx={{ position: 'initial', marginLeft: '-15px' }}
                  htmlFor='complaint'
                >
                  Complaint *
                </InputLabel>
                <Controller
                  name='complaint'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <Box sx={{ backgroundColor: 'common.white' }}>
                      <TextField
                        sx={style}
                        value={value}
                        onChange={onChange}
                        defaultValue={defaultValues.complaint}
                        size='small'
                      />
                      {errors.complaint && (
                        <FormHelperText
                          sx={{
                            color: 'error.main',
                            marginLeft: '0px'
                          }}
                        >
                          {errors?.complaint?.message}
                        </FormHelperText>
                      )}
                    </Box>
                  )}
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box mt={1}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel
                  shrink={true}
                  sx={{ position: 'initial', marginLeft: '-15px' }}
                  htmlFor='cause'
                >
                  Cause *
                </InputLabel>
                <Controller
                  name='cause'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <Box sx={{ backgroundColor: 'common.white' }}>
                      <TextField
                        value={value}
                        onChange={onChange}
                        defaultValue={defaultValues.cause}
                        size='small'
                        sx={style}
                      />
                      {errors.cause && (
                        <FormHelperText
                          sx={{
                            color: 'error.main',
                            marginLeft: '0px'
                          }}
                        >
                          {errors?.cause?.message}
                        </FormHelperText>
                      )}
                    </Box>
                  )}
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box mt={1}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel
                  shrink={true}
                  sx={{ position: 'initial', marginLeft: '-15px' }}
                  htmlFor='correction'
                >
                  Correction *
                </InputLabel>
                <Controller
                  name='correction'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <Box sx={{ backgroundColor: 'common.white' }}>
                      <TextField
                        value={value}
                        onChange={onChange}
                        defaultValue={defaultValues.correction}
                        size='small'
                        sx={style}
                      />
                      {errors.correction && (
                        <FormHelperText
                          sx={{
                            color: 'error.main',
                            marginLeft: '0px'
                          }}
                        >
                          {errors?.correction?.message}
                        </FormHelperText>
                      )}
                    </Box>
                  )}
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box mt={1}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel
                  shrink={true}
                  sx={{ position: 'initial', marginLeft: '-15px' }}
                  htmlFor='notes'
                >
                  Notes
                </InputLabel>
                <Controller
                  name='notes'
                  control={control}
                  render={({ field: { value, onChange } }: any) => (
                    <Box sx={{ backgroundColor: 'common.white' }}>
                      <TextField
                        value={value}
                        onChange={onChange}
                        defaultValue={defaultValues.cause}
                        size='small'
                        sx={style}
                      />
                    </Box>
                  )}
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <Button
                sx={{
                  marginTop: '8px',
                  marginBottom: '8px'
                }}
                color='secondary'
                type='submit'
                variant='contained'
                size='small'
              >
                CONFIRM
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddJobSectionItem;
