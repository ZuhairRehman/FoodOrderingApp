import { CartItem, Product } from "@/types";
import { createContext, PropsWithChildren, useContext } from "react";
import { useState } from "react";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
};

const cartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const addItem = (product: Product, size: CartItem["size"]) => {
    const newCartItem: CartItem = {
      id: "1",
      product,
      size,
      quantity: 1,
      product_id: product.id,
    };
    setItems([...items, newCartItem]);
  };
  return (
    <cartContext.Provider value={{ items, addItem }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(cartContext);
