import { gold, charcoal } from './colours';

// NOTE: Changes here may require type updates
// in src/types/theme.d.ts

const Palette = () => {
  const whiteColor = '#FFF';
  const blackColor = '#000';

  return {
    contrastThreshold: 4.5,
    tonalOffset: 0.2,
    common: {
      black: blackColor,
      white: whiteColor,
      tabColor: '#000000d9'
    },
    primary: {
      main: charcoal[500],
      ...charcoal
    },
    secondary: {
      main: gold[500],
      ...charcoal
    },
    backgroundGrey: {
      main: '#F5F5F5'
    },
    nearBlack: {
      main: '#101820'
    },
    tabColor: {
      main: '#000000d9'
    },
    charcoal: {
      light: charcoal[300],
      main: charcoal[500],
      dark: charcoal[700],
      ...charcoal
    },
    gold: {
      light: gold[300],
      main: gold[500],
      dark: gold[700],
      ...gold
    },
    goldShadow: {
      main: '#F1C40033',
      dark: '#F1C400'
    },
    coolGrey: {
      main: '#97999B'
    },
    goldLight: {
      main: '#FFD700'
    },
    warningRed: {
      main: '#EF0505',
      contrastText: '#FFF'
    },
    linkBlue: {
      main: '#007DF1',
      dark: '#006ED4'
    },
    error: {
      light: '#FF5B3F',
      main: '#FF3E1D',
      dark: '#E8381A',
      contrastText: whiteColor
    }
  };
};

export default Palette;
