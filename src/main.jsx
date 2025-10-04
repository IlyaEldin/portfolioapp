import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainRoutes from "./components/MainRoutes/MainRoutes";
import ThemeContextProvider from "./components/ThemeContext/ThemeContextProvider";
import { AllContextProvider } from "./components/AllContext/AllContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllContextProvider>
      <MainRoutes></MainRoutes>
    </AllContextProvider>
  </StrictMode>
);
