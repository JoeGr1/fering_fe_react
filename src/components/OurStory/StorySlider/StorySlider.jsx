import React from "react";

import "./StorySlider.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from "react";
import { GET_IMAGE_URL } from "../../../utils/apiCalls";

const StorySlider = ({ acf }) => {
  const [images, setImages] = useState([]);

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

  useEffect(() => {
    const getImageUrls = async () => {
      if (acf && acf.slider_image_list) {
        try {
          const promises = acf.slider_image_list.map(async (item) => {
            const response = await GET_IMAGE_URL(item.image.id);
            return response.data;
          });

          const resolvedImages = await Promise.all(promises);
          setImages(resolvedImages);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getImageUrls();
  }, [acf]);

  return (
    <section className="story-slider">
      <Slider {...sliderSettings}>
        {acf &&
          images &&
          images.map((item, index) => {
            return (
              <div className="story-slider__image-container" key={index + 1}>
                <img
                  src={item.source_url}
                  alt={item.id}
                  className="story-slider__image"
                />
              </div>
            );
          })}
      </Slider>
    </section>
  );
};

export default StorySlider;
