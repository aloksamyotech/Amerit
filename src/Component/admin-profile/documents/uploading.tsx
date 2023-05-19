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

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            width={'100%'}
            alignItems='center'
            sx={{
              p: 1,
              border: '1px solid ',
              borderColor: (theme) => theme.palette.primary.main,
              marginTop: '20px'
            }}
          >
            <Box display='flex' width='100%' sx={{ p: 1 }}>
              <Image
                src='/images/pdf.svg'
                height={38}
                width={34}
                alt='Follow us on Twitter'
              />
              <Box display='flex' justifyContent='space-between' width='100%'>
                <Box sx={{ ml: 2 }}>
                  <Typography variant='subtitle2'>
                    ACH Form Document.pdf
                  </Typography>
                  <Typography variant='caption'>443 kb</Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ width: '100%' }}>
              <LinearProgressWithLabel value={100} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Uploading;
