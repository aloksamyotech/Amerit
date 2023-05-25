import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Grid, Paper, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { rows } from 'src/mocks/shoptab-list';
import { useProfile } from '../context/ProfileContext';

const columns: GridColDef[] = [
  {
    field: 'shopName',
    headerName: 'Shop Name',
    minWidth: 200,
    flex: 1
  },
  {
    field: 'Address',
    headerName: 'Address',
    minWidth: 250,
    flex: 1,
    width: 150,
    renderCell: (params) => (
      <Grid sx={{ whiteSpace: 'normal' }}>{params.value}</Grid>
    )
  },

  {
    field: 'Phone',
    headerName: 'Phone',
    minWidth: 150,
    flex: 1
  },
  {
    field: 'Action',
    headerName: 'Action',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minWidth: 250,
    flex: 1,
    renderCell: () => {
      return (
        <Stack direction='row' spacing={2}>
          <Button
            sx={{
              background: (theme) => theme.palette.gold.main
            }}
            variant='contained'
          >
            EDIT
          </Button>
          <Button
            variant='contained'
            sx={{
              background: (theme) => theme.palette.gold.main
            }}
          >
            DELETE
          </Button>
        </Stack>
      );
    }
  }
];

const Shop = () => {
  const { addNewShop, uploadShop, updateTab, handleProgress } = useProfile();

  const handleSubmit = () => {
    updateTab(3);
    handleProgress('shop');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ marginLeft: '1.0rem', marginRight: '1.0rem' }}>
        <Paper elevation={2} sx={{ padding: '1.5rem' }}>
          <Grid container spacing={2} sx={{ textAlign: 'center', pb: 2 }}>
            <Grid item xs={6} role='button' onClick={() => addNewShop(true)}>
              <Box
                sx={{
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: (theme) => theme.palette.charcoal[100],
                  borderRadius: '3px',
                  textAlgin: 'center',
                  py: 2
                }}
              >
                <Image
                  src='/images/shop.png'
                  alt='Add a New Shop'
                  height={45}
                  width={50}
                />
                <Typography variant='h5'>Add a New Shop</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} role='button' onClick={() => uploadShop(true)}>
              <Box
                sx={{
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: (theme) => theme.palette.charcoal[100],
                  borderRadius: '3px',
                  textAlign: 'center',
                  py: 2
                }}
              >
                <Image
                  src='/images/upload.png'
                  alt='Add a New Shop'
                  height={45}
                  width={45}
                />
                <Typography variant='h5'>Upload Bulk Shops</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                initialState={{
                  pagination: {
                    paginationModel: { pageSize: 25 }
                  }
                }}
                pageSizeOptions={[25, 50, 100]}
              />
            </Box>
            <Button
              color='secondary'
              variant='contained'
              size='large'
              type='submit'
            >
              Save Changes
            </Button>
          </Grid>
        </Paper>
      </Box>
    </form>
  );
};
export default Shop;
