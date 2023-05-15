import { Theme } from '@mui/material/styles';

const DataGrid = (theme: Theme) => {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: 0,
          background: theme.palette.common.white
        },
        columnHeaders: {
          borderRadius: 0,
          borderBottom: 0
        },
        columnHeader: {
          backgroundColor: theme.palette.common.white,
          borderTop: `1px solid ${theme.palette.coolGrey.main}`,
          borderBottom: `1px solid ${theme.palette.coolGrey.main}`
        },
        columnSeparator: {
          display: 'none'
        },
        cell: {
          borderBottom: `1px solid ${theme.palette.coolGrey.main}`,
          padding: '0.5em'
        },
        columnHeaderTitle: {
          fontWeight: 700
        },
        footerContainer: {
          background: theme.palette.common.white
        }
      }
    }
  };
};

export default DataGrid;
