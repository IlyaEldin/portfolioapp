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
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        //существует и нажатие вне дочерних элементов event.target элемент по которому произошло нажатие
        setCartVisible(false);
      }
    };

    if (isCartVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartVisible]);

  return (
    <>
      <div className='header-all'>
        <div className='container'>
          <div className='logo'>
            <NavLink to={"/home"}>
              <p>IEldin</p>
            </NavLink>
          </div>
          <div className='navbar-all'>
            <nav className='navbar'>
              <div className='cart-container'>
                <button
                  onClick={() => {
                    setCartVisible(true);
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
