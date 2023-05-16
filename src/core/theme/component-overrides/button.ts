import { Theme } from '@mui/material/styles';

const Button = (theme: Theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '11px',
          fontWeight: 700,
          borderRadius: 8,
          padding: '8px 20px',
          boxShadow: 'none',
          color: theme.palette.common.black,
          '&:hover': {
            boxShadow: 'none'
          }
        },
        contained: {
          '&:hover': {
            backgroundColor: 'gold.dark',
            color: theme.palette.common.white
          }
        }
      }
    }
  };
};

export default Button;
