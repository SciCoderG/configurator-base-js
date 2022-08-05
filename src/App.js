import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import DrawerAppBar from "./Components/Pages/DrawerAppBar";
import Footer from "./Components/Pages/Footer";
import Theme from "./theme";
import LandingPage from "./Components/Pages/LandingPage";
const globalStyles = {
  a: { textDecoration: "none" },
};

const footers = [{ name: "Privacy Policy & Impressum", link: "/privacy" }];

function App() {
  const inputGlobalStyles = <GlobalStyles styles={globalStyles} />;

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <div className="App">
        {inputGlobalStyles}
        <header className="App-header">
          <DrawerAppBar />
        </header>

        {/* <BabylonExperience /> */}
        <div className="foreground">
          <LandingPage />
          <LandingPage />
          <LandingPage />
          <LandingPage />

          <Footer footers={footers} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
