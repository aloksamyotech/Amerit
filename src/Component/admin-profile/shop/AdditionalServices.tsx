import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography
} from '@mui/material';
import React from 'react';
import { checkboxList } from 'src/mocks/admin-profile';

const AdditionalServices = () => {
  return (
    <Grid container sx={{ mt: 2 }}>
      <Grid item xs={12}>
        <Typography
          variant='h4'
          
        >
          Additional Services
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant='h5'
         
        >
          General
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormGroup sx={{ display: 'inline-block' }}>
          {checkboxList.general.map((generalItem: string) => (
            <FormControlLabel
              key={generalItem}
              control={<Checkbox />}
              label={generalItem}
             
            />
          ))}
        </FormGroup>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant='h5'
         
        >
          Tire
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormGroup sx={{ display: 'inline-block' }}>
          {checkboxList.tire.map((generalItem: string) => (
            <FormControlLabel
              key={generalItem}
              control={<Checkbox />}
              label={generalItem}
              sx={{
                mr: '20px',
                mt: '15px',
                width: '225px',
                fontSize: '15px'
              }}
            />
          ))}
        </FormGroup>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant='h5'
         
        >
          Towing
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormGroup sx={{ display: 'inline-block' }}>
          {checkboxList.towing.map((generalItem: string) => (
            <FormControlLabel
              key={generalItem}
              control={<Checkbox />}
              label={generalItem}
              sx={{
                mr: '20px',
                mt: '15px',
                width: '225px',
                fontSize: '15px'
              }}
            />
          ))}
        </FormGroup>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant='h5'
         
        >
          Parts
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormGroup sx={{ display: 'inline-block' }}>
          {checkboxList.parts.map((generalItem: string) => (
            <FormControlLabel
              key={generalItem}
              control={<Checkbox />}
              label={generalItem}
              sx={{
                mr: '20px',
                mt: '15px',
                width: '225px',
                fontSize: '15px'
              }}
            />
          ))}
        </FormGroup>
      </Grid>
    </Grid>
  );
};
export default AdditionalServices;
