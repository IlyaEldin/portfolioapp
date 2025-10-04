import ProductCard from "../ProductCard/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProductSliderSwiper.css";
import { useRef } from "react";

export default function ProductSliderSwiper({ products }) {
  const scrollRef = useRef(null);
  const cardWidth = 265;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollLeft += scrollAmount;
      if (scrollRef.current.scrollLeft === 2900 && direction === "right") {
        scrollRef.current.scrollLeft = 0;
      } else if (scrollRef.current.scrollLeft === 0 && direction === "left") {
        scrollRef.current.scrollLeft = 2900;
      }
    }
  };

  return (
    <div className='product-swiper'>
      <div className='btn-swiper'>
        <button onClick={() => scroll("left")} className='btn-swiper'>
          {"<"}
        </button>
      </div>
      <div ref={scrollRef} className='products-wrapper'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className='btn-swiper'>
        <button onClick={() => scroll("right")}>{">"}</button>
      </div>
    </div>
  );
}
