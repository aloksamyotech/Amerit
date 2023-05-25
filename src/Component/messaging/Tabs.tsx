import { useContext } from 'react';
import { Grid, Tabs as MuiTabs, Tab, useTheme } from '@mui/material';
import { MessagingContext } from './provider';
import { FONTS } from '@core/theme/constants';

const Tabs = () => {
  const theme = useTheme();

  const { activeTab, setActiveTab, setShowUpload } =
    useContext(MessagingContext);

  const updateTab = (
    _: React.ChangeEvent<{}>,
    newTab: 'messages' | 'attachments'
  ) => {
    setActiveTab(newTab);
    setShowUpload(false);
  };

  return (
    <>
      <Grid
        item
        sx={{
          borderBottom: `1px solid ${theme.palette.charcoal[200]}`,
          padding: '0 20px',
          flex: '0 0 auto'
        }}
      >
        <MuiTabs
          value={activeTab}
          onChange={updateTab}
          indicatorColor='secondary'
          sx={{
            '& .MuiButtonBase-root': {
              fontSize: '12px',
              fontWeight: 700,
              fontFamily: FONTS.EXO2
            }
          }}
        >
          <Tab
            value='messages'
            label='Messages'
            id='messaging-messages-tab'
            aria-controls='messaging-messages-panel'
          />
          <Tab
            value='attachments'
            label='Attachments'
            id='messaging-attachments-tab'
            aria-controls='messaging-attachments-panel'
          />
        </MuiTabs>
      </Grid>
    </>
  );
};

export default Tabs;
