import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  FormControl,
  Grid,
  Button,
  IconButton,
  Theme,
  Link
} from '@mui/material';
import { FileUploadOutlined, Close } from '@mui/icons-material';
import Image from 'next/image';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import { useProfile } from '../context/ProfileContext';
import Uploading from './uploading';
import Upload from './Upload';

const Documents = () => {
  const { updateTab, handleProgress } = useProfile();
  const fileRef = React.useRef();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const [progress, setProgress] = React.useState(10);
  const [uploading, setUploading] = useState(false)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleSubmit = () => {
    handleProgress('document');
    updateTab(2);
  };
  const handleClick = () => {
    hiddenFileInput?.current?.click();
    setUploading(true);
    setTimeout(() =>{
      setUploading(false);
    },2000);
  };
  const handleFileUpload = (file: File) => {
    console.log('Uploaded file name:', file.name);
  };


  return (
    <Box width={'100%'}>
      <Paper sx={{ padding: '1.5rem' }}>
        <FormControl fullWidth>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h6'>
                <b>W9 Form</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                width={'100%'}
                display='flex'
                alignItems='center'
                sx={{
                  height: '50px',
                  border: '1px solid',
                  borderColor: (theme: Theme) => theme.palette.primary.main
                }}
              >
                <Box
                  display='flex'
                  alignItems='center'
                  width='100%'
                  sx={{ p: 1 }}
                >
                  <Image
                    src='/images/pdf.svg'
                    height={38}
                    width={34}
                    alt='Follow us on Twitter'
                  />
                  <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    width='100%'
                  >
                    <Box sx={{ ml: 2 }}>
                      <Typography variant='subtitle2'>
                        W9 Form Document.pdf
                      </Typography>
                      <Typography variant='caption'>443 kb</Typography>
                    </Box>
                    <IconButton>
                      <Close />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h6'>ACH Form</Typography>
            </Grid>
            <Uploading />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                width={'100%'}
                alignItems='center'
                sx={{
                  p: 1,
                  border: '1px solid ',
                  borderColor: (theme: Theme) => theme.palette.primary.main,
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
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    width='100%'
                  >
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
                  <LinearProgressWithLabel value={progress} />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h6'>Certificate of Insurance</Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                width={'100%'}
                display='block'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                sx={{
                  height: '130px',
                  // border: '2px dotted ',
                  // borderColor: (theme: Theme) => theme.palette.secondary.main
                }}
              >
                <Upload/>
                {/* <Upload onFileUpload ={handleFileUpload}/> */}
                {/* {uploading && <p>Uploading/....</p>} */}
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h6'>Worker's Compensation</Typography>
            </Grid>
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
                  borderColor: (theme: Theme) => theme.palette.secondary.main
                }}
              >
                <Upload onFileUpload ={handleFileUpload}/>
                {uploading && <p>Uploading/....</p>}
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h6'>Inspector Qualification 396.19</Typography>
            </Grid>
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
                  borderColor: (theme: Theme) => theme.palette.secondary.main
                }}
              >
                <Upload onFileUpload ={handleFileUpload}/>
                {uploading && <p>Uploading/....</p>}
              </Box>
            </Grid>
          </Grid>
          <Grid container item spacing={2}>
            <Grid item xs={6}>
              <Box width={'100%'} pt={2}>
                <Button
                  color='secondary'
                  variant='contained'
                  size='large'
                  onClick={handleSubmit}
                >
                  Save Changes
                </Button>
              </Box>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default Documents;
