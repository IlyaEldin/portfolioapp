import classes from "./User.module.css";
import { useState } from "react";

export default function User({ id, login, password }) {
  const [copied, setCopied] = useState(false);

  const copy = async (type) => {
    const copiedText = type === "login" ? login : password;

    try {
      await navigator.clipboard.writeText(copiedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className={classes.contain}>
      <div className={classes.containUser}>
        <span className={classes.userId}>#{id}</span>
        <span
          className={classes.userLogin}
          onClick={() => copy("login")}
          title='Кликните чтобы скопировать логин'
        >
          {login}
        </span>
        <span
          className={classes.userPassword}
          onClick={() => copy("password")}
          title='Кликните чтобы скопировать пароль'
        >
          {password}
        </span>
      </div>

      <div className={classes.copyPoint}>
        <p>{copied ? "Значение скопировано" : "Скопируйте значение"}</p>
      </div>
    </div>
  );
}
