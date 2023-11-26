import React from "react";

import "./HomeBreak.scss";

import { useState, useEffect } from "react";
import { GET_IMAGE_URL } from "../../../utils/apiCalls";

const HomeBreak = ({ acf }) => {
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
      getImageUrl(acf.break_image.id);
    }
  }, [acf]);

  return (
    <section className="home-break">
      {acf && image && (
        <img src={image.source_url} className="home-break__image" />
      )}
      <div className="home-break__overlay"></div>
      <div className="home-break__text-box">
        <p className="home-break__text">{acf && acf.break_text}</p>
        <p className="home-break__author">{acf && acf.break_author}</p>
      </div>
    </section>
  );
};

export default HomeBreak;
