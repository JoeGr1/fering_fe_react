import React from "react";

import "./Journey.scss";

import { useState, useEffect } from "react";
import { GET_IMAGE_URL } from "../../../utils/apiCalls";
import { parseWysiwyg } from "../../../utils/helperFunctions";

const Journey = ({ acf }) => {
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
      getImageUrl(acf.journey_image.id);
    }
  }, [acf]);

  return (
    <section className="journey">
      <div className="journey__container container">
        {acf && (
          <div className="journey__content">
            <p className="journey__title">{acf.journey_title}</p>
            <div className="journey__text">
              {parseWysiwyg(acf.journey_text)}
            </div>
          </div>
        )}
        {acf && image && (
          <div className="journey__image-container">
            <img
              src={image.source_url}
              alt="Car Dirt Image"
              className="journey__image"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Journey;
