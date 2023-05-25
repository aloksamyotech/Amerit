import { Dispatch, SetStateAction } from 'react';
import { TextField, Typography } from '@mui/material';

const Filename = ({
  fileName,
  setFileName
}: {
  fileName: string;
  setFileName?: Dispatch<SetStateAction<string>>;
}) => {
  return setFileName ? (
    <TextField
      sx={{ margin: '0 10px' }}
      fullWidth
      placeholder='File name'
      value={fileName}
      onChange={(event) => setFileName(event.target.value)}
    />
  ) : (
    <Typography>{fileName}</Typography>
  );
};

export default Filename;
