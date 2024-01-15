import React from "react";

import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const BannerSlider = ({ images, acf }) => {
  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  return (
    <section className="banner banner-slider">
      <Slider {...sliderSettings}>
        {images.map((item, index) => {
          return (
            <div className="banner__slider-item" key={index + 1}>
              <img
                src={item.source_url}
                alt="Image"
                className="banner__background"
              />
              <div className="banner__overlay"></div>
              <div className="banner__container">
                <div className="banner__content">
                  {acf.banner_heading && (
                    <p className="banner__content-heading">
                      {" "}
                      {acf.banner_heading}{" "}
                    </p>
                  )}
                  {acf.banner_title && (
                    <p className="banner__content-title">{acf.banner_title} </p>
                  )}
                  {acf.banner_button && acf.banner_button_link && (
                    <Link
                      to={acf.banner_button_link}
                      className="banner__content-btn"
                    >
                      {acf.banner_button}{" "}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <a href="#Intro" className="banner__scroll-btn">
        <FontAwesomeIcon
          icon={faChevronDown}
          className="banner__scroll-btn-icon"
        />
      </a>
    </section>
  );
};

export default BannerSlider;
