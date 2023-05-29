import FormHelperText from '@mui/material/FormHelperText';
import { ValidationErrorType } from './types';

const ValidationError = ({ message }: ValidationErrorType) => {
  return (
    <FormHelperText
      sx={{
        color: 'error.main',
        marginLeft: '0px',
      }}
    >
      {message}
    </FormHelperText>
  );
};

export default ValidationError;