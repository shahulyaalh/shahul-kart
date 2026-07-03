import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

import type { Product } from "../features/product/product.types";
import type { CartContextType, CartItem } from "../features/cart/cart.type";

import toast from "react-hot-toast";

const CartContext = createContext<CartContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        toast.success("Product quantity updated 🛒");

        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      toast.success("Product added to cart 🛒");

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

    toast.success("Product removed from cart 🗑️");
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );

    toast.success("Quantity increased ➕");
  };

  const decreaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id);

    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );

    if (item?.quantity === 1) {
      toast.success("Product removed from cart 🗑️");
    } else {
      toast.success("Quantity decreased ➖");
    }
  };

  const clearCart = () => {
    setCartItems([]);

    toast.success("Cart cleared 🛒");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
};
