import { CartContextProvider } from "../CartContext/CartContextProvider";
import ThemeContextProvider from "../ThemeContext/ThemeContextProvider";

export function AllContextProvider({ children }) {
  return (
    <ThemeContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </ThemeContextProvider>
  );
}
