import { useTheme } from "../../hooks/useTheme";
import "./ThemeSlider.css";

const ThemeSlider = () => {
  const { theme, toggleTheme, lightTheme } = useTheme();

  return (
    <div className='theme-slider'>
      <button className='theme-slider-btn' onClick={toggleTheme}>
        {theme === lightTheme ? "☀️ Светлая" : "🌙 Тёмная"}
      </button>
    </div>
  );
};

export default ThemeSlider;
