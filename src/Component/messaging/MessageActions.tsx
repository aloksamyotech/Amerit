import { useContext } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { AttachFile } from '@mui/icons-material';
import { MessagingContext } from './provider';

const MessageActions = () => {
  const { setShowUpload, setActiveTab } = useContext(MessagingContext);

  const initiateAttachments = () => {
    setShowUpload(true);
    setActiveTab('attachments');
  };

  return (
    <>
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '11px' }}>file_name.ext</Typography>
        <Button onClick={initiateAttachments} sx={{ minWidth: 0, padding: 0 }}>
          <AttachFile />
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={() => alert('Send placeholder')}
          variant='contained'
          color='secondary'
        >
          Send
        </Button>
      </Grid>
    </>
  );
};

export default MessageActions;
