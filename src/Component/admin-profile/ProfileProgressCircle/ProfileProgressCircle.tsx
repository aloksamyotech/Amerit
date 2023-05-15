import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import { useProfile } from '../context/ProfileContext';

export const ProfileProgressCircle = () => {
  const theme = useTheme();
  const { values } = useProfile();

  return (
    <Box>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          size={100}
          variant='determinate'
          value={Number(values?.completed)}
          sx={{
            color: theme.palette.secondary.main
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography variant='h6' component='div' color='secondary'>
            {values?.completed}%
          </Typography>
          <Typography variant='caption' component='div' color='text.secondary'>
            completed
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
