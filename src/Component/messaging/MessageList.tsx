import { Box, useTheme } from '@mui/material';
import Message from './Message';
import { Message as MessageType } from './types';

const MessageList = ({ messages }: { messages: MessageType[] }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        margin: '5px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        flex: '1 1 auto',
        overflowY: 'auto',
        '::-webkit-scrollbar': {
          width: '6px'
        },
        '::-webkit-scrollbar-track': {
          background: theme.palette.common.white,
          borderRadius: '3px'
        },
        '::-webkit-scrollbar-thumb': {
          background: theme.palette.charcoal[200]
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: theme.palette.charcoal[300]
        }
      }}
    >
      {/*
      TODO: alignment and color should be dictated by the sender and whether
      they are the current user, for now we'll just mock it
      */}
      {messages.map((message, index) => (
        <Message
          key={message.id}
          message={message}
          color={
            index % 2 === 0
              ? theme.palette.gold[100]
              : theme.palette.charcoal[100]
          }
          align={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </Box>
  );
};

export default MessageList;
