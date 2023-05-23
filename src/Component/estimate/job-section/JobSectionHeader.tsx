import { Box, Grid, Typography } from '@mui/material';
import JobSectionHeading from './JobSectionHeading';
import { Estimate } from './types';

const JobSectionHeader = ({
  id,
  type,
  vmrs,
  estimateAmount,
  actualAmount,
}: Estimate) => {
  return (
    <Grid container style={{ height: '1px', marginBottom: '24px' }}>
      <Grid item xs={10}>
        <Box display="flex">
          <JobSectionHeading sectionNumber={id || 0} />
          <Box display="flex" sx={{ marginTop: '4px' }}>
            <Typography fontSize={11} fontWeight={700} ml={3} mr={1}>
              Type:
            </Typography>
            <Typography fontSize={11} fontWeight={300}>
              {type}
            </Typography>
          </Box>
          <Box display="flex"  sx={{marginTop:'5px'}}>
            <Typography fontSize={11} fontWeight={700} ml={3} mr={1}>
              VMRS:
            </Typography>
            <Typography fontSize={11} fontWeight={300}>
              {vmrs}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={2} sx={{ marginTop: '4px'}}>
        <Box display="flex">
          <Box display="flex" ml={1}>
            <Typography fontSize={11} fontWeight={700} variant="h6">
              Estimate
            </Typography>
            <Typography fontSize={11} fontWeight={300} ml={1}>
              {estimateAmount}
            </Typography>
          </Box>
          <Box ml={1} mb={2} mt={-0.5}>
            |
          </Box>
          <Box display="flex" ml={1}>
            <Typography fontSize={11} fontWeight={700} variant="h6">
              Actual
            </Typography>
            <Typography fontSize={11} fontWeight={300} ml={1}>
              {actualAmount}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default JobSectionHeader;
