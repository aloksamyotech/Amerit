import { Dispatch, SetStateAction } from 'react';
import { Box, TextField, InputLabel, InputAdornment } from '@mui/material';
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
  availableLineItemTypes,
  enableTaxes,
  taxes,
  setTaxes
}: {
  vendorEstimateItem: VendorEstimateFields;
  availableLineItemTypes: string[];
  enableTaxes?: boolean;
  taxes?: number;
  setTaxes?: Dispatch<SetStateAction<number>>;
}) => {
  const updateTaxes = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (setTaxes) {
      setTaxes(Number(value));
    }
  };

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
            value={Number(vendorEstimateItem[field.prop]).toFixed(2)}
            InputProps={{
              sx: {
                '.MuiInputBase-input': {
                  textAlign: 'right',
                  '&::placeholder': {
                    textAlign: 'right'
                  }
                }
              },
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              )
            }}
          />
        </Box>
      ))}
      <Box p={2}>
        <InputLabel shrink={true} sx={{ fontWeight: 1000 }} htmlFor='Taxes'>
          Taxes
        </InputLabel>
        <TextField
          name='Taxes'
          sx={textFieldStyle}
          type='number'
          value={enableTaxes ? taxes : Number(taxes).toFixed(2)}
          onChange={updateTaxes}
          size='small'
          disabled={!enableTaxes}
          InputProps={{
            sx: {
              '.MuiInputBase-input': {
                textAlign: 'right',
                '&::placeholder': {
                  textAlign: 'right'
                }
              }
            },
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
        />
      </Box>
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
          value={Number(vendorEstimateItem.sectionTotal).toFixed(2)}
          size='small'
          InputProps={{
            sx: {
              '.MuiInputBase-input': {
                textAlign: 'right',
                '&::placeholder': {
                  textAlign: 'right'
                }
              }
            },
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
        />
      </Box>
    </Box>
  );
};

export default LineItemsSummary;
