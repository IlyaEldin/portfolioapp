import classes from "./ProductPage.module.css";
import { ButtonAddToCart } from "../ButtonAddToCart/ButtonAddToCart";

export function ProductPage({ product, setOpen, inCart }) {
  return (
    <div className={classes.productPage}>
      <button className={classes.closeBtn} onClick={() => setOpen(false)}>
        ×
      </button>

      <div className={classes.productImage}>
        <img src={product.image} alt={product.name} />
        {product.discount > 0 && (
          <span className={classes.discountBadge}>-{product.discount}%</span>
        )}
      </div>

      <div className={classes.productInfo}>
        <h1 className={classes.productTitle}>{product.name}</h1>

        <div className={classes.productMeta}>
          <span
            className={`${classes.stock} ${
              product.inStock ? classes.inStock : classes.outOfStock
            }`}
          >
            {product.inStock ? "В наличии" : "Нет в наличии"}
          </span>
          <span className={classes.rating}>⭐ {product.rating}</span>
          <span className={classes.category}>
            Категория: {product.category}
          </span>
        </div>

        <div className={classes.priceSection}>
          <p className={classes.productPrice}>
            {product.price}₽ / {product.units}
          </p>
          {product.discount > 0 && (
            <p className={classes.originalPrice}>
              {(product.price / (1 - product.discount / 100)).toFixed(0)}₽
            </p>
          )}
        </div>

        <ButtonAddToCart inCart={inCart} product={product} />
      </div>
    </div>
  );
}
