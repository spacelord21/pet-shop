import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { ErrorBoundary } from "./error-boundary";
import { Fallback } from "./fallback";
import { TProduct } from "@entities/products/types";
import { NotFound } from "./not-found";
import { Home } from "./home";
import { BucketPage } from "./bucket";
import { ProductsPage } from "./products-page";
import { Product } from "./product";
import { AdminPanel } from "./admin-panel";

type TRoutingProps = {
  products: TProduct[];
};

export const Routing = ({ products }: TRoutingProps) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/bucket" element={<BucketPage />} />
          <Route path="/products" element={<ProductsPage />} />
          {products.map((product) => (
            <Route
              key={product.id}
              path={`/product-${product.id}`}
              element={<Product key={product.id} {...product} />}
            />
          ))}
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
