import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: "Kaushan Script";
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
