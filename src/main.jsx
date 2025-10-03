import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainRoutes from "./components/MainRoutes/MainRoutes";
import ThemeContextProvider from "./components/ThemeContext/ThemeContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <MainRoutes></MainRoutes>
    </ThemeContextProvider>
  </StrictMode>
);
