import React from "react";

import "./Story.scss";

import { useState, useEffect } from "react";
import axios from "axios";
import { GET_IMAGE_URL } from "../../../utils/apiCalls";

const Story = ({ acf }) => {
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);

  const getImageUrl = async (imageId) => {
    try {
      const response = await GET_IMAGE_URL(imageId);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (acf) {
      let img1 = getImageUrl(acf.story_image.id);
      setImage(img1);

      let img2 = getImageUrl(acf.story_image_2.id);
      setImage2(img2);
    }
  }, [acf]);

  //   useEffect(() => {
  //     console.log(image);
  //     console.log(image2);
  //   }, [image, image2]);

  return (
    <section className="story">
      <div className="story__container container">
        <div className="story__content-half-1">
          {acf && image && (
            <div className="story__image-container">
              <img
                src={image.source_url}
                alt="Image 1"
                className="story__image"
              />
            </div>
          )}
          <div className="story__content-box">
            {acf && <div className="story__title">{acf.story_title}</div>}
            {acf && <div className="story__content">{acf.story_content}</div>}
          </div>
        </div>
        <div className="story__content-half-2">
          {acf && image2 && (
            <div className="story__image-container">
              <img
                src={image2.source_url}
                alt="Image 2"
                className="story__image"
              />
            </div>
          )}
          <div className="story__content-box">
            {acf && <div className="story__title-2">{acf.story_title_2}</div>}
            {acf && (
              <div className="story__content-2">{acf.story_content_2}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
