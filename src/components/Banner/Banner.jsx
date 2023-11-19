import React from "react";

import "./Banner.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { GET_IMAGE_URL } from "../../utils/apiCalls";

const Banner = ({ acf }) => {
  const [image, setImage] = useState(null);

  const getImageUrl = async (imageId) => {
    try {
      const response = await GET_IMAGE_URL(imageId);
      setImage(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (acf) {
      if (acf.is_slider) {
        getImageUrl(acf.image_list[0].image.id);
      } else {
        getImageUrl(acf.background_image.id);
      }
    }
  }, [acf]);

  return (
    <section className="banner">
      {acf && image && (
        <img
          src={image.source_url}
          alt="Image"
          className="banner__background"
        />
      )}
      <div className="banner__container">
        {!acf && "loading..."}
        <div className="banner__content-box">
          {acf && acf.banner_heading && (
            <p className="banner__heading"> {acf.banner_heading} </p>
          )}
          {acf && acf.banner_title && (
            <p className="banner__title">{acf.banner_title} </p>
          )}
          {acf && acf.banner_button && acf.banner_button_link && (
            <a href={acf.banner_button_link} className="banner__btn">
              {acf.banner_button}{" "}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
