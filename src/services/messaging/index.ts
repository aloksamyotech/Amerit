import { MESSAGES_MOCKS, ATTACHMENTS_MOCKS } from 'src/mocks/messaging';
import { Message, Attachment } from '@components/messaging/types';

// TODO: Get actual data from the API
export const getMessages: () => Promise<Message[]> = () => {
  return Promise.resolve(MESSAGES_MOCKS);
};

// TODO: Get actual data from the API
export const getAttachments: () => Promise<Attachment[]> = () => {
  return Promise.resolve(ATTACHMENTS_MOCKS);
};
