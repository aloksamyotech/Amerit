import { ReactNode } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import themeOptionsConfig from './themeOptionsConfig';
import componentOverrides from './component-overrides';
import typography from './typography';

const themeConfig = themeOptionsConfig();
let theme = createTheme(themeConfig);

theme = createTheme(theme, {
  components: { ...componentOverrides(theme) },
  typography: { ...typography(theme) }
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
export { theme };
