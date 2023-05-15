import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth/core/types';

import ThemeProvider from '../theme/ThemeProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,

      // https://tanstack.com/query/v4/docs/react/guides/query-retries#retry-delay
      retryDelay: 1000
    }
  }
});

const Providers = ({
  session,
  children
}: {
  session: Session;
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <SessionProvider session={session}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider>{children}</ThemeProvider>
        </LocalizationProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Providers;
