import classes from "./ProductCard.module.css";

export default function ProductCard({ product }) {
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
        <p className={classes.productPrice}>
          {product.price}₽/{product.units}
        </p>

        <button className={classes.addToCartBtn}>В корзину</button>
      </div>
    </div>
  );
}
