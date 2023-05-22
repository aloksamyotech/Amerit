import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Box, Grid, useTheme } from '@mui/material';
import { getMessages } from 'src/services/messaging';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import MessageActions from './MessageActions';
import { Message as MessageType } from './types';

const MessagesPane = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const router = useRouter();

  const { vendorRepairOrderId } = router.query;

  const theme = useTheme();

  useQuery(['messages', vendorRepairOrderId], () =>
    getMessages().then((messageResults) => setMessages(messageResults))
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <MessageList messages={messages} />
      <Grid
        item
        container
        direction='column'
        rowGap='7px'
        sx={{
          padding: '10px 15px',
          borderTop: `1px solid ${theme.palette.charcoal[200]}`
        }}
      >
        <Grid item>
          <MessageInput />
        </Grid>
        <Grid
          item
          container
          justifyContent='flex-end'
          alignItems='center'
          columnGap='5px'
        >
          <MessageActions />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MessagesPane;
