import { Theme } from '@mui/material/styles';

const TextField = (theme: Theme) => {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            border: `2px solid ${theme.palette.charcoal.main}`
          },
          '&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
            border: `2px solid ${theme.palette.gold.main}`,
            boxShadow: `0 0 2px 2px ${theme.palette.goldShadow.main}`
          },
          '&.Mui-disabled fieldset.MuiOutlinedInput-notchedOutline': {
            border: `2px solid ${theme.palette.charcoal[200]}`
          }
        }
      }
    }
  };
};

export default TextField;
