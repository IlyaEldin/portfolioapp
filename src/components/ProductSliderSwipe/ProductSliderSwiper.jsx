import ProductCard from "../ProductCard/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProductSliderSwiper.css";
import { useRef, useEffect, useCallback } from "react";

export default function ProductSliderSwiper({ products }) {
  const scrollRef = useRef(null);
  const cardWidth = 265;

  const scroll = useCallback((direction) => {
    const maxScroll =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollLeft += scrollAmount;
      if (
        Math.round(scrollRef.current.scrollLeft) === maxScroll &&
        direction === "right"
      ) {
        scrollRef.current.scrollLeft = 0;
      } else if (
        Math.round(scrollRef.current.scrollLeft) === 0 &&
        direction === "left"
      ) {
        scrollRef.current.scrollLeft = maxScroll;
      }
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          scroll("left");
          break;
        case "ArrowRight":
          event.preventDefault();
          scroll("right");
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [scroll]);

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
