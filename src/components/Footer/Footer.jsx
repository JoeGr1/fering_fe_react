import React from "react";
import "./Footer.scss";

import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__notes">
          <p className="footer__copyright">© Fering {currentYear}</p>
          <p className="footer__privacy">
            |
            <Link to="/privacy-policy/" className="footer__privacy-link">
              Privacy Policy
            </Link>
            |
          </p>
          <p className="footer__credit">
            Website by <span>JG Development</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
