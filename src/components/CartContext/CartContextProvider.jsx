import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export function CartContextProvider({ children }) {
  const [cartContent, setCartContent] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductInCart = (newProduct) => {
    setCartContent((prev) => {
      const exists = prev.find((product) => product.id === newProduct.id);
      if (exists) {
        return prev;
      }
      const newCart = [...prev, newProduct];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeProductInCart = (removeProduct) => {
    setCartContent((prev) => {
      const newCart = prev.filter((product) => product.id !== removeProduct.id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  useEffect(() => {
    const totalPriceFunction = () => {
      setTotalPrice(
        cartContent.reduce((sum, product) => sum + product.price, 0)
      );
    };
    totalPriceFunction();
  }, [cartContent]);

  const value = {
    cartContent,
    addProductInCart,
    removeProductInCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
