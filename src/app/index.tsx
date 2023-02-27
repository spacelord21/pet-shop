import { BrowserRouter } from "react-router-dom";
import { Routing } from "@pages/index";
import { AppThemeProvider, RobotoFontStyle, styled } from "@shared/ui";

const Container = styled.div``;

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
