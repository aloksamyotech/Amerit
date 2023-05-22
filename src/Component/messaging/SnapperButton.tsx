import { Box } from '@mui/material';
import { NextPositions } from './types';

const SnapperButton = ({
  position,
  myPosition
}: {
  position: keyof NextPositions;
  myPosition: string;
}) => (
  <Box
    sx={(theme) => ({
      backgroundColor:
        position === myPosition
          ? theme.palette.charcoal.main
          : theme.palette.charcoal[200]
    })}
  />
);

export default SnapperButton;
