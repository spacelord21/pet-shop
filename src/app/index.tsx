import { BrowserRouter } from "react-router-dom";
import { Routing } from "@pages/index";
import { AppThemeProvider, RobotoFontStyle, styled } from "@shared/ui";
import "./index.css";
import { useStore } from "effector-react";
import { $alert, Alert } from "@entities/alert";
import { $products, fetchProducts } from "@entities/products/model";
import { useEffect } from "react";

const Container = styled.div`
  background-color: #fffaf5;
`;

export const App = () => {
  const alert = useStore($alert);
  const products = useStore($products);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <RobotoFontStyle>
        <AppThemeProvider>
          <BrowserRouter>
            {alert ? <Alert alert={alert} /> : null}
            <Routing products={products} />
          </BrowserRouter>
        </AppThemeProvider>
      </RobotoFontStyle>
    </Container>
  );
};
