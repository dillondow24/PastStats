import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    palette: {
      primary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      },
      secondary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      },
      background:{
        default: string;
        paper: string;
    }
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export default createMuiTheme({ palette });