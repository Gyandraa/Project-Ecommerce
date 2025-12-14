import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage.jsx";
import Cart from "../pages/Cart.jsx";
import ProductsDetail from "../pages/ProductsDetail.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/productsdetail/:id" element={<ProductsDetail />} />
    </Routes>
  );
}
