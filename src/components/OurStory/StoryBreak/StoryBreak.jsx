import React from "react";

import "./StoryBreak.scss";

import { useState, useEffect } from "react";
import { GET_IMAGE_URL } from "../../../utils/apiCalls";

const StoryBreak = ({ acf }) => {
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
      getImageUrl(acf.story_break_image.id);
    }
  }, [acf]);

  return (
    <section className="story-break">
      {acf && image && (
        <div className="story-break__image-container">
          <img
            src={image.source_url}
            alt="Story Break Mountain Image"
            className="story-break__iamge"
          />
        </div>
      )}
      <div className="story-break__overlay"></div>
      {acf && (
        <div className="story-break__text-box">
          <div className="story-break__text">
            <span className="story-break__text-1">
              {acf.story_break_text.one}
            </span>
            <span className="story-break__text-2">
              {acf.story_break_text.two}
            </span>
            <span className="story-break__text-3">
              {acf.story_break_text.three}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default StoryBreak;
