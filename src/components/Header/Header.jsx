import "./Header.css";
import AppNavLink from "../AppNavLink/AppNavLink";
import ThemeSlider from "../ThemeSlider/ThemeSlider";
import CartIcon from "/images/cart_icon.svg";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import ProductCart from "../ProductCart/ProductCart";

export default function Header() {
  const { cartContent, totalPrice } = useContext(CartContext);
  const [isCartVisible, setCartVisible] = useState(false);

  return (
    <>
      <div className='header-all'>
        <div className='container'>
          <div className='logo'>IEldin</div>
          <div className='navbar-all'>
            <nav className='navbar'>
              <div className='cart-container'>
                <button
                  onClick={() => {
                    setCartVisible((prev) => !prev);
                  }}
                >
                  <img className='cart-logo' src={CartIcon} alt='star' />
                  <p>Корзина {cartContent.length}</p>
                </button>

                <div className={isCartVisible ? "cart" : "cart cart-none"}>
                  <div className='products-in-cart'>
                    {cartContent.map((product) => (
                      <ProductCart key={product.id} product={product} />
                    ))}
                  </div>
                  <div className='cart-info'>
                    {totalPrice !== 0 ? (
                      <h2>Итого: {totalPrice}₽</h2>
                    ) : (
                      <h2>Корзина пуста</h2>
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
