import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../features/product/product.types";

interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  isWishlisted: (id: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

interface Props {
  children: ReactNode;
}

export const WishlistProvider = ({ children }: Props) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product: Product) => {
    if (!wishlistItems.some((item) => item.id === product.id)) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  const isWishlisted = (id: number) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }

  return context;
};
