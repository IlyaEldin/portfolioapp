import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeContextProvider({ children }) {
  const lightTheme = "light";
  const darkTheme = "dark";

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    } else {
      return lightTheme;
    }
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    theme === "dark" ? setTheme(lightTheme) : setTheme(darkTheme);
  };

  const value = {
    theme,
    toggleTheme,
    lightTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
