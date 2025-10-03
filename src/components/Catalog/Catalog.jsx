import "./Catalog.css";
import ProductCard from "../ProductCard/ProductCard";
import { PRODUCTS } from "../HomePage/products";

export default function Catalog() {
  return (
    <div className='catalog'>
      <div className='filter-bar'>
        <h3>Фильтры</h3>

        <div className='filter-group'>
          <input type='text' placeholder='Поиск...' />
        </div>

        <div className='filter-group'>
          <h4>Категория</h4>
          <select>
            <option>Все категории</option>
            <option>Фрукты</option>
            <option>Овощи</option>
            <option>Ягоды</option>
            <option>Зелень</option>
          </select>
        </div>

        <div className='filter-group'>
          <h4>Цена, ₽</h4>
          <div className='price-range'>
            <div className='price-inputs'>
              <input type='number' placeholder='От' min='0' />
              <input type='number' placeholder='До' min='0' />
            </div>
            <input type='range' className='price-slider' min='0' max='1000' />
          </div>
        </div>

        <div className='filter-actions'>
          <button className='apply-btn'>Применить</button>
          <button className='reset-btn'>Сбросить</button>
        </div>
      </div>

      <div className='products'>
        <h1>Товары</h1>
        <div className='products-list'>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
