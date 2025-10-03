import "./Header.css";
import AppNavLink from "../AppNavLink/AppNavLink";
import ThemeSlider from "../ThemeSlider/ThemeSlider";

export default function Header() {
  return (
    <div className='container'>
      <div className='logo'>LOGO</div>
      <nav className='navbar'>
        <AppNavLink to={"/home"}>Главная</AppNavLink>
        <AppNavLink to={"/home"}>Каталог</AppNavLink>
        <AppNavLink to={"/"}>Информация</AppNavLink>
        <ThemeSlider />
      </nav>
    </div>
  );
}
