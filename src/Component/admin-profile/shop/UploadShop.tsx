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
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useProfile } from '../context/ProfileContext';
import { theme } from '@core/theme/ThemeProvider';

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
    const selectedFiles = files as FileList;
    console.log(selectedFiles);
  };
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover
    },
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }));

  const rows = [
    createData('ShopName', 'The name you assign the shop, could be a number.'),
    createData('Phone', 'The main shop phone number'),
    createData('Address1', ''),
    createData('Address2', ''),
    createData('City', ''),
    createData('State', ''),
    createData('Zip', ''),
    createData('HoursMon', 'Shop open on Monday'),
    createData('HoursMon24', 'Open 24 Hours'),
    createData('HoursMonStartTime', '(Format: 09:00 AM)'),
    createData('HoursMonEndTime', '(Format: 10:00 PM)'),
    createData('HoursTue', 'Shop open on Tuesday')
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
            Uploads Shop
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
                  borderColor: (theme) => theme.palette.coolGrey.main
                }}
              >
                <Typography variant='h6'>
                  Upload an CSV (Comma Separated Values) file with your
                  shops.Download a Sample file <Link href='#'>here</Link>
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    textAlign: 'left',
                    marginLeft: '50px',
                    marginTop: '20px'
                  }}
                >
                  <ul>
                    <li>Column Header need to be exact</li>
                    <li>Follow Time format in sample file or description</li>
                    <li>
                      Please make sure you have a start time and end time for
                      Hours of Operation
                    </li>
                  </ul>
                </Typography>
                <FileUploadIcon
                  className='icon-store'
                  sx={{ height: '65px', width: '65px' }}
                />
                <h3>Add a New Shop</h3>
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
                  <TableHead sx={{ display: 'table-caption' }}>
                    <Typography
                      variant='h6'
                      fontWeight={'bold'}
                      sx={{
                        mt: 2,
                        marginLeft: '10px'
                      }}
                    >
                      Column Headers in CSV File
                    </Typography>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow
                        key={row.name}
                        sx={{
                          '&:nth-of-type(even)': {
                            backgroundColor: theme.palette.coolGrey
                          },
                          '&:last-child td, &:last-child th': {
                            border: 0
                          }
                        }}
                      >
                        <TableCell component='th' scope='row'>
                          {row.name}
                        </TableCell>
                        <TableCell align='left'>{row.description}</TableCell>
                      </StyledTableRow>
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
