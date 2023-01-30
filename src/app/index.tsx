import { BrowserRouter } from "react-router-dom";
import { Routing } from "@pages/index";

export const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};
