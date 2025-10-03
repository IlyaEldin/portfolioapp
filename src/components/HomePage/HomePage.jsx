import classes from "./HomePage.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function HomePage() {
  return (
    <div className={classes.contain}>
      <section className='Популярные товары'>
        <h1>Пополуярыне товары</h1>
        <div className='container-product-card'>
          <ProductCard />
        </div>
      </section>
    </div>
  );
}
