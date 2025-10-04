import { useContext } from "react";
import classes from "./ProductCart.module.css";
import { CartContext } from "../CartContext/CartContext";

export default function ProductCart({ product }) {
  const { removeProductInCart } = useContext(CartContext);

  return (
    <div className={classes.card}>
      <div className={classes.productImage}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={classes.productContent}>
        <h3 className={classes.productName}>
          <button>{product.name}</button>
          {/* дописать здесь заход на страницу товара */}
        </h3>
        <p className={classes.productPrice}>{product.price}₽</p>
      </div>
      <button
        onClick={() => {
          removeProductInCart(product);
        }}
      >
        X
      </button>
    </div>
  );
}
