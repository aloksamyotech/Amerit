import React, { ChangeEvent, useEffect, useState } from 'react';
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
import { useMutation, useQuery } from 'react-query';

import { getAdminDocumentsDetails, saveDocumentType } from 'src/services/admin';
import { CBox, Input } from '../style';
import Uploading from './uploading';

const Documents = () => {
  const { updateTab, handleProgress, values } = useProfile();
  const fileRef = React.useRef();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const [progress, setProgress] = React.useState(10);
  const [documentTypes, setDocumentTypes] = useState();
  const [show, setShow] = useState(false);
  const defaultValues = {
    name: ''

  }
  interface FileData {
    id: string;
    file: File;
  }

  useQuery(['documentTypes'], () =>
    getAdminDocumentsDetails().then((data) => setDocumentTypes(data)),
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

  const handleClick = () => {
    hiddenFileInput?.current?.click();
    setShowComponent(true);
  }
  // const handleClose = () => {
  //   setSelectedFiles(null);
  //   if (hiddenFileInput.current) {
  //     hiddenFileInput.current.value = '';
  //   }
  // }
  const handleFileClose = (id: string) => {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.filter((file) => file.id !== id)
    );
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    // const selectedFiles = files as FileList;
    if (fileList && fileList.length > 0) {
      const files: File[] = Array.from(fileList);
      const newFiles: FileData[] = files.map((file) =>({
        id: file.name,
        file: file,
      }));
      setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...newFiles]);
    }
    console.log(selectedFiles[0]);
    setTimeout(() => {
      setShow(false);
    }, 2000);
    setShow(true);
  }
  console.log(documentTypes, 'datan')

  return (
    <Box width={'100%'}>
      <Paper sx={{ padding: '1.5rem' }}>
        <FormControl fullWidth>
          {documentTypes && documentTypes.map((item: any, index: any) => {
            return (
              <>
                <Grid container spacing={2} key={item.value}>
                  <Grid item xs={12}>
                    <Typography variant='h6'>{item.name}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      width={'100%'}
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                      textAlign='center'
                    >


                      {selectedFiles.length == 0 && (
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
                          {show ? <Uploading /> : null}
                        </>
                      )}
                    </Box>
                    {selectedFiles.map((fileData) => (
                      <Grid item xs={12} key={fileData.id}>
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
                                  {fileData.file.name}
                                </Typography>
                                <Typography variant='caption'>443 kb</Typography>
                              </Box>
                              <IconButton onClick={() => handleFileClose(fileData.id)}>
                                <Close />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    ))}

                  </Grid>
                </Grid>

              </>
            )
          })}
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
