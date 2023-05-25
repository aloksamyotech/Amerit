import { useState, useEffect, ChangeEvent } from 'react';
import {
  Box,
  Button,
  TextField,
  SxProps,
  Theme,
  useTheme
} from '@mui/material';
import { CONTAINER_BORDER_RADIUS } from 'src/constants';
import DropZone from './DropZone';
import Filename from './Filename';
import Preview from './Preview';

const FileUpload = ({
  preview,
  sx,
  dropZoneStyles,
  previewStyles,
  allowRenameFile,
  allowDescription,
  handleUpload,
  allowedFileTypes,
  maxFileSize
}: {
  preview?: boolean;
  sx?: SxProps<Theme>;
  dropZoneStyles?: any;
  previewStyles?: any;
  allowRenameFile?: boolean;
  allowDescription?: boolean;
  handleUpload: (file: File, fileName: string) => void;
  allowedFileTypes?: string[];
  maxFileSize?: number;
}) => {
  const [file, setFile] = useState<File>();
  const [fileName, setFileName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const theme = useTheme();

  useEffect(() => {
    if (file) {
      setFileName(file.name);
    }
  }, [file]);

  const handleFile = (file: File) => {
    if (file) {
      setFile(file);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: `${theme.palette.charcoal[100]}`,
        borderRadius: `${CONTAINER_BORDER_RADIUS}px`,
        ...sx
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          textAlign: 'center',
          gap: '10px'
        }}
      >
        <DropZone
          handleFile={handleFile}
          styles={dropZoneStyles}
          allowedFileTypes={allowedFileTypes}
          maxFileSize={maxFileSize}
        />
        {file && (
          <Box
            sx={{
              flex: 0.25,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {allowRenameFile ? (
              <Filename fileName={fileName} setFileName={setFileName} />
            ) : (
              <Filename fileName={fileName} />
            )}
          </Box>
        )}
        {file && allowDescription && (
          <Box
            sx={{
              flex: 0.25,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <TextField
              fullWidth
              sx={{ margin: '0 10px' }}
              placeholder='Description'
              value={description}
              onChange={(
                event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setDescription(event.target.value)}
            />
          </Box>
        )}
        {preview && file && <Preview file={file} styles={previewStyles} />}
        <Button
          variant='contained'
          color='secondary'
          disabled={!file}
          onClick={() => file && handleUpload(file, fileName)}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default FileUpload;
