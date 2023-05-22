import { useEffect, useState } from 'react';
import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import { textFieldStyle } from '@components/common/line-items-summary/styles';
import { EditableCells, JobType } from '../types';

export const EditableCell = ({
  rowIndex,
  accessorKey,
  handleSaveRow,
  types
}: EditableCells) => {
  const [accessorName, setAccessorName] = useState(accessorKey);
  const [index, setIndex] = useState(rowIndex);
  const [type, setType] = useState('');

  useEffect(() => {
    setIndex(rowIndex);
    setAccessorName(accessorKey);
  }, [rowIndex, accessorKey]);

  const handleChange = (event: any) => {
    setType(event.target.value);
    handleSaveRow(index, accessorName, event.target.value);
  };

  if (accessorKey === 'jobType') {
    return (
      <Box
        sx={{
          width: '100%',
          minWidth: '157px'
        }}
      >
        <Select
          labelId='jobType'
          onChange={handleChange}
          displayEmpty
          sx={{
            width: '100%',
            height: '33px'
          }}
          data-testid='type-select'
          renderValue={
            type !== '' ? undefined : () => <Typography>Select</Typography>
          }
        >
          {types?.map((type: JobType) => {
            return (
              <MenuItem key={type.name} value={type.name}>
                {type.name}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
    );
  }

  if (accessorKey === 'qty' || accessorKey === 'charge') {
    return (
      <TextField
        type='number'
        onChange={handleChange}
        size='small'
        sx={textFieldStyle}
      />
    );
  }

  return (
    <TextField
      type='text'
      onChange={handleChange}
      size='small'
      sx={textFieldStyle}
    />
  );
};
