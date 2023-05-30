import { Box, Paper, Card, CardContent } from '@mui/material';
import ProgressHeader from '../ProgressHeader';
import VerticalTabs from '../VerticalTabs';
import { ProfileProvider } from '../context/ProfileContext';

const AdminProfileDashboard = ({ path }: { path: string }) => {
  return (
    <ProfileProvider>
      <Box>
        <Paper
          sx={{
            padding: '1.0rem'
          }}
        >
          <ProgressHeader />
        </Paper>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2.0rem' }}>
              <Box width='100%'>
                <VerticalTabs path={path} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </ProfileProvider>
  );
};

export default AdminProfileDashboard;
