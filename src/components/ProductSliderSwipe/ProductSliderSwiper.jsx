import ProductCard from "../ProductCard/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProductSliderSwiper.css";
import { useEffect, useState } from "react";

export default function ProductSliderSwiper({ products }) {
  const [productId, setProductId] = useState([0, 3]);
  // const [productReId, setProductReId] = useState([]);
  const [productsVisible, setProductsVisible] = useState(
    products.slice(productId[0], productId[1])
  );

  const handleSwipe = (type) => {
    setProductId((prev) => {
      const visibleCount = 3; // фиксированное количество карточек

      let newStart = type === "left" ? prev[0] - 1 : prev[0] + 1;

      // Простой круговой обработчик только для start
      newStart = (newStart + products.length) % products.length;

      return [newStart, newStart + visibleCount];
    });
  };

  useEffect(() => {
    const visibleCount = 3;
    let visibleProducts = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (productId[0] + i) % products.length;
      visibleProducts.push(products[index]);
    }

    setProductsVisible(visibleProducts);
  }, [productId, products]);

  return (
    <div className='product-swiper'>
      <div className='btn-swiper'>
        <button onClick={() => handleSwipe("left")} className='btn-swiper'>
          {"<"}
        </button>
      </div>

      {productsVisible.map((product, index) => (
        <ProductCard key={`${product.id}-${index}`} product={product} />
      ))}

      <div className='btn-swiper'>
        <button onClick={() => handleSwipe("right")}>{">"}</button>
      </div>
    </div>
  );
}
