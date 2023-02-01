import { BrowserRouter } from "react-router-dom";
import { Routing } from "@pages/index";
import { AppThemeProvider, RobotoFontStyle } from "@shared/ui";

export const App = () => {
  return (
    <RobotoFontStyle>
      <AppThemeProvider>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </AppThemeProvider>
    </RobotoFontStyle>
  );
};
