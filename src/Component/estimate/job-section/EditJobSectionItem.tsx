import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { textFieldStyle } from '@components/common/line-items-summary/styles';
import { updateNotes } from 'src/services/estimate';
import { editJobSectionschema } from './schema';
import TabsControl from './tabs';
import { CreateJobSection, Estimate } from './types';

const EditJobSectionItem = ({
  complaint,
  correction,
  cause,
  notes,
  setTotalEstmateAmount,
  setTotalActualAmount,
  type,
  id,
  tmsRepairOrderSectionId,
}: Estimate) => {
  const defaultValues: CreateJobSection = {
    cause,
    complaint,
    correction,
    notes
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateJobSection>({
    defaultValues,
    resolver: yupResolver(editJobSectionschema as any)
  });
  const style = { ...textFieldStyle };
  const [notesPayload, setNotesPayload] = useState<Estimate>();

  const { mutate: postJobSection } = useMutation<any, Error>(async () => {
    return notesPayload && (await updateNotes(notesPayload));
  });

  const onSubmit = (payload: CreateJobSection) => {
    console.log({ payload });
    setNotesPayload({...payload, id, tmsRepairOrderSectionId});
  };

  useEffect(() => {
    if (notesPayload) {
      postJobSection();
    }
  }, [notesPayload]);

  return (
    <Box mt={2} p={2} sx={{ backgroundColor: 'common.white' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Grid spacing={2} container>
            <Grid item xs={12} sm={3}>
              <Box>
                <FormControl sx={{ width: '100%' }}>
                  <Typography
                    fontSize={13}
                    fontWeight={1000}
                    variant='h6'
                    mb={1}
                  >
                    Complaint *:
                  </Typography>
                  <Controller
                    name='complaint'
                    control={control}
                    render={({ field: { value, onChange } }: any) => (
                      <Box sx={{ backgroundColor: 'common.white' }}>
                        <TextField
                          value={value}
                          onChange={onChange}
                          defaultValue={defaultValues.complaint}
                          sx={style}
                          multiline
                          rows={3}
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
            <Grid item xs={12} sm={3}>
              <Box>
                <FormControl sx={{ width: '100%' }}>
                  <Typography
                    fontSize={13}
                    fontWeight={1000}
                    variant='h6'
                    mb={1}
                  >
                    Cause *:
                  </Typography>
                  <Controller
                    name='cause'
                    control={control}
                    render={({ field: { value, onChange } }: any) => (
                      <Box sx={{ backgroundColor: 'common.white' }}>
                        <TextField
                          value={value}
                          onChange={onChange}
                          defaultValue={cause}
                          sx={style}
                          multiline
                          rows={3}
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
            <Grid item xs={12} sm={3}>
              <Box>
                <FormControl sx={{ width: '100%' }}>
                  <Typography
                    fontSize={13}
                    fontWeight={1000}
                    variant='h6'
                    mb={1}
                  >
                    Correction *:
                  </Typography>
                  <Controller
                    name='correction'
                    control={control}
                    render={({ field: { value, onChange } }: any) => (
                      <Box sx={{ backgroundColor: 'common.white' }}>
                        <TextField
                          value={value}
                          onChange={onChange}
                          defaultValue={correction}
                          sx={style}
                          multiline
                          rows={3}
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
            <Grid item xs={12} sm={3}>
              <Box>
                <FormControl sx={{ width: '100%' }}>
                  <Typography
                    fontSize={13}
                    fontWeight={1000}
                    variant='h6'
                    mb={1}
                  >
                    Notes:
                  </Typography>
                  <Controller
                    name='notes'
                    control={control}
                    render={({ field: { value, onChange } }: any) => (
                      <Box sx={{ backgroundColor: 'common.white' }}>
                        <TextField
                          value={value}
                          maxRows={6}
                          onChange={onChange}
                          defaultValue={notes}
                          sx={style}
                          multiline
                          rows={3}
                        />
                      </Box>
                    )}
                  />
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container justifyContent='right'>
            <Grid item>
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
                  UPDATE
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </form>
      <TabsControl
        type={type}
        setTotalEstimate={setTotalEstmateAmount}
        setTotalActual={setTotalActualAmount}
      />
    </Box>
  );
};

export default EditJobSectionItem;
