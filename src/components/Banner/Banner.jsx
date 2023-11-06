import React from "react";

import "./Banner.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Banner = ({ acf }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (acf) {
      const getImageUrl = async (imageId) => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_WORDPRESS_API_URL}/media/${imageId}`
          );
          setImage(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      getImageUrl(acf.image_list[0].image);
    }
  }, [acf]);

  return (
    <div>
      {!acf && "loading..."}
      {acf && image && <img src={image.source_url} alt="Image" />}
    </div>
  );
};

export default Banner;
