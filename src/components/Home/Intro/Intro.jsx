import React from "react";

import "./Intro.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import { GET_IMAGE_URL } from "../../../utils/apiCalls";
import { parseWysiwyg } from "../../../utils/helperFunctions";

const Intro = ({ acf }) => {
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
      getImageUrl(acf.intro_image.id);
    }
  }, [acf]);

  return (
    <section className="intro">
      <div className="intro__container container">
        {acf && image && (
          <div className="intro__imaage-container">
            <img
              src={image.source_url}
              alt="Intro Image"
              className="intro__image"
            />
          </div>
        )}
        <div className="intro__content-box">
          {acf && <div className="intro__title">{acf.intro_title}</div>}
          {acf && (
            <div className="intro__content">
              {parseWysiwyg(acf.intro_content)}
            </div>
          )}
          {acf && acf.intro_button_link && (
            <div className="intro__btn-container">
              <Link to={acf.intro_button_link} className="intro__btn">
                {acf.intro_button}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
