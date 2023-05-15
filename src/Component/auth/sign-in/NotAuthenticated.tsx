import { signIn } from 'next-auth/react';
import { Box, Typography } from '@mui/material';

export default function NotAuthenticated() {
  return (
    <Box onClick={() => signIn('azure-ad-b2c')}>
      <Typography sx={{ textDecoration: 'underline', cursor: 'pointer' }}>Sign in</Typography>
    </Box>
  );
}
