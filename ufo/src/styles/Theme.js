import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6473fa',
      dark: '#1c48c6',
      light: '#9ca1ff',
      contrastText: '#FAFAFA',
    },
    secondary: {
      main: '#fafafa',
      light: '#ffffff',
      dark: '#c7c7c7',
      contrastText: '#000',
    },
  },
});

export default theme;
