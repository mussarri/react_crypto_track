import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CryptoCurrencies from "./pages/CryptoCurrencies";
import News from "./pages/News";
import NoPage from "./pages/NoPage";
import { createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { dark, light } from "./theme.js";
import { ThemeProvider } from "@emotion/react";
import SingleCrypto from "./pages/SingleCrypto";
console.log(process.env);

function App() {
  const mode = useSelector((state) => state.mode.value);
  const theme = createTheme(mode === "dark" ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cryptocurrencies" element={<CryptoCurrencies />} />
            <Route path="news" element={<News />} />
            <Route path="coin/:symbol" element={<SingleCrypto />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
