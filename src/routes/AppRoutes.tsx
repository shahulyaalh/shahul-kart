import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/productdetails/ProductDetails";
import Cart from "../pages/cart/Cart";
import Wishlist from "../pages/wishlist/Wishlist";
import Checkout from "../pages/checkout/Checkout";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/notfound/NotFound";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
