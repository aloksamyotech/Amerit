import { Controller, Control } from 'react-hook-form';
import { Box, TextField } from '@mui/material';
import { VendorRepairOrder } from './types';

const WorkOrderInput = ({
  control
}: {
  control: Control<VendorRepairOrder>;
}) => (
  <Controller
    name='workOrder'
    control={control}
    render={({ field: { value, onChange } }: any) => (
      <Box>
        <TextField
          id='workOrder'
          value={value}
          onChange={onChange}
          size='small'
          sx={{ width: '80%', '& .MuiInputBase-input': { fontSize: '14px' } }}
        />
      </Box>
    )}
  />
);

export default WorkOrderInput;
