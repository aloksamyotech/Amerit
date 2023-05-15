const Toolbar = () => {
  return {
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1]
        }
      }
    }
  };
};

export default Toolbar;
