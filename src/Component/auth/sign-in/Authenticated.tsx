import { signOut } from 'next-auth/react';
import { Session } from 'next-auth/core/types';
import { Box, Button, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Authenticated({ session }: { session: Session }) {
  const { user } = session;

  // TODO: This is now more than just a "login" / "logout" component
  // we need to add items for accessing messages and profile
  // We need a component encapsulating these things

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Typography>Hello {user?.name}</Typography>
      <Button onClick={() => alert('User placeholder')}>
        <FontAwesomeIcon
          data-testid='user-icon'
          title='User menu'
          icon='user'
          size='lg'
          cursor='pointer'
        />
      </Button>
      <Button data-testid='signout-button' onClick={() => signOut()}>
        <FontAwesomeIcon
          title='Sign out'
          icon='arrow-right-from-bracket'
          size='xl'
          cursor='pointer'
        />
      </Button>
    </Box>
  );
}
