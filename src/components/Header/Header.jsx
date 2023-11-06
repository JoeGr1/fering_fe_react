import React from "react";
import "./Header.scss";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <nav className="nav">
          {/* <Link to="/">
        <img src={logo} alt="Logo" className="nav__logo" />
      </Link> */}
          <div className="nav__list">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
            <NavLink to="/reserve/" className="nav__link">
              Reserve
            </NavLink>
            <NavLink to="/technology/" className="nav__link">
              Technology
            </NavLink>
            <NavLink to="/our-story/" className="nav__link">
              Our Story
            </NavLink>
            <NavLink to="/press-release/" className="nav__link">
              Press Release
            </NavLink>
          </div>
          {/* <div className="navbar-burger">
          <img src={burger} alt="Nav Burger Icon" className="navbar-burger-b" />
        </div> */}
        </nav>
      </div>
    </div>
  );
};

export default Header;
