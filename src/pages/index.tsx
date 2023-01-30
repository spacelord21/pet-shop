import { Route, Routes } from "react-router-dom";
import { Bucket } from "./bucket";
import { Home } from "./home";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bucket" element={<Bucket />} />
    </Routes>
  );
};
