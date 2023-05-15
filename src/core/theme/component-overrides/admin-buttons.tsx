import { Button, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
  children?: React.ReactNode;
}

export const ContainedButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      variant='contained'
      sx={{
        width: '100%'
      }}
      size='large'
      disableElevation
      {...rest}
    >
      {children}
    </Button>
  );
};

export const OutlinedButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      variant='outlined'
      size='large'
      disableElevation
      sx={{
        width: '100%'
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
