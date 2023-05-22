import React, { ChangeEvent, useState } from 'react';
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
import { Close, FileUploadOutlined } from '@mui/icons-material';
import Image from 'next/image';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import { useProfile } from '../context/ProfileContext';
// import Upload from './Upload';
import { useMutation, useQuery } from 'react-query';
import Uploading from './uploading';

import { getAdminDocumentsDetails, saveDocumentType } from 'src/services/admin';
import { CBox, Input } from '../style';

const Documents = () => {
  const { updateTab, handleProgress } = useProfile();
  const fileRef = React.useRef();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const [progress, setProgress] = React.useState(10);
  const [documentTypes, setDocumentTypes] = useState();
   const defaultValues = {
    name: ''

   }
  useQuery(['documentTypes'], () =>
    getAdminDocumentsDetails().then((data) => setDocumentTypes(data)),
  );
  const mutation = useMutation((data: typeof defaultValues) =>
  saveDocumentType(data)
);


  const handleSubmit = () => {
    handleProgress('document');
    updateTab(2);
    mutation.mutate();
  };
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        hiddenFileInput?.current?.click();
        setShowComponent(true);
    }
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;
    const selectedFiles = files as FileList;
    if(files && files.length > 0) {
const newFiles: File[] = Array.from (files);
setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles,...newFiles]);
    }
    console.log(selectedFiles);
        // const fileList = event.target.files;
        // if (fileList && fileList.length > 0) {
        //     const files: File[] = Array.from(fileList);
        //     setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
        // }
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
                display='flex'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
              >


                {selectedFiles.length === 0 && (
                  <Grid sx={{
                    cursor: 'pointer',
                    width: '100%',
                    color: (theme: Theme) => theme.palette.linkBlue.main,
                    border: '2px dotted',
                    borderColor: (theme: Theme) => theme.palette.secondary.main
                  }}
                    style={CBox}
                    onClick={() => handleClick()}
                  >
                    <Grid container lg={12}>
                      <Grid xs={12}>
                        <FileUploadOutlined />
                      </Grid>
                      <Grid xs={12}>
                        <input
                          type='file'
                          ref={hiddenFileInput}
                          style={Input}
                          onChange={handleFileChange}
                        />
                        <Grid sx={{ color: '#000', mr: '5px', display: 'inline-block' }}>Drag & Drop or</Grid>
                        Choose File<Grid sx={{ color: '#000', ml: '5px', display: 'inline-block' }}> to Upload</Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
                {selectedFiles.length > 0 && (
                  <>
                    {showComponent ? <Uploading /> : null}
                    <ul>
                      {selectedFiles.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </>
                )}
                {/* <Upload/> */}
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
                  height: '130px'
                }}
              >
                {selectedFiles.length === 0 && (
                  <Grid sx={{
                    cursor: 'pointer',
                    width: '100%',
                    color: (theme: Theme) => theme.palette.linkBlue.main,
                    border: '2px dotted',
                    borderColor: (theme: Theme) => theme.palette.secondary.main
                  }}
                    style={CBox}
                    onClick={() => handleClick()}
                  >
                    <Grid container lg={12}>
                      <Grid xs={12}>
                        <FileUploadOutlined />
                      </Grid>
                      <Grid xs={12}>
                        <input
                          type='file'
                          ref={hiddenFileInput}
                          style={Input}
                          onChange={handleFileChange}
                        />
                        <Grid sx={{ color: '#000', mr: '5px', display: 'inline-block' }}>Drag & Drop or</Grid>
                        Choose File<Grid sx={{ color: '#000', ml: '5px', display: 'inline-block' }}> to Upload</Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
                {selectedFiles.length > 0 && (
                  <>
                    {showComponent ? <Uploading /> : null}
                    <ul>
                      {selectedFiles.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </>
                )}
                {/* <Upload/> */}
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
                  height: '130px'
                }}
              >
                {selectedFiles.length === 0 && (
                  <Grid sx={{
                    cursor: 'pointer',
                    width: '100%',
                    color: (theme: Theme) => theme.palette.linkBlue.main,
                    border: '2px dotted',
                    borderColor: (theme: Theme) => theme.palette.secondary.main
                  }}
                    style={CBox}
                    onClick={() => handleClick()}
                  >
                    <Grid container lg={12}>
                      <Grid xs={12}>
                        <FileUploadOutlined />
                      </Grid>
                      <Grid xs={12}>
                        <input
                          type='file'
                          ref={hiddenFileInput}
                          style={Input}
                          onChange={handleFileChange}
                        />
                        <Grid sx={{ color: '#000', mr: '5px', display: 'inline-block' }}>Drag & Drop or</Grid>
                        Choose File<Grid sx={{ color: '#000', ml: '5px', display: 'inline-block' }}> to Upload</Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
                {selectedFiles.length > 0 && (
                  <>
                    {showComponent ? <Uploading /> : null}
                    <ul>
                      {selectedFiles.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </>
                )}
                {/* <Upload/> */}
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
