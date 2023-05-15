import Link from 'next/link';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuItems } from './util';
import { NavigationItem } from './types';

const MobileNavigation = ({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu
}: {
  handleOpenNavMenu: any;
  anchorElNav: any;
  handleCloseNavMenu: any;
}) => (
  <Box
    sx={{
      flexGrow: 1,
      display: { xs: 'flex', md: 'none' }
    }}
  >
    <IconButton
      size='large'
      aria-label='account of current user'
      aria-controls='menu-appbar'
      aria-haspopup='true'
      onClick={handleOpenNavMenu}
      color='inherit'
    >
      <FontAwesomeIcon icon='bars' />
    </IconButton>
    <Menu
      id='menu-appbar'
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: 'block', md: 'none' }
      }}
    >
      {menuItems.map((item: NavigationItem) => (
        <MenuItem key={item.id} onClick={handleCloseNavMenu}>
          <Link href={item.path}>
            <Typography textAlign='center'>{item.text}</Typography>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  </Box>
);

export default MobileNavigation;
