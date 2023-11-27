import React from "react";

import "./SpecList.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SpecList = ({ acf }) => {
  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    slidesToShow: 4,
    cssEase: "linear",
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="spec-list">
      <div className="spec-list__container container">
        <Slider {...sliderSettings}>
          {acf &&
            acf.spec_list.map((item, i) => (
              <div key={i} className="spec-list_item">
                <div className="spec-list__number-box">
                  <div className="spec-list__number">{item.number}</div>
                  <div className="spec-list__measurement">
                    {item.measurement}
                  </div>
                </div>
                <div className="spec-list__text">{item.text}</div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default SpecList;
