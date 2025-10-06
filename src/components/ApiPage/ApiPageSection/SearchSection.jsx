import classes from "../ApiPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";

export function SearchSection() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [usersResult, setUsersResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [timeoutId, setTimeoutId] = useState(null); //храним id таймаута

  const getSearchApi = async (query) => {
    clearTimeout(timeoutId); //удаляем предыдущий

    const timeId = setTimeout(async () => {
      try {
        setIsLoading(true);
        if (query === "") {
          setSearchResult([]);
        } else {
          const result = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?title_like=${query}`
          );
          console.log(result.data);
          setSearchResult(result.data);
        }
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsLoading(false);
      }
    }, 500); // 0.5 секунды задержки перед запросом
    setTimeoutId(timeId); //ставим id что бы потом удалить
  };

  useEffect(() => {
    const getUsersApi = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setUsersResult(
          result.data.map(({ id, name, username, email }) => ({
            id,
            name,
            username,
            email,
          }))
        );
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getUsersApi();
  }, []);

  return (
    <section className={classes.searchSection}>
      <h1>GET-ЗАПРОС Поиск товаров с использованием Debounce</h1>
      <div className={classes.loading}>{isLoading ? "Загрузка..." : ""}</div>
      <input
        type='text'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          getSearchApi(e.target.value);
        }}
        placeholder='Например: "ga", "lat", "mol"'
      />
      <h1>Составление постов для полученых пользователей через useEffect</h1>
      <Posts posts={searchResult.slice(0, 10)} users={usersResult} />
    </section>
  );
}
