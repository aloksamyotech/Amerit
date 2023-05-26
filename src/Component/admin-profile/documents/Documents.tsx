import React, { ChangeEvent, useRef, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  FormControl,
  Grid,
  Button,
  IconButton,
  Theme
} from '@mui/material';
import { Close, FileUploadOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { useMutation, useQuery } from 'react-query';

import { getAdminDocumentsDetails, saveDocumentType } from 'src/services/admin';
import { CBox, Input } from '../style';
import Uploading from './Uploading';
import { useProfile } from '../context/ProfileContext';

interface SelectedFilesState {
  file1: File[];
  file2: File[];
  file3: File[];
  file4: File[];
  file5: File[];
  file6: File[];
}
const Documents = () => {
  const { updateTab, handleProgress, values } = useProfile();
  const [selectedFiles, setSelectedFiles] = useState<SelectedFilesState>({
    file1: [],
    file2: [],
    file3: [],
    file4: [],
    file5: [],
    file6: []
  });
  const fileInputRefs = useRef<HTMLInputElement[]>([]);
  const [documentTypes, setDocumentTypes] = useState();
  const [show, setShow] = useState(false);
  useQuery(['documentTypes'], () =>
    getAdminDocumentsDetails().then((data) => setDocumentTypes(data))
  );
  const mutation = useMutation((data: any) =>
    saveDocumentType(data, Number(values?.userid))
  );

  const handleSubmit = (data: any) => {
    handleProgress('document');
    updateTab(2);
    mutation.mutate(selectedFiles);
  };
  const [showComponent, setShowComponent] = useState(false);

  const handleRemoveFile = (key: string) => {
    const updatedSelectedFiles = { ...selectedFiles, [key]: null };
    setSelectedFiles(updatedSelectedFiles);
  };
  // const handleFileChange = (
  //   event: ChangeEvent<HTMLInputElement>,
  //   key: string
  // ) => {
  //   const fileList = event.target.files;
  //   if (fileList && fileList.length > 0) {
  //     const updateSelectedFiles = { ...selectedFiles };
  //     updateSelectedFiles[key] = Array.from(fileList);
  //     setSelectedFiles(updateSelectedFiles);
  //   }
  //   setTimeout(() => {
  //     setShow(false);
  //   }, 2000);
  //   setShow(true);
  // };
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: keyof SelectedFilesState
  ) => {
    const { files } = event.target;
    setSelectedFiles((prevSelectedFiles) => ({
      ...prevSelectedFiles,
      [key]: Array.from(files)
    }));
  };
  const handleUpload = (key: keyof SelectedFilesState) => {
    if (fileInputRefs.current[key]) {
      fileInputRefs.current[key].click();
    }
  };
  console.log(selectedFiles, 'file');
  console.log(documentTypes, 'datan');

  const renderFileInput = (key: keyof SelectedFilesState) => {
    const files = selectedFiles[key];

    return (
      <div key={key}>
        <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h6'>w9</Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                width={'100%'}
                display='flex'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
              >
                <Grid
                  sx={{
                    cursor: 'pointer',
                    width: '100%',
                    color: (theme: Theme) => theme.palette.linkBlue.main,
                    border: '2px dotted',
                    borderColor: (theme: Theme) => theme.palette.secondary.main
                  }}
                  style={CBox}
                >
                  <Grid container lg={12}>
                    <Grid xs={12}>
                      <FileUploadOutlined />
                    </Grid>
                    <Grid xs={12}>
                      <input
                        id={key}
                        ref={(input) => {
                          fileInputRefs.current[key] = input;
                        }}
                        type='file'
                        style={Input}
                        onChange={(event) => handleFileChange(event, key)}
                      />
                      {/* {selectedFiles.length > 0 && (
                        <>{show ? <Uploading /> : null}</>
                      )} */}
                      <Grid
                        sx={{
                          color: '#000',
                          mr: '5px',
                          display: 'inline-block'
                        }}
                      >
                        Drag & Drop or
                      </Grid>
                      <Button onClick={() => handleUpload(key)}>
                        Choose File
                      </Button>
                      <Grid
                        sx={{
                          color: '#000',
                          ml: '5px',
                          display: 'inline-block'
                        }}
                      >
                        {' '}
                        to Upload
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <div>
                  {/* Display selected file names */}
                  {files.map((file, index) => (
                    <div key={index}>{file.name}</div>
                  ))}
                </div>
              </Box>
            </Grid>
          </Grid>
        </>
      </div>
    );
  };

  return (
    <>
      {Object.keys(selectedFiles).map((key) =>
        renderFileInput(key as keyof SelectedFilesState)
      )}

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
    </>

    // <Box width={'100%'}>
    //   <Paper sx={{ padding: '1.5rem' }}>
    //     <FormControl fullWidth>

    /* <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h6'>{item.name}</Typography>
        </Grid> */

    // <Grid item xs={12}>
    //   <Box
    //     width={'100%'}
    //     display='flex'
    //     alignItems='center'
    //     justifyContent='center'
    //     textAlign='center'
    //   >
    /* {selectedFiles.file1.length == 0 && (
      <Grid
        sx={{
          cursor: 'pointer',
          width: '100%',
          color: (theme: Theme) =>
            theme.palette.linkBlue.main,
          border: '2px dotted',
          borderColor: (theme: Theme) =>
            theme.palette.secondary.main
        }}
        style={CBox}
        onClick={() => handleClick1()}
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
              onChange={(event) =>
                handleFileChange(event, 'file1')
              }
            />
            {selectedFiles.file1.length > 0 && (
              <>{show ? <Uploading /> : null}</>
            )}
            <Grid
              sx={{
                color: '#000',
                mr: '5px',
                display: 'inline-block'
              }}
            >
              Drag & Drop or
            </Grid>
            <Button onClick={() => handleUpload('file1')}>
              Choose File
            </Button>
            <Grid
              sx={{
                color: '#000',
                ml: '5px',
                display: 'inline-block'
              }}
            >
              {' '}
              to Upload
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )}

    {selectedFiles.file1.length > 0 && (
      <>
        {show ? (
          <Uploading />
        ) : (
          <>
            {selectedFiles.file1 && (
              <>
                <Grid item xs={12}>
                  <Box
                    width={'100%'}
                    alignItems='center'
                    sx={{
                      p: 1,
                      border: '1px solid ',
                      borderColor: (theme: Theme) =>
                        theme.palette.primary.main,
                      marginTop: '20px'
                    }}
                  >
                    <Box
                      display='flex'
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
                        justifyContent='space-between'
                        width='100%'
                      >
                        <Box sx={{ ml: 2 }}>
                          <Typography variant='subtitle2'>
                            {selectedFiles.file1[0].name}
                          </Typography>
                          <Typography variant='caption'>
                            443 kb
                          </Typography>
                        </Box>
                        <IconButton
                          onClick={() =>
                            handleRemoveFile('file1')
                          }
                        >
                          <Close />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </>
            )}
          </>
        )}
      </>
    )} */
    //     </Box>
    //   </Grid>
    // </Grid>

    /* <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h6'>W9</Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          width={'100%'}
          display='flex'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
        >
          {selectedFiles.file1.length == 0 && (
            <Grid
              sx={{
                cursor: 'pointer',
                width: '100%',
                color: (theme: Theme) => theme.palette.linkBlue.main,
                border: '2px dotted',
                borderColor: (theme: Theme) =>
                  theme.palette.secondary.main
              }}
              style={CBox}
              onClick={() => handleClick1()}
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
                    onChange={(event) => handleFileChange(event, 'file1')}
                  />
                  {selectedFiles.file1.length > 0 && (
                    <>{show ? <Uploading /> : null}</>
                  )}
                  <Grid
                    sx={{
                      color: '#000',
                      mr: '5px',
                      display: 'inline-block'
                    }}
                  >
                    Drag & Drop or
                  </Grid>
                  <Button onClick={() => handleUpload('file1')}>
                    Choose File
                  </Button>
                  <Grid
                    sx={{
                      color: '#000',
                      ml: '5px',
                      display: 'inline-block'
                    }}
                  >
                    {' '}
                    to Upload
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}

          {selectedFiles.file1.length > 0 && (
            <>
              {show ? (
                <Uploading />
              ) : (
                <>
                  {selectedFiles.file1 && (
                    <>
                      <Grid item xs={12}>
                        <Box
                          width={'100%'}
                          alignItems='center'
                          sx={{
                            p: 1,
                            border: '1px solid ',
                            borderColor: (theme: Theme) =>
                              theme.palette.primary.main,
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
                                  {selectedFiles.file1[0].name}
                                </Typography>
                                <Typography variant='caption'>
                                  443 kb
                                </Typography>
                              </Box>
                              <IconButton
                                onClick={() => handleRemoveFile('file1')}
                              >
                                <Close />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </Box>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h6'>ACH Form</Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          width={'100%'}
          display='flex'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
        >
          {selectedFiles.file2.length == 0 && (
            <Grid
              sx={{
                cursor: 'pointer',
                width: '100%',
                color: (theme: Theme) => theme.palette.linkBlue.main,
                border: '2px dotted',
                borderColor: (theme: Theme) =>
                  theme.palette.secondary.main
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
                    ref={hiddenFileInput2}
                    style={Input}
                    onChange={(event) => handleFileChange(event, 'file2')}
                  />
                  {selectedFiles.file2.length > 0 && (
                    <>{show ? <Uploading /> : null}</>
                  )}
                  <Grid
                    sx={{
                      color: '#000',
                      mr: '5px',
                      display: 'inline-block'
                    }}
                  >
                    Drag & Drop or
                  </Grid>
                  <Button onClick={() => handleUpload('file1')}>
                    Choose File
                  </Button>
                  <Grid
                    sx={{
                      color: '#000',
                      ml: '5px',
                      display: 'inline-block'
                    }}
                  >
                    {' '}
                    to Upload
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}

          {selectedFiles.file2.length > 0 && (
            <>
              {show ? (
                <Uploading />
              ) : (
                <>
                  {selectedFiles.file2 && (
                    <>
                      <Grid item xs={12}>
                        <Box
                          width={'100%'}
                          alignItems='center'
                          sx={{
                            p: 1,
                            border: '1px solid ',
                            borderColor: (theme: Theme) =>
                              theme.palette.primary.main,
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
                                  {selectedFiles.file2[0].name}
                                </Typography>
                                <Typography variant='caption'>
                                  443 kb
                                </Typography>
                              </Box>
                              <IconButton
                                onClick={() => handleRemoveFile('file1')}
                              >
                                <Close />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </Box>
      </Grid>
    </Grid> */

    //     </FormControl>
    //   </Paper>
    // </Box>
  );
};

export default Documents;
