import {
  CssBaseline,
  GlobalStyles,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import BabylonExperience from "./BabylonExperience";
import DrawerAppBar from "./Components/DrawerAppBar";
import Footer from "./Components/Footer";
import FullscreenContainer from "./Components/FullscreenContainer";
import FullscreenSection from "./Components/FullscreenSection";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Theme from "./theme";

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
          {/* <ResponsiveAppBar /> */}
          <DrawerAppBar />
        </header>

        <FullscreenContainer>
          <FullscreenSection>
            <Typography variant="h2" gutterBottom>
              Kickstart Your Digitalization Journey.
            </Typography>
            <Typography variant="body2">
              CrystalMesh is an independent game studio based in Trier, Germany.
              We create Augmented Reality and Virtual Reality applications for
              you.
            </Typography>
          </FullscreenSection>
          <FullscreenSection>
            <Typography variant="h2" gutterBottom>
              Kickstart Your Digitalization Journey.
            </Typography>
            <Typography variant="body2">
              CrystalMesh is an independent game studio based in Trier, Germany.
              We create Augmented Reality and Virtual Reality applications for
              you.
            </Typography>
          </FullscreenSection>
          <FullscreenSection>
            <Typography variant="h2" gutterBottom>
              Kickstart Your Digitalization Journey.
            </Typography>
            <Typography variant="body2">
              CrystalMesh is an independent game studio based in Trier, Germany.
              We create Augmented Reality and Virtual Reality applications for
              you.
            </Typography>
          </FullscreenSection>
          {/* <BabylonExperience /> */}
        </FullscreenContainer>
        <Footer footers={footers} />
      </div>
    </ThemeProvider>
  );
}

export default App;
