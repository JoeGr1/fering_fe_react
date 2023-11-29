import React from "react";

import "./TechSpecInfo.scss";
import { useState, useEffect } from "react";

import { GET_IMAGE_URL } from "../../../utils/apiCalls";
import { parseWysiwyg } from "../../../utils/helperFunctions";

const TechSpecInfo = ({ acf }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImageUrls = async () => {
      if (acf && acf.technology_spec_info_list) {
        try {
          const promises = acf.technology_spec_info_list.map(async (item) => {
            const response = await GET_IMAGE_URL(item.image.id);
            return response.data;
          });

          const resolvedImages = await Promise.all(promises);
          setImages(resolvedImages);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getImageUrls();
  }, [acf]);

  return (
    <section className="tech-spec">
      <div className="tech-spec__container container">
        <div className="tech-spec__list">
          {acf &&
            images.length &&
            acf.technology_spec_info_list.map((item, index) => {
              return (
                <div className="tech-spec__item" key={index + 1}>
                  <div className="tech-spec__item-image-container">
                    <img
                      src={images[index].source_url}
                      alt=""
                      className="tech-spec__item-image"
                    />
                  </div>
                  <div className="tech-spec__item-content-box">
                    <p className="tech-spec__item-title">{item.title}</p>
                    <div className="tech-spec__item-text">
                      {parseWysiwyg(item.text)}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default TechSpecInfo;
