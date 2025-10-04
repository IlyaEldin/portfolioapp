import classes from "./ProductCard.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import ModalPortal from "../ModalPortal/ModalPortal.jsx";
import { ProductPage } from "../ProductPage/ProductPage";

export default function ProductCard({ product }) {
  const { addProductInCart } = useContext(CartContext);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className={classes.card}>
      <div className={classes.productImage}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={classes.productContent}>
        <h3 className={classes.productName}>
          <button
            onClick={() => {
              setModalOpen((prev) => !prev);
            }}
          >
            {product.name}
          </button>

          <ModalPortal setModalOpen={setModalOpen} isOpen={isModalOpen}>
            <ProductPage setOpen={setModalOpen} product={product}></ProductPage>
          </ModalPortal>
          {/* дописать здесь заход на страницу товара */}
        </h3>
        <p className={classes.productPrice}>
          {product.price}₽/{product.units}
        </p>
        <span className={classes.rating}>⭐ {product.rating}</span>
        <button
          onClick={() => {
            addProductInCart(product);
          }}
          className={classes.addToCartBtn}
        >
          В корзину
        </button>
      </div>
    </div>
  );
}
