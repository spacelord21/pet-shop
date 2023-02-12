import { Route, Routes } from "react-router-dom";
import { Bucket } from "./bucket";
import { Home } from "./home";
import { ProductsPage } from "./products-page";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bucket" element={<Bucket />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};
