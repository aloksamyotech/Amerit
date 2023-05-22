import { useState, useContext } from 'react';
import { Box } from '@mui/material';
import { MessagingContext } from './provider';
import SnapperButton from './SnapperButton';
import { NextPositions } from './types';

const PositionSnapper = () => {
  const { setPredefinedPosition } = useContext(MessagingContext);

  const nextPositions: NextPositions = {
    topLeft: 'topRight',
    topRight: 'bottomRight',
    bottomRight: 'bottomLeft',
    bottomLeft: 'topLeft'
  };

  const [positionName, setPositionName] =
    useState<keyof NextPositions>('topRight');

  const updatePosition = () => {
    const newPosition = nextPositions[positionName];
    setPositionName(newPosition);
    setPredefinedPosition(newPosition);
  };

  return (
    <Box
      onClick={updatePosition}
      style={{
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '6px 6px',
        gridTemplateRows: '6px 6px',
        columnGap: '2px',
        rowGap: '2px'
      }}
    >
      <SnapperButton position={positionName} myPosition='topLeft' />
      <SnapperButton position={positionName} myPosition='topRight' />
      <SnapperButton position={positionName} myPosition='bottomLeft' />
      <SnapperButton position={positionName} myPosition='bottomRight' />
    </Box>
  );
};

export default PositionSnapper;
