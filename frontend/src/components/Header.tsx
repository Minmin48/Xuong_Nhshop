import { Link, NavLink } from "react-router-dom";
import { IconLove, IconSearch, IconShop, IconUser, Logo } from "./icons";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="header__logo">
            <img src={Logo} alt="#" />
          </Link>
          <div className="button-mobile">
            <button>=</button>
          </div>
          <nav className="main-menu">
            <ul className="main-menu__list">
              <li className="main-menu__item">
                <NavLink to="/" className="main-menu__link">
                  Home
                </NavLink>
              </li>
              <li className="main-menu__item">
                <NavLink to="/shop" className="main-menu__link">
                  Shop
                </NavLink>
              </li>
              <li className="main-menu__item">
                <NavLink to="/about" className="main-menu__link">
                  About
                </NavLink>
              </li>
              <li className="main-menu__item">
                <NavLink to="/contact" className="main-menu__link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header-items">
            <div className="header-item-user">
              <a href="/signin">
                <span>
                  <img src={IconUser} />
                </span>
              </a>
            </div>
            <div className="header-item-user">
              <span>
                <img src={IconSearch} />
              </span>
            </div>
            <div className="header-item-user">
              <span>
                <img src={IconLove} />
              </span>
            </div>
            <div className="header-item-user">
              <span>
                <img src={IconShop} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
