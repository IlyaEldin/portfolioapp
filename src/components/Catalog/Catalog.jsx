import "./Catalog.css";
import ProductCard from "../ProductCard/ProductCard";
import { PRODUCTS } from "../../data/products.js";
import useFilter from "../../hooks/useFilter.js";

export default function Catalog() {
  const {
    searchValue,
    priceValue,
    category,
    handleInitPrice,
    handleFilterReset,
    handleFilterApply,
    productsVisible,
    setSearchValue,
    setCategory,
  } = useFilter();

  const handleFormSubmit = (e) => {
    e.preventDefault(); // от перезагрузки
    handleFilterApply(); //  выполнение функции
  };

  return (
    <div className='catalog'>
      <form onSubmit={handleFormSubmit} className='filter-bar'>
        <h3>Фильтры</h3>

        <div className='filter-group'>
          <input
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
            type='text'
            placeholder='Поиск...'
          />
        </div>
        <div className='filter-group'>
          <h4>Категория</h4>
          <select
            value={category}
            onChange={(event) => {
              const newCategory = event.target.value;
              setCategory(newCategory);
              handleFilterApply(newCategory);
              event.target.blur();
            }}
          >
            <option value='Все категории'>Все категории</option>
            <option value='Фрукты'>Фрукты</option>
            <option value='Овощи'>Овощи</option>
            <option value='Ягоды'>Ягоды</option>
            <option value='Зелень'>Зелень</option>
          </select>
        </div>

        <div className='filter-group'>
          <h4>Цена, ₽</h4>
          <div className='price-range'>
            <div className='price-inputs'>
              <input
                value={priceValue[0]}
                onChange={(event) => handleInitPrice(event, "-")}
                type='text'
                placeholder='От'
              />
              <input
                value={priceValue[1]}
                onChange={(event) => handleInitPrice(event, "+")}
                type='text'
                placeholder='До'
              />
            </div>
          </div>
        </div>
        <div className='filter-actions'>
          <button type='submit' className='apply-btn'>
            Применить
          </button>
          <button
            type='button'
            onClick={handleFilterReset}
            className='reset-btn'
          >
            Сбросить
          </button>
        </div>
      </form>

      <div className='products'>
        <div className='header-products'>
          <h1>Товары</h1>
          <p>
            {productsVisible.length !== PRODUCTS.length
              ? `(найдено товаров: ${productsVisible.length})`
              : ""}
          </p>
        </div>

        <div className='products-list'>
          {productsVisible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
