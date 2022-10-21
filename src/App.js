import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import DrawerAppBar from "./Components/Pages/DrawerAppBar";
import Footer from "./Components/Pages/Footer";
import Theme from "./theme";
import Home from "./Components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import Privacy from "./Components/Pages/Privacy";
const globalStyles = {
  a: { textDecoration: "none" },
};

const footers = [{ name: "Privacy Policy & Impressum", link: "/privacy" }];

function App() {
  const inputGlobalStyles = <GlobalStyles styles={globalStyles} />;

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {/* {inputGlobalStyles} */}

      <div className="App">
        <header className="App-header">
          <DrawerAppBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/privacy" element={<Privacy />}/>

        </Routes>

        <Footer footers={footers} />
      </div>
    </ThemeProvider>
  );
}

export default App;
