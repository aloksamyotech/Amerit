import { Button, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PositionSnapper from './PositionSnapper';

const Header = ({ closeMessaging }: { closeMessaging: () => void }) => (
  <Grid
    item
    container
    flex='0 0 auto'
    alignItems='center'
    sx={{ flex: '0 0 auto', padding: '2px 8px 0 8px' }}
  >
    <Grid item xs={1}>
      <PositionSnapper />
    </Grid>
    <Grid
      item
      xs={10}
      sx={{ height: '16px', cursor: 'move' }}
      className='handle'
    ></Grid>
    <Grid item xs={1} sx={{ textAlign: 'right' }}>
      <Button onClick={closeMessaging} sx={{ padding: 0, minWidth: 0 }}>
        <FontAwesomeIcon icon='xmark' />
      </Button>
    </Grid>
  </Grid>
);

export default Header;
