import classes from "../ApiPage.module.css";
import { useState } from "react";
import { BASE_URL, ENDPOINTS } from "../../../services/config";
import axios from "axios";
export function AuthSection() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const paste = async (type) => {
    type === "login"
      ? setLogin(await getFromClipboard())
      : setPassword(await getFromClipboard());
  };

  const getFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      return text;
    } catch (err) {
      console.error("Ошибка доступа к буферу обмена:", err);
      return ""; // Возвращаем пустую строку при ошибке
    }
  };

  const postAuthApi = async () => {
    if (!login.trim() || !password.trim()) {
      setToken("Заполните все поля");
      return;
    }
    try {
      setIsLoading(true);
      const result = await axios.post(`${BASE_URL}/${ENDPOINTS.login}`, {
        username: login,
        password: password,
      });
      setToken(result.data.token);
    } catch (error) {
      console.error(error.message);
      setToken("Ошибка аутентификации");
      setLogin("");
      setPassword("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
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

      <button
        disabled={isLoading}
        className={classes.button}
        onClick={() => postAuthApi()}
      >
        {isLoading ? "Загрузка..." : "Отправить запрос на аутентификацию"}
      </button>
      <div className={classes.token}>
        <p>
          {token === "Ошибка аутентификации" ||
          token === "Заполните все поля" ? (
            <span>{token}</span>
          ) : token === "" ? (
            "Получите токен"
          ) : (
            `Полученный токен: ${token}`
          )}
        </p>
      </div>
    </section>
  );
}
//изменений не требует
