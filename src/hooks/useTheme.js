import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext/ThemeContext.js";

export const useTheme = () => {
  const context = useContext(ThemeContext); // отправляем все value из контекста
  return context;
};
