import { blueGrey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
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

export default theme;
