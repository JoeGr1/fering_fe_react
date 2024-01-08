import React from "react";
import "./Header.scss";

import { Link, NavLink } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import { GET_OPTIONS_ACF } from "../../utils/apiCalls";

import logo from "../../assets/feringword.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [nav, setNav] = useState(null);
  const [navAcf, setNavAcf] = useState(null);

  const [navScrolled, setNavScrolled] = useState(false);
  const [burgerClicked, setBurgerClicked] = useState(false);

  const getNav = async () => {
    try {
      const response = await GET_OPTIONS_ACF();

      setNav(response.data.acf.navigation);
      setNavAcf(response.data.acf);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      getNav();
    } catch (err) {
      console.log(err);
    }
  }, []);

  function handleBurgerClick() {
    if (!burgerClicked) {
      setBurgerClicked(true);
    } else {
      setBurgerClicked(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`header ${burgerClicked ? "header-active" : ""} ${
        navScrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="header__container container">
        <nav className="nav">
          {navAcf && (
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className={`nav__logo ${
                  burgerClicked ? "nav__logo-active" : ""
                } ${navScrolled ? "nav__logo-scrolled" : ""}`}
              />
            </Link>
          )}
          <div
            className={`nav__list ${burgerClicked ? "nav__list-active" : ""}`}
          >
            {nav &&
              nav.map((link) => (
                <NavLink
                  to={link.link}
                  className={`nav__link ${
                    navScrolled ? "nav__link-scrolled" : ""
                  }`}
                  key={link.text}
                >
                  {link.text}
                </NavLink>
              ))}
          </div>
          {navAcf && (
            <Link
              to={navAcf.header_button.link}
              className={`nav__btn ${burgerClicked ? "nav__btn-active" : ""}`}
            >
              {navAcf.header_button.text}
            </Link>
          )}
          <FontAwesomeIcon
            icon={faBars}
            className={`navbar-burger ${
              burgerClicked ? "navbar-burger-active" : ""
            } ${navScrolled ? "navbar-burger-scrolled" : ""}`}
            onClick={() => {
              handleBurgerClick();
            }}
          />
        </nav>
      </div>
    </div>
  );
};

export default Header;
