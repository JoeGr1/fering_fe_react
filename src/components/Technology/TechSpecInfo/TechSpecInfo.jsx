import React from "react";

import "./TechSpecInfo.scss";
import { useState, useEffect } from "react";

import { GET_IMAGE_URL } from "../../../utils/apiCalls";
import { parseWysiwyg } from "../../../utils/helperFunctions";

import Aos from "aos";
import "aos/dist/aos.css";

const TechSpecInfo = ({ acf }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className="tech-spec"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <div className="tech-spec__container container">
        <div className="tech-spec__list">
          {acf &&
            acf.technology_spec_info_list.map((item, index) => {
              console.log(item);
              return (
                <div className="tech-spec__item" key={index + 1}>
                  <p className="tech-spec__text">{item.title}</p>
                  <p className="tech-spec__measurement">
                    <span className="tech-spec__measurement-bold">
                      {item.number}
                    </span>{" "}
                    {item.unit}
                  </p>
                  <div className="tech-spec__item-line"></div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default TechSpecInfo;
