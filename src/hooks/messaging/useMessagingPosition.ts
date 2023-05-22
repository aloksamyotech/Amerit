import { useState, useEffect } from 'react';
import { DraggableEventHandler } from 'react-draggable';
import { Coordinates, PredefinedPositions } from '@components/messaging/types';
import { MESSAGE_BOX_WIDTH, MESSAGE_BOX_HEIGHT } from 'src/constants';

const useMessagingPosition = () => {
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState<number>(
    window.innerHeight
  );

  const predefinedPositions: PredefinedPositions = {
    topLeft: { x: 0, y: 0 },
    topRight: { x: viewportWidth * 0.8 - MESSAGE_BOX_WIDTH, y: 0 },
    bottomRight: {
      x: viewportWidth * 0.8 - MESSAGE_BOX_WIDTH,
      y: viewportHeight * 0.87 - MESSAGE_BOX_HEIGHT
    },
    bottomLeft: {
      x: 0,
      y: viewportHeight * 0.87 - MESSAGE_BOX_HEIGHT
    }
  };

  const [position, setPosition] = useState<Coordinates>(
    predefinedPositions.topRight
  );

  useEffect(() => {
    window.addEventListener('resize', updateViewportDimensions);

    return () => {
      window.removeEventListener('resize', updateViewportDimensions);
    };
  }, []);

  const updateViewportDimensions = () => {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
  };

  const updatePosition: DraggableEventHandler = (_, data) => {
    const { lastX, lastY } = data;
    setPosition({
      x: lastX,
      y: lastY
    });
  };

  const setPredefinedPosition = (positionName: keyof PredefinedPositions) => {
    setPosition(predefinedPositions[positionName]);
  };

  return {
    position,
    updatePosition,
    setPredefinedPosition
  };
};

export default useMessagingPosition;
