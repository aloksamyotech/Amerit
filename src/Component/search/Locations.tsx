import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import { Select, MenuItem, useTheme } from '@mui/material';

const Locations = ({
  value,
  onChange,
  searchResults
}: {
  value: string;
  onChange: any;
  searchResults: VendorRepairOrder[];
}) => {
  const theme = useTheme();

  const locationListWithDupes = searchResults
    .map((vendorRepairOrder) => vendorRepairOrder.shop?.address?.city)
    .filter((city) => city != null);

  const locationListDeduped = locationListWithDupes
    .filter((item, index) => locationListWithDupes.indexOf(item) === index)
    .sort();

  return (
    <Select
      labelId='location'
      value={value === '' ? '1' : value}
      onChange={onChange}
      displayEmpty
      sx={{ width: '100%', fontSize: '12px' }}
      SelectDisplayProps={{
        style: {
          paddingTop: 8,
          paddingBottom: 8,
          border: `1px solid ${theme.palette.grey[100]}`
        }
      }}
    >
      {locationListDeduped.map((location: string) => (
        <MenuItem key={location} value={location}>
          {location}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Locations;
