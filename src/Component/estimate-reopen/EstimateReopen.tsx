import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import {
  postReopenEstimate,
  reopenEstimateReasons
} from 'src/services/estimate';
import { schema } from './schema';
import {
  EstimateReOpen,
  EstimateReOpenType,
  EstimateReopenReason
} from './types';
import ValidationError from './ValidationError';

const defaultValues: EstimateReOpen = {
  reason: '',
  description: ''
};

const EstimateReopen = ({ handleClose }: EstimateReOpenType) => {
  const [payload, setPayload] = useState<EstimateReOpen>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EstimateReOpen>({
    defaultValues,
    resolver: yupResolver(schema as any)
  });

  const onSubmit = (data: EstimateReOpen) => {
    setPayload(data);
    console.log('data', { data });
  };

  const { data: estimateReopenReasonsData } = useQuery(
    ['reopenEstimateReasons'],
    reopenEstimateReasons
  );

  const { mutate: reopenEstimateMutation } = useMutation<any, Error>(
    async () => {
      return payload && (await postReopenEstimate(payload));
    }
  );

  useEffect(() => {
    if (payload) {
      reopenEstimateMutation();
    }
  }, [payload]);

  const handleOnCancelClick = () => {
    handleClose();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1} p={2}>
        <Grid item xs={12} sm={12}>
          <Box mb={2}>
            <Typography variant='body2'>
              Press "Confirm" to confirm you wish to re-open the previously
              approved estimate. Press "Cancel" to view or accept the Estimate
              Request.
            </Typography>
          </Box>
          <Box mb={3}>
            <Typography
              sx={{ color: 'main.grey', fontSize: '1em', fontWeight: 600 }}
            >
              Additional Repairs Must Be Authorized.
            </Typography>
          </Box>
          <Box mb={3}>
            <FormControl fullWidth>
              <Controller
                name='reason'
                control={control}
                render={({ field: { value, onChange } }: any) => {
                  return (
                    <Box>
                      <InputLabel
                        id='reason'
                        shrink={true}
                        sx={{ position: 'initial', marginLeft: '-12px' }}
                      >
                        Reason for Reopening
                      </InputLabel>
                      <Select
                        labelId='reason'
                        value={value}
                        onChange={onChange}
                        defaultValue={defaultValues.reason}
                        displayEmpty
                        sx={{
                          width: '300px',
                          fontSize: '12px',
                          height: '40px'
                        }}
                        renderValue={
                          value !== ''
                            ? undefined
                            : () => <Typography>Please Choose</Typography>
                        }
                      >
                        {estimateReopenReasonsData?.map(
                          (reason: EstimateReopenReason) => {
                            return (
                              <MenuItem key={reason.name} value={reason.value}>
                                {reason.name}
                              </MenuItem>
                            );
                          }
                        )}
                      </Select>
                    </Box>
                  );
                }}
              />
              {errors.reason && (
                <ValidationError message={errors?.reason?.message} />
              )}
            </FormControl>
          </Box>
          <Box>
            <FormControl sx={{ width: '100%' }}>
              <Controller
                name='description'
                control={control}
                render={({ field: { value, onChange } }: any) => (
                  <Box sx={{ backgroundColor: 'common.white' }}>
                    <InputLabel
                      shrink={true}
                      sx={{ position: 'initial', marginLeft: '-12px' }}
                      htmlFor='textarea'
                    >
                      Description
                    </InputLabel>
                    <TextField
                      sx={{ width: '100%' , padding: '0px' }}
                      value={value}
                      onChange={onChange}
                      size='small'
                      multiline
                      rows={8}
                    />
                  </Box>
                )}
              />
              {errors.description && (
                <ValidationError message={errors?.description?.message} />
              )}
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Button
              sx={{
                fontSize: 11,
                marginTop: '12px'
              }}
              color='secondary'
              type='submit'
              variant='contained'
              data-testId='reopen-estimate-submit'
            >
              Submit
            </Button>
            <Button
              sx={{
                fontSize: 11,
                marginTop: '12px',
                marginLeft: '4px'
              }}
              onClick={handleOnCancelClick}
            >
              Cancel
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default EstimateReopen;
