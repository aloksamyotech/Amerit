import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Box, TextField, InputLabel, InputAdornment } from '@mui/material';
import {
  VendorEstimateFields,
  SummaryField
} from '@components/estimate/job-section/types';
import { EstimateMetadata } from '@components/vendor-repair-order/types';
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
  control,
  taxes,
  setTaxes
}: {
  vendorEstimateItem: VendorEstimateFields;
  availableLineItemTypes: string[];
  control?: Control<EstimateMetadata, any>;
  taxes?: number;
  setTaxes?: (taxes: number) => void;
}) => {
  const [total, setTotal] = useState<number>(taxes ?? 0);

  const calculateTotal = (taxes: number) => {
    const total = vendorEstimateItem.sectionTotal + taxes;
    setTotal(total);
    if (setTaxes) {
      setTaxes(taxes);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    callback: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    calculateTotal(Number(event?.target?.value) ?? 0);
    callback(event);
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
      {control && (
        <Box p={2}>
          <InputLabel shrink={true} sx={{ fontWeight: 1000 }} htmlFor='Taxes'>
            Taxes
          </InputLabel>
          <Controller
            name='taxes'
            control={control}
            render={({ field: { value, onChange } }: any) => (
              <TextField
                name='taxes'
                sx={textFieldStyle}
                type='number'
                value={value}
                onChange={(event) => handleChange(event, onChange)}
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
                  startAdornment: (
                    <InputAdornment position='start'>$</InputAdornment>
                  )
                }}
              />
            )}
          />
        </Box>
      )}
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
          value={total.toFixed(2)}
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
