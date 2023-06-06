import { BrowserRouter } from "react-router-dom";
import { Routing } from "@pages/index";
import { AppThemeProvider, RobotoFontStyle, styled } from "@shared/ui";
import "./index.css";
import { useStore } from "effector-react";
import { $alert, Alert } from "@entities/alert";
import { $products, fetchProducts } from "@entities/products/model";
import { useEffect } from "react";
import { createUserId } from "@entities/feed-back/model";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Container = styled.div`
  background-color: #fffaf5;
`;

export const App = () => {
  const alert = useStore($alert);
  const products = useStore($products);
  useEffect(() => {
    fetchProducts();
    createUserId();
  }, []);

  const alertShow = Boolean(alert);

  return (
    <Container>
      <RobotoFontStyle>
        <AppThemeProvider>
          <BrowserRouter>
            <TransitionGroup>
              {alert && (
                <CSSTransition
                  in={alertShow}
                  timeout={200}
                  unmountOnExit
                  classNames={"alert-transition"}
                >
                  <Alert alert={alert} />
                </CSSTransition>
              )}
            </TransitionGroup>

            <Routing products={products} />
          </BrowserRouter>
        </AppThemeProvider>
      </RobotoFontStyle>
    </Container>
  );
};
