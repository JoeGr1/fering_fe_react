import React from "react";

import "./PressIntro.scss";

import { useState, useEffect } from "react";
import { parseWysiwyg } from "../../../utils/helperFunctions";

const PressIntro = ({ acf }) => {
  useEffect(() => {
    if (acf) {
      console.log(acf);
    }
  }, [acf]);
  return (
    <section className="press-intro">
      <div className="press-intro__container container">
        {acf && (
          <div className="press-intro__title">
            <p className="press-intro__title-1">{acf.press_intro_title.one}</p>
            <p className="press-intro__title-2">{acf.press_intro_title.two}</p>
            <p className="press-intro__title-3">
              <span className="press-intro__title-3-dash">
                {acf.press_intro_title.three.dash}
              </span>
              <span className="press-intro__title-3-text">
                {acf.press_intro_title.three.text}
              </span>
            </p>
          </div>
        )}
        {acf && (
          <div className="press-intro__text">
            {parseWysiwyg(acf.press_intro_text)}
          </div>
        )}
      </div>
    </section>
  );
};

export default PressIntro;
