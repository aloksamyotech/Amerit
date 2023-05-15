import React, { useState } from 'react';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import Locations from '@components/search/Locations';

export default {
  title: 'Search/Locations',
  component: Locations
};

export const Default = () => {
  const [location, setLocation] = useState('');

  const updateLocation = (event: any) => {
    setLocation(event.target.value);
  };

  return (
    <Locations
      searchResults={MOCK_VENDOR_REPAIR_ORDERS}
      value={location}
      onChange={updateLocation}
    />
  );
};
