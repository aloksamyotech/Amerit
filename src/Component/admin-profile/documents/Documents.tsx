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
import { useProfile } from '../context/ProfileContext';
import Upload from './Fileinput';
import Uploading from './uploading';
import { getAdminDocumentsdetails } from 'src/services/admin';
import { useQuery } from 'react-query';
import { indexOf } from 'cypress/types/lodash';

const Documents = () => {
  const { updateTab, handleProgress } = useProfile();
  const fileRef = React.useRef();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const [progress, setProgress] = React.useState(10);
  const [documentTypes, setDocumentTypes] = useState();

  useQuery(['documentTypes'], () =>
    getAdminDocumentsdetails().then((data) => setDocumentTypes(data))
  );

  const handleSubmit = () => {
    handleProgress('document');
    updateTab(2);
  };
  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    const Nmfiles = event.target.files;
    console.log(Nmfiles[0]?.name, 'harshit');
    if (Nmfiles && Nmfiles.length > 0) {
      const files: File[] = Array.from(Nmfiles);
      setSelectedFiles((prevSelectedFiles: any) => [
        ...prevSelectedFiles,
        ...files
      ]);
    }
    console.log(Nmfiles);
    const selectedFiles = Nmfiles as FileList;
    console.log(selectedFiles);
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

          {documentTypes &&
            documentTypes.map((item, index) => {
              console.log(item);
              console.log(documentTypes);

              return (
                <Grid key={index} container spacing={2}>
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
                      sx={{
                        height: '130px',
                        border: '2px dotted ',
                        borderColor: (theme: Theme) =>
                          theme.palette.secondary.main
                      }}
                    >
                      <Box>
                        <FileUploadOutlined />
                        <Typography>
                          Drag & Drop or
                          <Link
                            sx={{
                              cursor: 'pointer',
                              mr: '10px',
                              ml: '10px',
                              color: (theme: Theme) =>
                                theme.palette.linkBlue.main
                            }}
                            onClick={() => handleClick()}
                          >
                            <input
                              type='file'
                              multiple
                              ref={hiddenFileInput}
                              onChange={handleChange}
                              hidden
                            />
                            Choose File
                          </Link>
                          to Upload
                        </Typography>
                        <Typography variant='caption'>
                          Jpg,Png,Pdf or Doc
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
        </FormControl>
      </Paper>
    </Box>
  );
};

export default Documents;
