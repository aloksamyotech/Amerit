import { useEffect } from 'react';
import useVendorRepairOrderSearch from '../useVendorRepairOrderSearch';

const VendorRepairOrderSearch = () => {
  const { searchResults, setSearchData } = useVendorRepairOrderSearch();

  useEffect(() => {
    setSearchData({
      userID: '',
      status: '',
      repairOrderNbr: '',
      vendorWorkOrderNbr: '',
      location: '',
      vin: ''
    });
  }, [setSearchData]);

  if (searchResults == null || searchResults.length == 0) return null;

  return <div data-testid='result'>{searchResults[0].id}</div>;
};

export default VendorRepairOrderSearch;
