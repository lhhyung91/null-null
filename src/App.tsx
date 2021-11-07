import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { palette } from "./styles/color";

function App() {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={palette}>
        <div>대기 중</div>
      </ThemeProvider>
    </div>
  );
}

export default App;
