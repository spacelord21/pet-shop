import { productData } from "@entities/index";
import { Route, Routes } from "react-router-dom";
import { BucketPage } from "./bucket";
import { Home } from "./home";
import { Product } from "./product";
import { ProductsPage } from "./products-page";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bucket" element={<BucketPage />} />
      <Route path="/products" element={<ProductsPage />} />
      {productData.map((product) => (
        <Route
          key={product.id}
          path={`/product-${product.id}`}
          element={<Product key={product.id} {...product} />}
        />
      ))}
    </Routes>
  );
};
