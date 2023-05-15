import { useState } from 'react';
import { useQuery } from 'react-query';
import { Search as SearchType } from '@components/search/types';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import { search } from 'src/services/search';

const useVendorRepairOrderSearch = () => {
  const [searchResults, setSearchResults] = useState<VendorRepairOrder[]>([]);
  const [searchData, setSearchData] = useState<SearchType>();

  useQuery(
    ['search', searchData],
    () =>
      searchData &&
      search(searchData).then((searchResults) =>
        setSearchResults(searchResults)
      )
  );

  return { searchResults, setSearchData };
};

export default useVendorRepairOrderSearch;
