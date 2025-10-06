import classes from "../ApiPage.module.css";
import { BASE_URL, ENDPOINTS } from "../../../services/config";
import { useState } from "react";
import axios from "axios";
import User from "../../User/User";

export function UsersSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [usersVisible, setUsersVisible] = useState([]);

  const getUsersApi = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(`${BASE_URL}/${ENDPOINTS.users}`, {});
      setUsersVisible(result.data);
      return result.data;
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={classes.usersSection}>
      <h1>GET-ЗАПРОС на получение пользователей</h1>
      <div className={classes.loading}>{isLoading ? "Загрузка..." : ""}</div>
      <button className={classes.button} onClick={getUsersApi}>
        ЖМИ ДЛЯ ПОЛУЧЕНИЯ ИНФОРМАЦИИ С FAKESTOREAPI
      </button>

      <button className={classes.button} onClick={() => setUsersVisible([])}>
        ЖМИ ЧТОБЫ УБРАТЬ ПОЛЬЗОВАТЕЛЕЙ
      </button>

      <div className={classes.usersList}>
        {usersVisible ? (
          usersVisible
            .slice(0, 5)
            .map(({ id, username, password }) => (
              <User
                key={password}
                id={id}
                login={username}
                password={password}
              />
            ))
        ) : (
          <p className={classes.emptyState}>Пользователи не загружены</p>
        )}
      </div>
    </section>
  );
}
