import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#FF5349',
      main: '#FF5349',
      dark: '#FF5349',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9EA6EF',
      main: '#9EA6EF',
      dark: '#9EA6EF',
      contrastText: '#000',
    },
    background:{
      default: '#202124',
      paper: '#303134',
    },
  },
});