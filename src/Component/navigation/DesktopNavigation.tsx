import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@mui/material';
import { menuItems } from './util';
import { NavigationItem } from './types';

const DesktopNavigation = ({
  handleCloseNavMenu
}: {
  handleCloseNavMenu: any;
}) => (
  <Box
    sx={{
      marginLeft: '20px',
      flexGrow: 1,
      display: { xs: 'none', md: 'flex' },
      gap: '30px',
      fontSize: '14px',
      textTransform: 'uppercase',
      fontWeight: 800
    }}
  >
    {menuItems.map((item: NavigationItem) => (
      <Box
        key={item.id}
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'charcoal.main', display: 'block' }}
      >
        <Link href={item.path}>
          {item.icon ? (
            <FontAwesomeIcon
              icon={item.icon}
              size='xl'
              data-testid='desktop-navigation-icon'
            />
          ) : (
            item.text
          )}
        </Link>
      </Box>
    ))}
  </Box>
);

export default DesktopNavigation;
