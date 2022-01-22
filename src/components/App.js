import { createGlobalStyle } from "styled-components";
import { Button } from "./common/";

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
      <header className="App-header">
        <h1>App</h1>
      </header>

      <Button>Primary button</Button>
      <Button secondary>Secondary button</Button>

      <Button disabled>Disabled button</Button>
      <Button large>Large button</Button>
    </div>
  );
}

export default App;
