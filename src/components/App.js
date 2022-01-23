import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${({ theme }) => theme.bodyFontColor};
    font-family: "Kaushan Script";
  }
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme(({ id }) => (id === "light" ? darkTheme : lightTheme));
        },
      }}
    >
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
