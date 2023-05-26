import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography
} from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { ServiceType } from './types';
import { Shop as ShopProps } from './shopForm';

const AdditionalServices = (props: {
  control: Control<ShopProps, any>;
  jobTypes: ServiceType[];
}) => {
  const { control, jobTypes } = props;
  const categories = jobTypes.map((m) => m.category);
  const distinctCategories = categories.filter(function (item, pos) {
    return categories.indexOf(item) == pos;
  });

  return (
    <>
      <Grid item xs={12}>
        <Box className='back-blck'>
          <Typography variant='h4'>Additional Services</Typography>
        </Box>
      </Grid>

      {distinctCategories.map((item, index) => {
        return (
          <>
            <Grid item xs={12} key={index}>
              <Typography variant='h5'>{item}</Typography>
            </Grid>
            <Grid item xs={12}>
              <FormGroup sx={{ display: 'inline-block' }}>
                {jobTypes
                  .filter((m) => m.category == item)
                  .map((job, jobIndex) => {
                    return (
                      <Controller
                        key={jobIndex}
                        name={`additionalServices.${job.serviceName.replace(
                          /\s/g,
                          ''
                        )}`}
                        control={control}
                        render={({ field: { value, onChange } }: any) => (
                          <FormControlLabel
                            control={
                              <Checkbox onChange={onChange} checked={value} />
                            }
                            label={job.serviceName}
                          />
                        )}
                      />
                    );
                  })}
              </FormGroup>
            </Grid>
          </>
        );
      })}
    </>
  );
};
export default AdditionalServices;
