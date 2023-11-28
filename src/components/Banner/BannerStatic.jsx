import React from "react";

import { Link } from "react-router-dom";

const BannerStatic = ({ image, acf }) => {
  return (
    <section className="banner">
      <img src={image.source_url} alt="Image" className="banner__background" />
      <div className="banner__overlay"></div>

      <div className="banner__container">
        <div className="banner__content">
          {acf.banner_heading && (
            <p className="banner__content-heading"> {acf.banner_heading} </p>
          )}
          {acf.banner_title && (
            <p className="banner__content-title">{acf.banner_title} </p>
          )}
          {acf.banner_button && acf.banner_button_link && (
            <Link to={acf.banner_button_link} className="banner__content-btn">
              {acf.banner_button}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default BannerStatic;
