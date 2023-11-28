import React from "react";

import "./TechBreak.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { GET_IMAGE_URL } from "../../../utils/apiCalls";
import { parseWysiwyg } from "../../../utils/helperFunctions";

const TechBreak = ({ acf }) => {
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
      getImageUrl(acf.technology_break_image.id);
    }
  }, [acf]);

  return (
    <section className="tech-break">
      {acf && image && (
        <div className="tech-break__image-container">
          <img
            src={image.source_url}
            alt="Mountain Range"
            className="tech-break__image"
          />
        </div>
      )}
      <div className="tech-break__overlay"></div>

      {acf && (
        <div className="tech-break__content-container">
          <div className="tech-break__content container">
            <p className="tech-break__title">{acf.technology_break_title}</p>
            <div className="tech-break__text">
              {parseWysiwyg(acf.technology_break_text)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechBreak;
