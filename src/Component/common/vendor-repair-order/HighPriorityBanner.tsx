import { Box } from '@mui/material';

const HighPriorityBanner = () => (
  <Box
    role='alert'
    sx={(theme) => ({
      background: theme.palette.warningRed.main,
      padding: '3px',
      textAlign: 'center',
      fontWeight: 700,
      color: theme.palette.common.white
    })}
  >
    High Priority!
  </Box>
);

export default HighPriorityBanner;
