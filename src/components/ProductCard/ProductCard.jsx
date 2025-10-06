import classes from "./ProductCard.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import ModalPortal from "../ModalPortal/ModalPortal.jsx";
import ProductPage from "../ProductPage/ProductPage.jsx";

export default function ProductCard({ product }) {
  const { addProductInCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={classes.card}>
      <div className={classes.productImage}>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIsModalOpen((prev) => !prev);
          }}
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className={classes.productContent}>
        <h3 className={classes.productName}>
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            {product.name}
          </button>
        </h3>
        {isModalOpen && (
          <ModalPortal setModalOpen={setIsModalOpen} isOpen={isModalOpen}>
            <ProductPage
              setOpen={setIsModalOpen}
              product={product}
            ></ProductPage>
          </ModalPortal>
        )}

        {/* заход на страницу товара */}

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
