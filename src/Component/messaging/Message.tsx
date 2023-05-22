import { Grid } from '@mui/material';
import { FormattedDateTime } from '@components/common/vendor-repair-order';
import { MessageProps } from './types';
import { messageLeft, messageRight } from './styles';

const Message = ({ message, color, align }: MessageProps) => {
  const styles = {
    padding: '10px 13px',
    backgroundColor: color,
    fontSize: '14px',
    width: '95%',
    ...(align === 'left' ? messageLeft : messageRight)
  };

  const { name, message: messageText, timestamp } = message;

  return (
    <Grid container direction='column' sx={styles} rowGap='5px'>
      <Grid item container>
        <Grid item xs={6} sx={{ fontSize: '11px', fontWeight: 700 }}>
          {name}
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'right' }}>
          <FormattedDateTime
            date={timestamp}
            direction='row'
            justify='right'
            sx={{
              fontSize: '11px',
              fontWeight: 700
            }}
          />
        </Grid>
      </Grid>
      <Grid item sx={{ fontSize: '14px' }}>
        {messageText}
      </Grid>
    </Grid>
  );
};

export default Message;
