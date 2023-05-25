import { useContext } from 'react';
import { Box } from '@mui/material';
import { MessagingContext } from './provider';
import MessagesPane from './MessagesPane';
import AttachmentsPane from './AttachmentsPane';
import UploadPane from './UploadPane';

const ContentPane = () => {
  const { activeTab, showUpload } = useContext(MessagingContext);

  if (showUpload) {
    return (
      <Box sx={{ display: 'flex', flex: '1 1 auto', height: 0 }}>
        <UploadPane />
      </Box>
    );
  }

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
