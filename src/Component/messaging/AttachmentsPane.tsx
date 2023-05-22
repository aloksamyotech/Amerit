import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Box, useTheme } from '@mui/material';
import { getAttachments } from 'src/services/messaging';
import Attachment from './Attachment';
import { Attachment as AttachmentType } from './types';

const AttachmentsPane = () => {
  const [attachments, setAttachments] = useState<AttachmentType[]>([]);
  const router = useRouter();

  const { vendorRepairOrderId } = router.query;

  const theme = useTheme();

  useQuery(['attachments', vendorRepairOrderId], () =>
    getAttachments().then((attachmentResults) =>
      setAttachments(attachmentResults)
    )
  );

  return (
    <Box
      sx={{
        margin: '5px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        flex: '1 1 auto',
        overflowY: 'auto',
        '::-webkit-scrollbar': {
          width: '6px'
        },
        '::-webkit-scrollbar-track': {
          background: theme.palette.common.white,
          borderRadius: '3px'
        },
        '::-webkit-scrollbar-thumb': {
          background: theme.palette.charcoal[200]
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: theme.palette.charcoal[300]
        }
      }}
    >
      {attachments.map((attachment, index) => (
        <Attachment
          key={attachment.id}
          attachment={attachment}
          background={
            index % 2 === 0
              ? theme.palette.common.white
              : theme.palette.charcoal[100]
          }
        />
      ))}
    </Box>
  );
};

export default AttachmentsPane;
