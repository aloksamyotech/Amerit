import { Dispatch, SetStateAction } from 'react';
import { DraggableEventHandler } from 'react-draggable';

export interface Message {
  id: number;
  name: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface MessageProps {
  message: Message;
  color: string;
  align: 'left' | 'right';
}

export interface Attachment {
  id: number;
  filename: string;
  description: string;
  timestamp: string;
}

export interface AttachmentProps {
  attachment: Attachment;
  background: string;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface PredefinedPositions {
  [key: string]: Coordinates;
}

export interface NextPositions {
  [key: string]: string;
}

export interface MessagingContext {
  messagingOpen: boolean;
  setMessagingOpen: Dispatch<SetStateAction<boolean>>;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  position: Coordinates;
  updatePosition: DraggableEventHandler;
  setPredefinedPosition: (positionName: keyof PredefinedPositions) => void;
}
