import ProductCard from "../ProductCard/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProductSliderSwiper.css";
import { useState } from "react";

export default function ProductSliderSwiper({ products }) {
  return (
    <div className='product-swiper'>
      <div className='btn-swiper'>
        <button onClick={() => handleSwipe("left")} className='btn-swiper'>
          {"<"}
        </button>
      </div>

      {products.map((product, index) => (
        <ProductCard key={`${product.id}-${index}`} product={product} />
      ))}

      <div className='btn-swiper'>
        <button onClick={() => handleSwipe("right")}>{">"}</button>
      </div>
    </div>
  );
}
