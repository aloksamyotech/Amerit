import {
  DragEventHandler,
  DragEvent,
  ChangeEvent,
  useRef,
  useState
} from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { AttachFile } from '@mui/icons-material';
import { dropZone } from './style';

const DropZone = ({
  handleFile,
  allowedFileTypes,
  maxFileSize,
  styles
}: {
  handleFile: (file: File) => void;
  allowedFileTypes?: string[];
  maxFileSize?: number;
  styles?: any;
}) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const theme = useTheme();

  const isAllowedFileType = (type: string) => {
    return allowedFileTypes ? allowedFileTypes.includes(type) : true;
  };

  const hasValidFileSize = (size: number) => {
    return maxFileSize ? size <= maxFileSize : true;
  };

  const canUpload = (file: File) => {
    if (!disabled && hasValidFileSize(file.size)) {
      return true;
    }

    return false;
  };

  const handleDragOver: DragEventHandler<HTMLDivElement> = (
    event: DragEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (!isAllowedFileType(event.dataTransfer.items[0].type)) {
      setDisabled(true);
      setError('File type not allowed');
    } else {
      setDisabled(false);
      setError('');
    }
  };

  const handleOnDragLeave: DragEventHandler<HTMLDivElement> = () => {
    setDisabled(false);
    setError('');
  };

  const handleDrop: DragEventHandler<HTMLDivElement> = (
    event: DragEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (canUpload(file)) {
      setError('');
      handleFile(file);
    } else {
      setError('File size too large');
    }
    setDisabled(false);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled && event?.target?.files?.length) {
      handleFile(event.target.files[0]);
    }
  };

  let finalStyles = {
    ...dropZone,
    ...styles
  };

  if (disabled) {
    finalStyles = {
      ...finalStyles,
      background: theme.palette.warningRed.main
    };
  }

  // Fragment, rather than Box, wrapping this return
  // so we don't break the flex layout
  //
  // TODO: We use a div here rather than a Box because,
  // for some reason, Box is blocking the Drag/Drop events
  return (
    <>
      <div
        style={finalStyles}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleOnDragLeave}
        onClick={() => fileInput?.current?.click()}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '5px',
            pointerEvents: 'none'
          }}
        >
          <AttachFile fontSize='large' />
          <Typography>Drop file here to upload</Typography>
          <input
            type='file'
            ref={fileInput}
            hidden
            onChange={handleInput}
          ></input>
        </Box>
      </div>
      {error.length > 0 && (
        <Typography
          variant='caption'
          sx={{ margin: '5px 0', color: theme.palette.warningRed.main }}
        >
          {error}
        </Typography>
      )}
    </>
  );
};

export default DropZone;
