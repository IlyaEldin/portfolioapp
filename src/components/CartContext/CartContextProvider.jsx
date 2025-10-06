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
    //забираем продукт, сразу добавляем ему count

    const updateProduct = { ...newProduct, count: newProduct.count ?? 1 };

    setCartContent((prev) => {
      const exists = prev.find((product) => product.id === updateProduct.id);
      if (exists) {
        //если есть в корзине добавляем еще один
        const updateCart = prev.map((product) =>
          product.id !== updateProduct.id
            ? product
            : { ...product, count: product.count + 1 }
        );
        localStorage.setItem("cart", JSON.stringify(updateCart));
        return updateCart;
      }
      const newCart = [...prev, updateProduct];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeCountProductInCart = (removeProduct) => {
    if (!removeProduct) {
      console.error("removeProduct is undefined");
      return;
    }

    setCartContent((prev) => {
      const currentRemoveProduct = prev.find(
        (product) => product.id === removeProduct.id
      );

      if (currentRemoveProduct.count > 1) {
        const updateCart = prev.map((product) =>
          product.id === removeProduct.id
            ? { ...product, count: product.count - 1 }
            : product
        );
        localStorage.setItem("cart", JSON.stringify(updateCart));
        return updateCart;
      } else {
        const newCart = prev.filter(
          (product) => product.id !== removeProduct.id
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      }
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
        cartContent.reduce(
          (sum, product) => sum + product.price * product.count,
          0
        )
      );
    };
    totalPriceFunction();
  }, [cartContent]);

  const value = {
    cartContent,
    addProductInCart,
    removeProductInCart,
    totalPrice,
    removeCountProductInCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
