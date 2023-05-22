import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Box, Button, Badge } from '@mui/material';
import { AttachFile } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getMessages } from 'src/services/messaging';
import { MessagingContext } from './provider';
import { Message } from './types';

const Toolbar = () => {
  const { setMessagingOpen, setActiveTab } = useContext(MessagingContext);
  const [messages, setMessages] = useState<Message[]>([]);

  const router = useRouter();

  const { vendorRepairOrderId } = router.query;

  const unreadMessages = messages.filter((message) => !message.read);

  useQuery(['messages', vendorRepairOrderId], () =>
    getMessages().then((messageResults) => setMessages(messageResults))
  );

  const openMessaging = () => {
    setActiveTab('messages');
    setMessagingOpen(true);
  };

  const openAttachments = () => {
    setActiveTab('attachments');
    setMessagingOpen(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '5px'
      }}
    >
      <Button
        size='large'
        onClick={openAttachments}
        sx={{ padding: 0, minWidth: 0, fontSize: '1.1em' }}
      >
        <AttachFile />
      </Button>
      <Button
        size='large'
        onClick={openMessaging}
        sx={{ padding: 0, minWidth: 0, fontSize: '1.1em' }}
      >
        <Badge
          badgeContent={unreadMessages.length}
          max={99}
          color='error'
          sx={(theme) => ({
            '.MuiBadge-badge': {
              border: `2px solid ${theme.palette.goldLight.main}`
            }
          })}
        >
          <FontAwesomeIcon icon='envelope' size='xl' />
        </Badge>
      </Button>
    </Box>
  );
};

export default Toolbar;
