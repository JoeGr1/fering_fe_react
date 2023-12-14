import React from "react";

import "./PressContent.scss";

import { useState, useEffect } from "react";
import { parseWysiwyg } from "../../../utils/helperFunctions";

const PressContent = ({ acf }) => {
  return (
    acf && (
      <section className="press-content">
        <div className="press-content__container container">
          <div className="press-content__text">
            {parseWysiwyg(acf.press_content_text)}
          </div>
        </div>
      </section>
    )
  );
};

export default PressContent;
