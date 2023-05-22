import { useContext } from 'react';
import { Box } from '@mui/material';
import { MessagingContext } from './provider';
import MessagesPane from './MessagesPane';
import AttachmentsPane from './AttachmentsPane';

const ContentPane = () => {
  const { activeTab } = useContext(MessagingContext);

  return (
    <Box
      role='tabpanel'
      id={`messaging-${activeTab}-panel`}
      aria-labelledby={`messaging-${activeTab}-tab`}
      sx={{ display: 'flex', flex: '1 1 auto', height: 0 }}
    >
      {activeTab === 'messages' ? <MessagesPane /> : <AttachmentsPane />}
    </Box>
  );
};

export default ContentPane;
