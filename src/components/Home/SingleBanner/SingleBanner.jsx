import React from "react";

import "./SingleBanner.scss";

import { useState, useEffect } from "react";
import { GET_IMAGE_URL } from "../../../utils/apiCalls";

const SingleBanner = ({ acf }) => {
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
      getImageUrl(acf.single_banner_image.id);
    }
  }, [acf]);

  return (
    <section className="single-banner">
      <div className="single-banner__image-container">
        {acf && image && (
          <img
            src={image.source_url}
            alt="Banner Mountain Image"
            className="single-banner__image"
          />
        )}
      </div>
    </section>
  );
};

export default SingleBanner;
