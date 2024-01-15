import React from "react";

import "./Intro.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import { GET_IMAGE_URL } from "../../../utils/apiCalls";
import { parseWysiwyg } from "../../../utils/helperFunctions";

import Aos from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="intro" id="Intro">
      {acf && image && (
        <div className="intro__image-container">
          <img
            src={image.source_url}
            alt="Intro Image"
            className="intro__image"
          />
        </div>
      )}
      <div className="intro__container container">
        <div
          className="intro__content-box"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          {acf && <div className="intro__title">{acf.intro_title.one}</div>}
          {acf && (
            <div className="intro__title-bold">{acf.intro_title.two}</div>
          )}
          {acf && (
            <div className="intro__content">
              {parseWysiwyg(acf.intro_content)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
