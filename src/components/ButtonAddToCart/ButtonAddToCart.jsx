import classes from "./ButtonAddToCart.module.css";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";

export function ButtonAddToCart({ product, inCart }) {
  const { addProductInCart, removeCountProductInCart, cartContent } =
    useContext(CartContext);

  return (
    <>
      {inCart ? (
        <div className={classes.countProduct}>
          <button onClick={() => removeCountProductInCart(product)}>-</button>
          <div className={classes.p}>
            <p>
              {cartContent.find((cartProduct) => cartProduct.id === product.id)
                ?.count ?? 0}
            </p>
          </div>
          <button onClick={() => addProductInCart(product)}>+</button>{" "}
        </div>
      ) : (
        <button
          onClick={() => addProductInCart(product)}
          className={
            product.inStock
              ? `${classes.addToCartBtn}`
              : `${classes.addToCartBtn} ${classes.BtnDisabled}`
          }
          disabled={!product.inStock}
        >
          {!product.inStock ? "Нет в наличии" : "Добавить в корзину"}
        </button>
      )}
    </>
  );
}
