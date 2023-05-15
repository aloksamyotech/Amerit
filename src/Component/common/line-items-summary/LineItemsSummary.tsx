import { Box, TextField, InputLabel } from '@mui/material';
import {
  VendorEstimateFields,
  SummaryField
} from '@components/estimate/job-section/types';
import { textFieldStyle } from './styles';

const summaryFields: SummaryField[] = [
  { label: 'Labor', prop: 'labor' },
  { label: 'Parts', prop: 'parts' },
  { label: 'Shop Supplies', prop: 'shopSupplies' },
  { label: 'Fees', prop: 'fees' },
  { label: 'Sublet', prop: 'sublet' },
  { label: 'Freight', prop: 'freight' },
  { label: 'Towing', prop: 'towing' },
  { label: 'Travel', prop: 'travel' }
];

const LineItemsSummary = ({
  vendorEstimateItem,
  availableLineItemTypes
}: {
  vendorEstimateItem: VendorEstimateFields;
  availableLineItemTypes: string[];
}) => {
  return (
    <Box display='flex' justifyContent='center'>
      {summaryFields.map((field, index) => (
        <Box key={index} p={2} pl={index === 0 ? 0 : 'inherit'}>
          <InputLabel shrink={true} htmlFor='Labor'>
            {field.label}
          </InputLabel>
          <TextField
            name='Labor'
            sx={textFieldStyle}
            type='number'
            size='small'
            disabled={!availableLineItemTypes?.includes(field.label)}
            value={vendorEstimateItem[field.prop]}
          />
        </Box>
      ))}
      <Box p={2} pr={0}>
        <InputLabel
          shrink={true}
          sx={{ fontWeight: 1000 }}
          htmlFor='Section Total'
        >
          Section Total
        </InputLabel>
        <TextField
          name='Section Total'
          sx={textFieldStyle}
          type='number'
          disabled
          value={vendorEstimateItem.sectionTotal}
          size='small'
        />
      </Box>
    </Box>
  );
};

export default LineItemsSummary;
