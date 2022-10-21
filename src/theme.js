import { blue, blueGrey, green, red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// A custom theme for this app
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: blue,
    secondary: blue,
    background: {
      default: "#EEEEEE",
      paper:"#EEEEEE"
    }
  },
  spacing: 8
});

let darktheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#222831',
    },
    background: {
      default: "#303030",
      paper:"#424242"
    }
  },
  spacing: 8
});

darktheme = responsiveFontSizes(darktheme);
theme = responsiveFontSizes(theme);


export default theme;
