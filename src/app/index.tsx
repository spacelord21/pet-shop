import { BrowserRouter } from "react-router-dom";
import { Routing } from "@pages/index";
import { AppThemeProvider } from "@shared/ui";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </AppThemeProvider>
  );
};
