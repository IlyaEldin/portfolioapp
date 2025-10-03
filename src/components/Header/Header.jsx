import "./Header.css";
import AppNavLink from "../AppNavLink/AppNavLink";
import ThemeSlider from "../ThemeSlider/ThemeSlider";

export default function Header() {
  return (
    <>
      <div className='header-all'>
        <div className='container'>
          <div className='logo'>IEldin</div>
          <div className='navbar-all'>
            <nav className='navbar'>
              <AppNavLink to={"/home"}>Главная</AppNavLink>
              <AppNavLink to={"/catalog"}>Каталог</AppNavLink>
              <AppNavLink to={"/"}>Информация</AppNavLink>
            </nav>
            <ThemeSlider />
          </div>
        </div>
        <div className='header-divider'></div>
      </div>
    </>
  );
}
