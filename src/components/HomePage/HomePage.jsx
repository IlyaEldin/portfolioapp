import classes from "./HomePage.module.css";
import ProductSliderSwiper from "../ProductSliderSwipe/ProductSliderSwiper";

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: "Бананы",
      price: 165,
      units: "кг",
      image: "/images/bananas.webp",
    },
    {
      id: 2,
      name: "ывапБананы",
      price: 165,
      units: "кг",
      image: "/images/bananas.webp",
    },
    {
      id: 3,
      name: "ывапБананы",
      price: 165,
      units: "кг",
      image: "/images/bananas.webp",
    },
    {
      id: 4,
      name: "ыввыБананы",
      price: 165,
      units: "кг",
      image: "/images/bananas.webp",
    },
    {
      id: 5,
      name: "фываБананы",
      price: 165,
      units: "кг",
      image: "/images/bananas.webp",
    },
  ];

  return (
    <div className={classes.contain}>
      <section className={classes.popularProductSection}>
        <h1>Пополуярные товары</h1>
        <div className={classes.containerProductCard}>
          <ProductSliderSwiper products={products} />
        </div>
      </section>
    </div>
  );
}
