import { styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  color: theme.palette.warningRed.main
}));

const Alert = () => {
  return (
    <StyledIcon
      data-testid='alert-icon'
      icon={'exclamation-circle'}
      size='2x'
    />
  );
};

export default Alert;
