import { useState } from 'react';
import { AppBar, Container, Box, Toolbar } from '@mui/material';
import SignIn from '@components/auth/sign-in';
import { DesktopNavigation, MobileNavigation } from '@components/navigation';
import Logo from '@components/logo';
import { HEADER_HEIGHT, CONTENT_MAX_WIDTH } from 'src/constants';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position='sticky'
      elevation={0}
      sx={{
        '&.MuiAppBar-root': {
          backgroundColor: 'common.white',
          color: 'charcoal.main'
        },
        height: `${HEADER_HEIGHT - 1}px`,
        maxWidth: CONTENT_MAX_WIDTH,
        margin: '0 auto'
      }}
    >
      <Container
        sx={{
          '&.MuiContainer-root': {
            paddingLeft: 0,
            paddingRight: 0,
            maxWidth: 'none'
          }
        }}
      >
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <Logo width='130' height='45' />
          </Box>
          <MobileNavigation
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
          />
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <Logo width='130' height='45' />
          </Box>
          <DesktopNavigation handleCloseNavMenu={handleCloseNavMenu} />
          <Box sx={{ flexGrow: 0 }}>
            <SignIn />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
