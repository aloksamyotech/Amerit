import { TextField } from '@mui/material';

const MessageBox = () => (
  <TextField
    sx={{
      '& .MuiOutlinedInput-root': {
        fontSize: '12px',
        padding: '7px 10px'
      }
    }}
    autoFocus
    fullWidth
    multiline
    rows='4'
    inputProps={{ maxlength: '2000' }}
    placeholder='Type a message...'
  />
);

export default MessageBox;
