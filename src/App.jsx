import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home/Home";
import NewsRack from "./pages/NewsRack/NewsRack";
import Global from "./components/Global/Global";
import Health from "./components/Health/Health";
import Technology from "./components/Technology/Technology";
import Business from "./components/Business/Business";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newsrack" element={<NewsRack />} />
            <Route path="/global" element={<Global />} />
            <Route path="/health" element={<Health />} />
            <Route path="/business" element={<Business />} />
            <Route path="/tech" element={<Technology />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
