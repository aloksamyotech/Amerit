import { Box, Paper, Typography } from '@mui/material';
import Search from '@components/search';
import VendorRepairOrderList from '@components/vendor-repair-order-list';
import useVendorRepairOrderSearch from '@hooks/search';
import { CONTENT_MAX_WIDTH } from 'src/constants';

const Home = () => {
  const { searchResults, setSearchData } = useVendorRepairOrderSearch();

  return (
    <Box
      sx={{
        paddingTop: '30px',
        maxWidth: CONTENT_MAX_WIDTH,
        margin: '0 auto'
      }}
    >
      <Typography
        component={'h3'}
        sx={{ fontWeight: 700, fontSize: '20px', marginBottom: '10px' }}
      >
        Repair Order Requests
      </Typography>
      <Paper
        elevation={6}
        data-testid='home'
        sx={(theme) => ({
          border: `1px solid ${theme.palette.coolGrey.main}`,
          borderRadius: '8px'
        })}
      >
        <Box sx={{ padding: '20px' }}>
          <Search setSearchData={setSearchData} searchResults={searchResults} />
        </Box>
        <VendorRepairOrderList searchResults={searchResults} />
      </Paper>
    </Box>
  );
};

export default Home;
