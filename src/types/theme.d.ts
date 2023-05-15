import '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    backgroundGrey: {
      main: string;
    };
    nearBlack: {
      main: string;
    };
    tabColor:{
      main:string;
    },
    charcoal: {
      main: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
    };
    gold: {
      main: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
    };
    coolGrey: {
      main: string;
    };
    goldLight: {
      main: string;
    };
    warningRed: {
      main: string;
      contrastText: string;
    };
    linkBlue: {
      main: string;
    };
    goldShadow: {
      main: string
    },
  }

  interface ThemeOptions {
    backgroundGrey?: {
      main?: string;
    };
    nearBlack?: {
      main?: string;
    };
    charcoal?: {
      main?: string;
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
    };
    gold?: {
      main?: string;
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
    };
    coolGrey?: {
      main?: string;
    };
    goldLight?: {
      main?: string;
    };
    warningRed?: {
      main?: string;
      contrastText?: string;
    };
    linkBlue?: {
      main?: string;
    };
    goldShadow?: {
      main?: string;
    };
  }
}
