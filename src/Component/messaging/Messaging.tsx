import { useContext } from 'react';
import Draggable from 'react-draggable';
import { Grid, Paper } from '@mui/material';
import { MessagingContext } from './provider';
import {
  CONTAINER_BORDER_RADIUS,
  MESSAGE_BOX_HEIGHT,
  MESSAGE_BOX_WIDTH
} from 'src/constants';
import Header from './Header';
import Tabs from './Tabs';
import ContentPane from './ContentPane';

const Messaging = () => {
  const { setMessagingOpen, position, updatePosition } =
    useContext(MessagingContext);

  const closeMessaging = () => {
    setMessagingOpen(false);
  };

  return (
    <Draggable handle='.handle' position={position} onStop={updatePosition}>
      <Paper
        elevation={5}
        sx={{
          width: `${MESSAGE_BOX_WIDTH}px`,
          height: `${MESSAGE_BOX_HEIGHT}px`,
          position: 'fixed',
          borderRadius: `${CONTAINER_BORDER_RADIUS}px`,

          // zIndex is one more than the z-index of the AppBar
          zIndex: 1101
        }}
      >
        <Grid container direction='column' sx={{ height: '100%' }}>
          <Header closeMessaging={closeMessaging} />
          <Tabs />
          <ContentPane />
        </Grid>
      </Paper>
    </Draggable>
  );
};

export default Messaging;
