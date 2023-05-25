import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const Preview = ({ file, styles }: { file: File; styles?: any }) => {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    setUrl(URL.createObjectURL(file));
  }, [file]);

  return (
    <Box
      sx={{
        flex: 1,
        overflow: 'hidden',
        ...styles
      }}
    >
      {/* Inline style here because importing causes typing issues for some reason */}
      <img
        style={{ objectFit: 'scale-down', width: '100%', height: '100%' }}
        src={url}
        alt={file.name}
      />
    </Box>
  );
};

export default Preview;
