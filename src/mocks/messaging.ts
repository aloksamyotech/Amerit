import { Message, Attachment } from '@components/messaging/types';

export const MESSAGES_MOCKS: Message[] = [
  {
    id: 1,
    name: 'John Doe',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
    timestamp: '2023-05-05 09:13:00',
    read: true
  },
  {
    id: 2,
    name: 'Jane Smith',
    message: 'Aenean at nulla ut justo laoreet iaculis.',
    timestamp: '2023-05-06 14:34:00',
    read: true
  },
  {
    id: 3,
    name: 'John Doe',
    message: 'Mauris volutpat eleifend commodo.',
    timestamp: '2023-05-07 10:04:00',
    read: false
  },
  {
    id: 4,
    name: 'Jane Smith',
    message:
      'Nam nibh purus, scelerisque et semper vestibulum, accumsan sed dolor.',
    timestamp: '2023-05-07 13:37:00',
    read: false
  },
  {
    id: 5,
    name: 'John Doe',
    message: 'Mauris volutpat eleifend commodo.',
    timestamp: '2023-05-07 14:59:00',
    read: false
  }
];

export const ATTACHMENTS_MOCKS: Attachment[] = [
  {
    id: 1,
    filename: 'file1.txt',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam',
    timestamp: '2023-05-05 09:13:00'
  },
  {
    id: 2,
    filename: 'file2.pdf',
    description: 'Aenean at nulla ut justo laoreet iaculis.',
    timestamp: '2023-05-06 14:34:00'
  },
  {
    id: 3,
    filename: 'file3.docx',
    description: 'Mauris volutpat eleifend commodo.',
    timestamp: '2023-05-07 10:04:00'
  },
  {
    id: 4,
    filename: 'file4.jpg',
    description:
      'Nam nibh purus, scelerisque et semper vestibulum, accumsan sed dolor.',
    timestamp: '2023-05-07 13:37:00'
  }
];
