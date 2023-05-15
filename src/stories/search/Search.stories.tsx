import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MOCK_SESSION, MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import Search from '@components/search/Search';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

const setSearchData = () => {
  return [];
};

export default {
  title: 'Search/Search',
  component: Search
};

export const Default = () => (
  <QueryClientProvider client={queryClient}>
    <SessionProvider session={MOCK_SESSION}>
      <Search
        setSearchData={setSearchData}
        searchResults={MOCK_VENDOR_REPAIR_ORDERS}
      />
    </SessionProvider>
  </QueryClientProvider>
);
