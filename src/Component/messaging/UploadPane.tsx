import { useTheme } from '@mui/material';
import FileUpload from '@components/file-upload';
import { MESSAGE_BOX_WIDTH, CONTAINER_BORDER_RADIUS } from 'src/constants';

const UploadPane = () => {
  const theme = useTheme();

  const handleUpload = (file: File, fileName: string) => {
    alert(`Placeholder for uploading ${fileName}`);
  };

  return (
    <FileUpload
      preview
      allowRenameFile
      allowDescription
      allowedFileTypes={[
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/jpeg',
        'image/png',
        'image/heic',
        'image/svg+xml'
      ]}
      handleUpload={handleUpload}
      dropZoneStyles={{
        margin: '10px 10px 0 10px',
        background: `${theme.palette.common.white}`,
        borderRadius: CONTAINER_BORDER_RADIUS
      }}
      sx={{
        flex: 1,
        maxWidth: `${MESSAGE_BOX_WIDTH - 30}px`,
        margin: '15px'
      }}
    />
  );
};

export default UploadPane;
