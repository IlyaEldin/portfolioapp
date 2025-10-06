import classes from "../ApiPage.module.css";
import { BASE_URL, ENDPOINTS } from "../../../services/config";
import ApiProductCard from "../../ApiProductCard/ApiProductCard";
import { useState } from "react";
import axios from "axios";

export function ProductsSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [productVisible, setProductVisible] = useState([]);

  const getProductsApi = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(`${BASE_URL}/${ENDPOINTS.products}`, {});
      setProductVisible(result.data.slice(0, 8));
    } catch (error) {
      console.error(error.message);
      setProductVisible([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={classes.productsSection}>
      <div className={classes.loading}>{isLoading ? "Загрузка..." : ""}</div>

      <h1>GET-ЗАПРОС на получение товаров</h1>

      <button
        className={classes.button}
        onClick={() => getProductsApi()}
        disabled={isLoading}
      >
        ЖМИ ДЛЯ ПОЛУЧЕНИЯ ИНФОРМАЦИИ С FAKESTOREAPI
      </button>

      <button className={classes.button} onClick={() => setProductVisible([])}>
        ЖМИ ЧТОБЫ УБРАТЬ ТОВАРЫ
      </button>

      {productVisible.length > 0 ? (
        <div className={classes.productsGrid}>
          {productVisible.map((product) => (
            <ApiProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        !isLoading && (
          <div className={classes.emptyState}>Товары не загружены</div>
        )
      )}
    </section>
  );
}
