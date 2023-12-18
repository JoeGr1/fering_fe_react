import React from "react";

import "./TextArea.scss";

const TextArea = ({ field }) => {
  return (
    <div className="contact-form__input-box">
      <label className="contact-form__label">{field.label}</label>
      <textarea
        className="contact-form__text"
        placeholder={field.placeholder}
      />
    </div>
  );
};

export default TextArea;
