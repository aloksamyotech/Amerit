import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const AdminHeader = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyItems: 'center',
        background: 'white'
      }}
    >
      <Box>
        <img
          src='/images/logo_header.svg'
          width='165'
          height='70'
          alt='logo'
          onClick={() => {
            router.push('/shop-admin');
          }}
        />
      </Box>
      <Box
        sx={{
          direction: 'row',
          gap: '1.0rem',
          paddingRight: '$4'
        }}
      >
        <Button
          onClick={() => {
            router.push('/shop-admin/login');
          }}
        >
          Login
        </Button>
        <Button color='secondary' type='submit' variant='contained'>
          Filter
        </Button>
        <Button
          onClick={() => {
            router.push('/shop-admin/signup');
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default AdminHeader;
