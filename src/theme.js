import { blueGrey } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// A custom theme for this app
let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#626262',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: "#303030",
      paper:"#424242"
    }
  },
  spacing: 8
});
theme = responsiveFontSizes(theme);


export default theme;
