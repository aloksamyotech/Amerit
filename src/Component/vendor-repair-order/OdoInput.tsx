import { Controller, Control, FieldErrors } from 'react-hook-form';
import { Box, TextField, FormHelperText } from '@mui/material';
import { EstimateMetadata } from './types';

const OdoInput = ({
  control,
  errors
}: {
  control: Control<EstimateMetadata>;
  errors: FieldErrors<EstimateMetadata>;
}) => (
  <>
    <Controller
      name='odo'
      control={control}
      render={({ field: { value, onChange } }: any) => (
        <Box>
          <TextField
            id='odo'
            value={value}
            onChange={onChange}
            size='small'
            sx={{ width: '80%', '& .MuiInputBase-input': { fontSize: '14px' } }}
          />
        </Box>
      )}
    />
    {errors.odo && (
      <FormHelperText sx={{ color: 'error.main', marginLeft: '0px' }}>
        {errors.odo.message}
      </FormHelperText>
    )}
  </>
);

export default OdoInput;
