import React from "react";

import "./PrivacyContent.scss";
import { useState, useEffect } from "react";
import { parseWysiwyg } from "../../utils/helperFunctions";

const PrivacyContent = ({ acf }) => {
  return (
    <div className="privacy">
      <div className="privacy__container container">
        <div className="privacy__text">{acf && parseWysiwyg(acf.content)}</div>
      </div>
    </div>
  );
};

export default PrivacyContent;
