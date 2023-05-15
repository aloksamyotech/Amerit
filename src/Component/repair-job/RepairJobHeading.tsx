import { Box, Typography } from '@mui/material';
import { RepairJob } from '@components/common/vendor-repair-order/types';

const RepairJobHeading = ({
  repairJob,
  count
}: {
  repairJob: RepairJob;
  count: number;
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        variant='h2'
        sx={{
          fontSize: '21px',
          fontWeight: 600,
          color: 'charcoal.main',
          marginRight: '0.5em'
        }}
      >
        Job Section: {count}
      </Typography>
      |
      <Typography
        variant='h3'
        sx={{
          fontSize: '16px',
          fontWeight: 600,
          color: 'charcoal.main',
          marginLeft: '0.5em'
        }}
      >
        VMRS:
      </Typography>
      <Typography
        variant='h3'
        sx={{
          fontSize: '16px',
          color: 'charcoal.main',
          marginLeft: '0.5em'
        }}
      >
        {repairJob.vmrs}
      </Typography>
    </Box>
  );
};

export default RepairJobHeading;
