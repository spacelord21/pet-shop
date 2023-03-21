import { BrowserRouter } from "react-router-dom";
import { Routing } from "@pages/index";
import { AppThemeProvider, RobotoFontStyle, styled } from "@shared/ui";
import "./index.css";
import { useStore } from "effector-react";
import { $alert, Alert } from "@entities/alert";

const Container = styled.div`
  background-color: #fffaf5;
`;

export const App = () => {
  const alert = useStore($alert);
  return (
    <Container>
      <RobotoFontStyle>
        <AppThemeProvider>
          <BrowserRouter>
            {alert ? <Alert alert={alert} /> : null}
            <Routing />
          </BrowserRouter>
        </AppThemeProvider>
      </RobotoFontStyle>
    </Container>
  );
};
