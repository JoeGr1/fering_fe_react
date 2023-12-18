import React from "react";

import "./Input.scss";

const Input = ({ field }) => {
  return (
    <div className="contact-form__input-box">
      <label className="contact-form__label">{field.label}</label>
      <input
        type="text"
        className="contact-form__text"
        placeholder={field.placeholder}
      />
    </div>
  );
};

export default Input;
