import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { MainContainer } from "./style";
import { Toaster } from "react-hot-toast";
import Routing from "./navigation/routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainContainer>
          <Toaster />
          <Routing />
        </MainContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
