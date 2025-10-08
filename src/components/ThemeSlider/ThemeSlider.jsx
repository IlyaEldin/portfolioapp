import { useTheme } from "../../hooks/useTheme";
import "./ThemeSlider.css";

const ThemeSlider = ({ isMobileOpen }) => {
  const { theme, toggleTheme, lightTheme } = useTheme();

  return (
    <div className='theme-slider'>
      <button
        className={
          isMobileOpen
            ? "theme-slider-btn"
            : "theme-slider-btn theme-slider-btn-all"
        }
        onClick={toggleTheme}
      >
        {isMobileOpen
          ? `${theme === lightTheme ? "☀️" : "🌙"}`
          : `${theme === lightTheme ? "☀️ Светлая" : "🌙 Тёмная"}`}
      </button>
    </div>
  );
};

export default ThemeSlider;
