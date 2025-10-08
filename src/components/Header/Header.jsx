import "./Header.css";
import AppNavLink from "../AppNavLink/AppNavLink";
import ThemeSlider from "../ThemeSlider/ThemeSlider";
import CartIcon from "/images/cart_icon.svg";
import { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import ProductCart from "../ProductCart/ProductCart";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { cartContent, totalPrice } = useContext(CartContext);
  const [isCartVisible, setCartVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileOpenBar, setIsMobileOpenBar] = useState(false);

  const cartRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        //существует и нажатие вне дочерних элементов event.target элемент по которому произошло нажатие
        setCartVisible(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        //существует и нажатие вне дочерних элементов event.target элемент по которому произошло нажатие
        setIsMobileOpenBar(false);
      }
    };

    const visibleMobileNavBar = () => {
      {
        setIsMobileOpen(document.documentElement.clientWidth <= 769);
      }
    };

    visibleMobileNavBar();

    window.addEventListener("resize", visibleMobileNavBar);

    if (isCartVisible || isMobileOpenBar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", visibleMobileNavBar);
    };
  }, [isCartVisible, isMobileOpenBar]);

  return (
    <>
      <div className='header-all'>
        <div className='container'>
          <div className='logo'>
            <NavLink to={"/home"}>
              {isMobileOpen ? <p>IE</p> : <p>IEldin</p>}
            </NavLink>
          </div>
          <div className='navbar-all'>
            <nav className='navbar'>
              <div className='cart-container'>
                <button
                  onClick={() => {
                    if (isMobileOpenBar) {
                      setIsMobileOpenBar(false);
                    }
                    setCartVisible((prev) => !prev);
                  }}
                >
                  <img className='cart-logo' src={CartIcon} alt='star' />
                  <p>Корзина {cartContent.length}</p>
                </button>

                <div
                  ref={cartRef}
                  className={isCartVisible ? "cart" : "cart cart-none"}
                >
                  <div className='products-in-cart'>
                    {cartContent.map((product) => (
                      <ProductCart key={product.id} product={product} />
                    ))}
                  </div>
                  <div className='divider-cart'></div>
                  <div className='cart-info'>
                    {totalPrice !== 0 ? (
                      <h3>Итого: {totalPrice}₽</h3>
                    ) : (
                      <h3>Корзина пуста</h3>
                    )}
                  </div>
                </div>
              </div>
              {isMobileOpen ? (
                <div ref={menuRef} className='mobile-navigation'>
                  <button onClick={() => setIsMobileOpenBar((prev) => !prev)}>
                    ☰
                  </button>
                  {isMobileOpenBar && (
                    <div className='mobile-navigation-bar'>
                      <AppNavLink to={"/home"}>Главная</AppNavLink>
                      <AppNavLink to={"/catalog"}>Каталог</AppNavLink>
                      <AppNavLink to={"/api"}>Работа с API</AppNavLink>
                    </div>
                  )}
                </div>
              ) : (
                <div className='navigation'>
                  <AppNavLink to={"/home"}>Главная</AppNavLink>
                  <AppNavLink to={"/catalog"}>Каталог</AppNavLink>
                  <AppNavLink to={"/api"}>Работа с API</AppNavLink>
                </div>
              )}
            </nav>
            <ThemeSlider isMobileOpen={isMobileOpen} />
          </div>
        </div>
        <div className='header-divider'></div>
      </div>
    </>
  );
}
