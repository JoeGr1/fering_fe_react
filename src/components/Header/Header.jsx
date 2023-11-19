import React from "react";
import "./Header.scss";

import { Link, NavLink } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

import { GET_OPTIONS_ACF } from "../../utils/apiCalls";

import logo from "../../assets/feringword.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faInstagram } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [nav, setNav] = useState(null);
  const [navAcf, setNavAcf] = useState(null);

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

  return (
    <div className="header">
      <div className="header__container">
        <nav className="nav">
          {navAcf && (
            <Link to="/">
              <img src={logo} alt="Logo" className="nav__logo" />
            </Link>
          )}
          <div className="nav__list">
            {nav &&
              nav.map((link) => (
                <NavLink to={link.link} className="nav__link" key={link.text}>
                  {link.text}
                </NavLink>
              ))}
          </div>
          <FontAwesomeIcon icon={faBars} className="navbar-burger" />
        </nav>
      </div>
    </div>
  );
};

export default Header;
