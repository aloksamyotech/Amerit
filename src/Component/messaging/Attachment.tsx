import { Button, Grid } from '@mui/material';
import { FormattedDateTime } from '@components/common/vendor-repair-order';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AttachmentProps } from './types';

const Attachment = ({ attachment, background }: AttachmentProps) => {
  const { filename, description, timestamp } = attachment;

  return (
    <Grid
      container
      direction='column'
      sx={{
        padding: '10px 13px',
        fontSize: '14px',
        background
      }}
      rowGap='5px'
    >
      <Grid item container>
        <Grid item xs={6} sx={{ fontSize: '11px', fontWeight: 700 }}>
          {filename}
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
      <Grid item container sx={{ fontSize: '14px' }}>
        <Grid item xs={11} sx={{ paddingRight: '10px' }}>
          {description}
        </Grid>
        <Grid item xs={1} sx={{ textAlign: 'right' }}>
          <Button
            sx={{ padding: 0, minWidth: 0 }}
            onClick={() => alert('Download placeholder')}
          >
            <FontAwesomeIcon icon='download' />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Attachment;
