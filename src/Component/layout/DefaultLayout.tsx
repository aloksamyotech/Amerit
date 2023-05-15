import Header from '../header';
import { Box } from '@mui/material';
import { HEADER_HEIGHT } from 'src/constants';
import { LayoutProps } from './types';
import { mainContentContainer, contentContainer } from './styles';

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={(theme) => ({
        height: '100%',
        background: `linear-gradient(
          to bottom,
          ${theme.palette.common.white} ${HEADER_HEIGHT}px,
          ${theme.palette.goldLight.main} ${HEADER_HEIGHT}px 200px,
          ${theme.palette.common.white} 200px
        )`
      })}
    >
      <Box>
        <Header />
        <Box sx={mainContentContainer}>
          <Box component={'main'} sx={contentContainer}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
