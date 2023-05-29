import React from 'react';
import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Typography,
  Container,
  Theme
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DescriptionIcon from '@mui/icons-material/Description';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useProfile } from '../context/ProfileContext';

const UploadShop = () => {
  const { uploadShop } = useProfile();
  function createData(name: string, description: string) {
    return { name, description };
  }
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles: FileList = files as FileList;
    console.log(selectedFiles); // keeping console temprorary as it will be implmented in ticket 315 for upload
  };

  const rows = [
    createData(
      'Frozen yoghurt',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    ),
    createData(
      'Ice cream sandwich',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    ),
    createData(
      'Eclair',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    ),
    createData(
      'Cupcake',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    ),
    createData(
      'Gingerbread',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    )
  ];

  return (
    <Container>
      <Box className='Box-wrp' sx={{ mt: '20px' }}>
        <Link href='#'>
          <ArrowBackIosIcon
            sx={{
              display: 'inline-block',
              verticalAlign: 'middle',
              cursor: 'pointer'
            }}
            onClick={() => uploadShop(false)}
            role='button'
          />
          <Grid
            sx={{
              display: 'inline-block',
              fontSize: '20px',
              verticalAlign: 'middle'
            }}
          >
            Upload Location
          </Grid>
        </Link>
        <Grid container sx={{ mt: 2 }} spacing={2}>
          <Grid item xs={6}>
            <Box
              className='Box-wrp'
              sx={{
                textAlign: 'center'
              }}
            >
              <Paper
                elevation={2}
                sx={{
                  padding: '1.5rem',
                  border: '3px dotted',
                  borderColor: (theme) => theme.palette.coolGrey.main,
                  height: '335px'
                }}
              >
                <Grid>
                  <Link
                    href='#'
                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                  >
                    <DescriptionIcon sx={{ display: 'inline-block' }} />{' '}
                    <Typography>Download a sample file here</Typography>
                  </Link>
                </Grid>
                <FileUploadIcon
                  className='icon-store'
                  sx={{ height: '65px', width: '65px', marginTop: '35px' }}
                />
                <h3>Add a New Location</h3>
                <Typography variant='subtitle1'>
                  Upload an CSV (Comma Separated Values) file with your
                  Locations.
                </Typography>
                <Grid item sx={{ mt: 2 }}>
                  <Button
                    variant='outlined'
                    sx={{
                      border: `1px solid ${(theme: Theme) =>
                        theme.palette.primary.main}`,
                      padding: '10px 20px 10px 20px',
                      marginRight: '25px'
                    }}
                    onClick={handleClick}
                  >
                    Choose File
                  </Button>

                  <input
                    type='file'
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                  />
                  <Button color='secondary' variant='contained' size='large'>
                    Submit
                  </Button>
                </Grid>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label='simple table'>
                  <TableHead>
                    <Grid fontSize={15} sx={{ mt: 2, marginLeft: '10px' }}>
                      Column Headers in CSV File
                    </Grid>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                          minWidth: '500px'
                        }}
                      >
                        <TableCell component='th' scope='row'>
                          {row.name}
                        </TableCell>
                        <TableCell align='left'>{row.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default UploadShop;
