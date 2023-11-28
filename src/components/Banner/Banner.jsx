import React from "react";

import "./Banner.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { GET_IMAGE_URL } from "../../utils/apiCalls";

import BannerSlider from "./BannerSlider";
import BannerStatic from "./BannerStatic";

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

  return acf && acf.is_slider
    ? images && <BannerSlider images={images} acf={acf} />
    : image && <BannerStatic image={image} acf={acf} />;
};

export default Banner;
