import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../features/auth/auth.context";
import toast from "react-hot-toast";

const Navbar = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const { user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopKart
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>

          <Link to="/cart" className="hover:text-blue-600">
            Cart
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Wishlist */}
          <Link to="/wishlist" className="relative">
            <FaHeart className="text-xl hover:text-red-500" />

            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl hover:text-blue-600" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2"
              >
                <FaUserCircle className="text-3xl text-blue-600" />

                {/* Desktop only */}
                <span className="hidden md:block font-semibold">
                  {user.firstName}
                </span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border">
                  <div className="px-4 py-3 border-b">
                    <p className="font-semibold">{user.firstName}</p>

                    <p className="text-xs text-gray-500">Welcome 👋</p>
                  </div>

                  <Link
                    to="/profile"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    👤 My Profile
                  </Link>

                  <Link
                    to="/orders"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    📦 My Orders
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      toast.success("Logout Successfully");
                      setProfileOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <FiLogOut />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <FaUserCircle className="text-3xl hover:text-blue-600" />
            </Link>
          )}

          {/* Mobile Menu */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="px-5 py-4 hover:bg-gray-100"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="px-5 py-4 hover:bg-gray-100"
            >
              Products
            </Link>

            <Link
              to="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="px-5 py-4 hover:bg-gray-100"
            >
              Wishlist ({wishlistItems.length})
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="px-5 py-4 hover:bg-gray-100"
            >
              Cart ({cartCount})
            </Link>

            {user && (
              <>
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="px-5 py-4 hover:bg-gray-100"
                >
                  My Profile
                </Link>

                <Link
                  to="/orders"
                  onClick={() => setMenuOpen(false)}
                  className="px-5 py-4 hover:bg-gray-100"
                >
                  My Orders
                </Link>

                <button
                  onClick={() => {
                    logout();
                    toast.success("Logout Successfully");
                    setMenuOpen(false);
                  }}
                  className="text-left px-5 py-4 text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
