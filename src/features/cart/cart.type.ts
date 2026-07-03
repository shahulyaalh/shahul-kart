import type { Product } from "../product/product.types";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];

  addToCart: (product: Product) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  clearCart: () => void;
}
