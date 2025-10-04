import "./Catalog.css";
import ProductCard from "../ProductCard/ProductCard";
import { PRODUCTS } from "../HomePage/products";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [searchValue, setSearchValue] = useState("");
  const [priceValue, setPriceValue] = useState(["", ""]);
  const [category, setCategory] = useState("Все категории");
  const [productsVisible, setProductVisible] = useState(PRODUCTS);

  useEffect(() => {
    console.log(document.documentElement.clientWidth);
  }, [searchValue]);

  const handleFilterApply = () => {
    console.log(priceValue);
    let priceValueNew = "";

    if (priceValue[0] !== "" && priceValue[1] === "") {
      priceValueNew = 1000;
    } else {
      priceValueNew = priceValue[1];
    }

    setProductVisible(
      PRODUCTS.filter(
        (product) =>
          (product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            searchValue === "") &&
          (category === product.category || category === "Все категории") &&
          (product.price < priceValueNew || priceValueNew === "") &&
          (product.price > priceValue[0] || priceValue[0] === "")
      )
    );
  };

  const handleFilterReset = () => {
    setSearchValue("");
    setPriceValue(["", ""]);
    setCategory("Все категории");
    setProductVisible(PRODUCTS);
  };

  const handleInitPrice = (event, type) => {
    const newValue = event.target.value;

    // проверка на стирание
    if (newValue === "") {
      setPriceValue((prev) => (type === "+" ? [prev[0], ""] : ["", prev[1]]));
      return;
    }

    const numericValue = Number(newValue);
    setPriceValue((prev) =>
      !isNaN(numericValue) && isFinite(numericValue)
        ? type === "+"
          ? [prev[0], numericValue]
          : [numericValue, prev[1]]
        : prev
    );
  };

  return (
    <div className='catalog'>
      <div className='filter-bar'>
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
            onChange={(event) => setCategory(event.target.value)}
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
                min='0'
              />
              <input
                value={priceValue[1]}
                onChange={(event) => handleInitPrice(event, "+")}
                type='text'
                placeholder='До'
                min='0'
              />
            </div>
          </div>
        </div>
        <div className='filter-actions'>
          <button onClick={handleFilterApply} className='apply-btn'>
            Применить
          </button>
          <button onClick={handleFilterReset} className='reset-btn'>
            Сбросить
          </button>
        </div>
      </div>

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
