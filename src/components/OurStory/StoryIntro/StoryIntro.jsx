import React, { useEffect } from "react";

import "./StoryIntro.scss";
import { parseWysiwyg } from "../../../utils/helperFunctions";

import { useState } from "react";
import { GET_IMAGE_URL } from "../../../utils/apiCalls";

import Aos from "aos";
import "aos/dist/aos.css";

const StoryIntro = ({ acf }) => {
  console.log(acf);

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
      getImageUrl(acf.story_intro_image.id);
    }
  }, [acf]);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="story-intro">
      <div className="story-intro__container container">
        {acf && image && (
          <div
            className="story-intro__image-container"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src={image.source_url}
              alt="Car Woods Black and White"
              className="story-intro__image"
            />
          </div>
        )}
        <div className="story-intro__text-container">
          {acf && (
            <div
              className="story-intro__title"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              {acf.story_intro_title.one}
              <span className="story-intro__title-bold">
                {acf.story_intro_title.two}
              </span>
              {acf.story_intro_title.three}
            </div>
          )}
          <div
            className="story-intro__text-box"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {acf && (
              <div className="story-intro__text">
                {parseWysiwyg(acf.story_intro_text_1)}
              </div>
            )}

            {acf && (
              <div className="story-intro__text">
                {parseWysiwyg(acf.story_intro_text_2)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryIntro;
