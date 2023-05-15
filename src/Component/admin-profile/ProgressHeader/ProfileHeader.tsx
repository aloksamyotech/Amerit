import { Box,  Typography } from '@mui/material';
import { ProfileProgressCircle } from '../ProfileProgressCircle/ProfileProgressCircle';

export const ProgressHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <ProfileProgressCircle />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginLeft: '1.5rem'
        }}
      >
        <Typography variant='h4'>Complete your profile</Typography>
        <Typography variant='body2'>
          Thank you for applying to be an Amerit Fleet Vendor. Your application
          will not be processed until your profile is complete. You have added a
          shop and all documents have been uploaded and you have agreed to the
          Vendor Terms. Please make sure you list of all services for your
          shops.
        </Typography>
      </Box>
    </Box>
  );
};
