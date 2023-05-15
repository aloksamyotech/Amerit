// Override Icon with styles that adjust for differences between
// Material icons and Font Awesome icons, as suggested here:
// https://mui.com/material-ui/icons/#font-awesome-2
const Icon = () => {
  return {
    MuiIcon: {
      styleOverrides: {
        root: {
          boxSizing: 'content-box',
          padding: 3,
          fontSize: '1.125rem'
        }
      }
    }
  };
};

export default Icon;
