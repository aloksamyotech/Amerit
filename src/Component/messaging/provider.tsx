import { createContext, useState, ReactNode } from 'react';
import useMessagingPosition from '@hooks/messaging';
import { MessagingContext as MessagingContextType } from './types';

const MessagingContext = createContext({} as MessagingContextType);

const MessagingProvider = ({ children }: { children: ReactNode }) => {
  const [messagingOpen, setMessagingOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'messages' | 'attachments'>(
    'messages'
  );
  const [showUpload, setShowUpload] = useState<boolean>(false);

  const { position, updatePosition, setPredefinedPosition } =
    useMessagingPosition();

  const messagingContextValues: MessagingContextType = {
    messagingOpen,
    setMessagingOpen,
    activeTab,
    setActiveTab,
    showUpload,
    setShowUpload,
    position,
    updatePosition,
    setPredefinedPosition
  };

  return (
    <MessagingContext.Provider value={messagingContextValues}>
      {children}
    </MessagingContext.Provider>
  );
};

export default MessagingProvider;
export { MessagingContext };
