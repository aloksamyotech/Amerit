import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography
} from '@mui/material';
import React from 'react';
import { CheckboxList } from 'src/mocks/admin-profile';

const AdditionalServices = () => {
  return (
    <Grid container sx={{ mt: 2 }}>
      <Grid item xs={12}>
        <Typography
          variant='h4'
          style={{
            fontWeight: 'bold',
            fontSize: '23px',
            marginBottom: '15px'
          }}
        >
          Additional Services
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant='h5'
          style={{
            display: 'inline-block',
            fontWeight: 'normal',
            fontSize: '19px'
          }}
        >
          General
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormGroup sx={{ display: 'inline-block' }}>
          {CheckboxList.general.map((generalItem: string) => (
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
          style={{
            display: 'inline-block',
            fontWeight: 'normal',
            fontSize: '19px',
            marginTop: '15px'
          }}
        >
          Tire
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormGroup sx={{ display: 'inline-block' }}>
          {CheckboxList.tire.map((generalItem: string) => (
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
          style={{
            display: 'inline-block',
            fontWeight: 'normal',
            fontSize: '19px',
            marginTop: '15px'
          }}
        >
          Towing
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormGroup sx={{ display: 'inline-block' }}>
          {CheckboxList.towing.map((generalItem: string) => (
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
          style={{
            display: 'inline-block',
            fontWeight: 'normal',
            fontSize: '19px',
            marginTop: '15px'
          }}
        >
          Parts
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormGroup sx={{ display: 'inline-block' }}>
          {CheckboxList.parts.map((generalItem: string) => (
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
