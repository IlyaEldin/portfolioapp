import classes from "./HomePage.module.css";
import ProductSliderSwiper from "../ProductSliderSwipe/ProductSliderSwiper";
import { TOPPRODUCTS } from "./products";

export default function HomePage() {
  return (
    <div className={classes.contain}>
      <section className={classes.popularProductSection}>
        <h1>Пополуярные товары</h1>
        <div className={classes.containerProductCard}>
          <ProductSliderSwiper products={TOPPRODUCTS} />
        </div>
      </section>
    </div>
  );
}
