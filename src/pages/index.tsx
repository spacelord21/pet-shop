import { $products, fetchProducts } from "@entities/products/model";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "./error-boundary";
import { Fallback } from "./fallback";

const Home = lazy(() =>
  import("./home").then(({ Home }) => ({ default: Home }))
);
const BucketPage = lazy(() =>
  import("./bucket").then(({ BucketPage }) => ({ default: BucketPage }))
);
const Product = lazy(() =>
  import("./product").then(({ Product }) => ({ default: Product }))
);
const ProductsPage = lazy(() =>
  import("./products-page").then(({ ProductsPage }) => ({
    default: ProductsPage,
  }))
);
const NotFound = lazy(() =>
  import("./not-found").then(({ NotFound }) => ({ default: NotFound }))
);

export const Routing = () => {
  const products = useStore($products);

  useEffect(() => {
    fetchProducts();
  }, []);

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
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
