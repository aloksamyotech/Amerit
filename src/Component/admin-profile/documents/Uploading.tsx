import { FileUploadOutlined } from '@mui/icons-material';
import { Box, Grid, Theme, Typography, IconButton } from '@mui/material';
import { Close, Image } from '@mui/icons-material';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import React from 'react';

const Uploading = () => {
  return (
    <>
      <Grid item xs={12}>
        <Box
          width={'100%'}
          display='flex'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          sx={{
            height: '130px',
            border: '2px dotted ',
            cursor: 'pointer',
            borderColor: (theme: Theme) => theme.palette.secondary.main
          }}
        >
          <Box>
            <FileUploadOutlined />
            <Typography>Uploading...</Typography>
            <Typography variant='caption'>Please wait</Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default Uploading;
