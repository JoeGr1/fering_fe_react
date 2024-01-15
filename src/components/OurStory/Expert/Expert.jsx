import React from "react";

import "./Expert.scss";

import { useState, useEffect } from "react";
import { GET_IMAGE_URL } from "../../../utils/apiCalls";
import { parseWysiwyg } from "../../../utils/helperFunctions";

import Aos from "aos";
import "aos/dist/aos.css";

const Expert = ({ acf }) => {
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
      getImageUrl(acf.expert_team_image.id);
    }
  }, [acf]);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="expert">
      <div className="expert__container container">
        {acf && image && (
          <div
            className="expert__image-container"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src={image.source_url}
              alt="Fering Team Photo"
              className="expert__image"
            />
          </div>
        )}
        {acf && (
          <div
            className="expert__content"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p className="expert__title">{acf.expert_team_title}</p>
            <div className="expert__text">
              {parseWysiwyg(acf.expert_team_text)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Expert;
