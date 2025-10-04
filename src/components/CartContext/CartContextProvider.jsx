import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export function CartContextProvider({ children }) {
  const [cartContent, setCartContent] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");

  const addProductInCart = (newProduct) => {
    {
      cartContent.find((product) => product.id === newProduct.id)
        ? setCartContent((prev) => prev)
        : setCartContent((prev) => [...prev, newProduct]);
    }
  };

  const removeProductInCart = (removeProduct) => {
    setCartContent(cartContent.filter((e) => e.id !== removeProduct.id));
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
