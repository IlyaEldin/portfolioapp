import "./Header.css";
import AppNavLink from "../AppNavLink/AppNavLink";
import ThemeSlider from "../ThemeSlider/ThemeSlider";
import CartIcon from "/images/cart_icon.svg";

export default function Header() {
  return (
    <>
      <div className='header-all'>
        <div className='container'>
          <div className='logo'>IEldin</div>
          <div className='navbar-all'>
            <nav className='navbar'>
              <div className='cart-container'>
                <button>
                  <img className='cart-logo' src={CartIcon} alt='star' />
                  <p>Корзина 0</p>
                </button>
              </div>
              <AppNavLink to={"/home"}>Главная</AppNavLink>
              <AppNavLink to={"/catalog"}>Каталог</AppNavLink>
              <AppNavLink to={"/api"}>Работа с API</AppNavLink>
            </nav>
            <ThemeSlider />
          </div>
        </div>
        <div className='header-divider'></div>
      </div>
    </>
  );
}
