import React from "react";

import "./ModularConstruction.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { GET_IMAGE_URL } from "../../../utils/apiCalls";
import { parseWysiwyg } from "../../../utils/helperFunctions";

const ModularConstruction = ({ acf }) => {
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
      getImageUrl(acf.modular_image.id);
    }
  }, [acf]);

  return (
    <section className="modular">
      <div className="modular__container container">
        {acf && image && (
          <div className="modular__image-container">
            <img
              src={image.source_url}
              alt="Mocular Blueprint"
              className="modular__image"
            />
          </div>
        )}
        {acf && (
          <div className="modular__content">
            <p className="modular__title">{acf.modular_title}</p>
            <div className="modular__text">
              {parseWysiwyg(acf.modular_text)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModularConstruction;
