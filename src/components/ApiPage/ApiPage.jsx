import axios from "axios";
import { useState } from "react";
import { BASE_URL, ENDPOINTS } from "../../services/config";
import ApiProductCard from "../ApiProductCard/ApiProductCard";
import classes from "./ApiPage.module.css";
import User from "../User/User";

export default function ApiPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [productVisible, setProductVisible] = useState([]);
  const [usersVisible, setUsersVisible] = useState([]);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const getFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      return text;
    } catch (err) {
      console.error("Ошибка доступа к буферу обмена:", err);
      return ""; // Возвращаем пустую строку при ошибке
    }
  };

  const paste = async (type) => {
    type === "login"
      ? setLogin(await getFromClipboard())
      : setPassword(await getFromClipboard());
  };

  const getSearchApi = async () => {
    setSearchResult([{ id: 1, user: 2 }]);
  };

  const getProductsApi = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(`${BASE_URL}/${ENDPOINTS.products}`, {});
      setProductVisible(result.data.slice(0, 6));
    } catch (error) {
      console.error(error.message);
      setProductVisible([]);
    } finally {
      setIsLoading(false);
    }
  };

  const postAuthApi = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/${ENDPOINTS.login}`, {
        username: login,
        password: password,
      });
      setToken(result.data.token);
    } catch (error) {
      console.error(error.message);
      setToken("");
    }
  };

  const getUsersApi = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/${ENDPOINTS.users}`, {});
      setUsersVisible(result.data);
      return result.data;
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={classes.container}>
      <section>
        <div className={classes.loading}>{isLoading ? "Загрузка..." : ""}</div>

        <h1>GET-ЗАПРОС на получение товаров</h1>

        <button
          className={classes.button}
          onClick={getProductsApi}
          disabled={isLoading}
        >
          ЖМИ ДЛЯ ПОЛУЧЕНИЯ ИНФОРМАЦИИ С FAKESTOREAPI
        </button>

        <button
          className={classes.button}
          onClick={() => setProductVisible([])}
        >
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
      <section className={classes.authSection}>
        <h1>POST-запрос на аутентификацию и получение токена</h1>
        <div className={classes.login}>
          <input
            type='text'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <button onClick={() => paste("login")} className={classes.button}>
            Вставить логин
          </button>
        </div>
        <div className={classes.password}>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => paste("password")} className={classes.button}>
            Вставить пароль
          </button>
        </div>

        <button className={classes.button} onClick={postAuthApi}>
          Отправить запрос на аутентификацию
        </button>
        <div className={classes.token}>
          <p>{token ? `Полученный токен: ${token}` : ""}</p>
        </div>
      </section>
      <section className={classes.usersSection}>
        <h1>GET-ЗАПРОС на получение пользователей</h1>

        <button className={classes.button} onClick={getUsersApi}>
          ЖМИ ДЛЯ ПОЛУЧЕНИЯ ИНФОРМАЦИИ С FAKESTOREAPI
        </button>

        <button className={classes.button} onClick={() => setUsersVisible([])}>
          ЖМИ ЧТОБЫ УБРАТЬ ПОЛЬЗОВАТЕЛЕЙ
        </button>

        <div className={classes.usersList}>
          {usersVisible.slice(0, 5).map(({ id, username, password }) => (
            <User key={password} id={id} login={username} password={password} />
          ))}
        </div>
      </section>
      <section className={classes.searchSection}>
        <h1>GET-ЗАПРОС Поиск товаров с использованием Debounce</h1>

        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className={classes.button}
          onClick={() => getSearchApi()}
          disabled={isLoading}
        >
          ЖМИ ДЛЯ ПОЛУЧЕНИЯ ИНФОРМАЦИИ С FAKESTOREAPI
        </button>
        <p>{searchResult.length ? JSON.stringify(searchResult) : ""}</p>
      </section>
    </div>
  );
}
