import { deepmerge } from '@mui/utils';
import { ThemeOptions } from '@mui/material';
import palette from './palette';
import { FONTS } from './constants';

const themeOptionsConfig = (): ThemeOptions => {
  const themeConfig = {
    palette: palette(),
    typography: {
      fontFamily: FONTS.OPENSANS
    }
  };

  return deepmerge(themeConfig, {
    palette: {
      primary: {
        ...themeConfig.palette['primary']
      }
    }
  });
};

export default themeOptionsConfig;
