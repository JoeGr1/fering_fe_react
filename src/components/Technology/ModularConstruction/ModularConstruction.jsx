import React, { useState, useEffect } from "react";
import { GET_IMAGE_URL } from "../../../utils/apiCalls";
import { parseWysiwyg } from "../../../utils/helperFunctions";

import Aos from "aos";
import "aos/dist/aos.css";

import "./ModularConstruction.scss";

import TechSpecInfo from "../TechSpecInfo/TechSpecInfo";

const ModularConstruction = ({ acf }) => {
  const [images, setImages] = useState([]);

  const getImageUrl = async (imageId) => {
    try {
      const response = await GET_IMAGE_URL(imageId);
      return response.data.source_url;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      if (acf && acf.modular_images) {
        const imagePromises = acf.modular_images.map((item) =>
          getImageUrl(item.image.id)
        );

        try {
          const imageUrls = await Promise.all(imagePromises);
          setImages(imageUrls);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchImages();
  }, [acf]);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="modular">
      <div className="modular__container container">
        <div className="modular__content-box">
          {acf && (
            <p
              className="modular__title"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              {acf.modular_title}
            </p>
          )}
          <div
            className="modular__content"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="modular__image-list">
              {acf &&
                images.length &&
                images.map((item, index) => {
                  return (
                    <div className="modular__image-container" key={index}>
                      <img src={item} alt="" className="modular__image" />
                    </div>
                  );
                })}
            </div>
            <div className="modular__text-list">
              {acf &&
                acf.modular_text_list.map((item, index) => {
                  return (
                    <div className="modular__text-item" key={index}>
                      {parseWysiwyg(item.text_block)}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {acf && <TechSpecInfo acf={acf} />}
      </div>
    </section>
  );
};

export default ModularConstruction;
