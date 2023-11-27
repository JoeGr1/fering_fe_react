import React from "react";

import "./Banner.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { GET_IMAGE_URL } from "../../utils/apiCalls";

const Banner = ({ acf }) => {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (acf) {
      if (acf.is_slider) {
        const getImageUrls = async () => {
          try {
            const promises = acf.image_list.map(async (item) => {
              const response = await GET_IMAGE_URL(item.image.id);
              return response.data;
            });

            const resolvedImages = await Promise.all(promises);
            setImages(resolvedImages);
          } catch (error) {
            console.error(error);
          }
        };

        getImageUrls();
      } else {
        const getImageUrl = async (imageId) => {
          try {
            const response = await GET_IMAGE_URL(imageId);
            setImage(response.data);
          } catch (error) {
            console.error(error);
          }
        };

        getImageUrl(acf.background_image.id);
      }
    }
  }, [acf]);

  return (
    acf &&
    image && (
      <section className="banner">
        <img
          src={image.source_url}
          alt="Image"
          className="banner__background"
        />
        <div className="banner__container">
          <div className="banner__content-box">
            {acf.banner_heading && (
              <p className="banner__heading"> {acf.banner_heading} </p>
            )}
            {acf.banner_title && (
              <p className="banner__title">{acf.banner_title} </p>
            )}
            {acf.banner_button && acf.banner_button_link && (
              <a href={acf.banner_button_link} className="banner__btn">
                {acf.banner_button}{" "}
              </a>
            )}
          </div>
        </div>
      </section>
    )
  );
};

export default Banner;
