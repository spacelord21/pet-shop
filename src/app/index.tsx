import { BrowserRouter } from "react-router-dom";
import { Routing } from "@pages/index";
import { AppThemeProvider, RobotoFontStyle, styled } from "@shared/ui";
import "./index.css";

const Container = styled.div`
  background-color: #fffaf5;
`;

export const App = () => {
  return (
    <Container>
      <RobotoFontStyle>
        <AppThemeProvider>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </AppThemeProvider>
      </RobotoFontStyle>
    </Container>
  );
};
