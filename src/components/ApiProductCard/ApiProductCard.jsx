import classes from "./ApiProductCard.module.css";

const ApiProductCard = ({ product }) => {
  const { title, price, description, category, image, rating } = product;

  const truncateDescription = (text) => {
    if (text.length <= 50) return text;
    return text.substring(0, 50) + "...";
  };

  const truncateDescriptionName = (text) => {
    if (text.length <= 30) return text;
    return text.substring(0, 30) + "...";
  };

  const renderRatingStars = (rate) => {
    const fullStars = Math.floor(rate);

    return (
      <div className={classes.ratingStars}>
        {"★".repeat(fullStars)}
        {"☆".repeat(5 - fullStars)}
        <span className={classes.ratingText}>({rate})</span>
      </div>
    );
  };

  return (
    <div className={classes.productCard}>
      <div className={classes.productImage}>
        <img src={image} alt={title} />
        <div className={classes.productCategory}>{category}</div>
      </div>

      <div className={classes.productContent}>
        <h3 className={classes.productTitle}>
          {truncateDescriptionName(title)}
        </h3>

        <div className={classes.productRating}>
          {renderRatingStars(rating.rate)}
          <span className={classes.reviewCount}>
            ({rating.count} просмотров)
          </span>
        </div>

        <p className={classes.productDescription}>
          {truncateDescription(description)}
        </p>

        <div className={classes.productFooter}>
          <div className={classes.productPrice}>{price * 100}₽</div>
          <button className={classes.addToCartBtn}>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
};

export default ApiProductCard;
