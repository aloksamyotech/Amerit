import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { Preview } from '@storybook/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '@core/theme/icons';
import '@styles/globals.css';
import { theme } from '../src/core/theme/ThemeProvider';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light'
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    nextRouter: {
      Provider: RouterContext.Provider
    }
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

export const withProviders = (Story) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  </QueryClientProvider>
);

export default preview;
export const decorators = [withProviders];
