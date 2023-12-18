import React from "react";

import "./Radio.scss";

const Radio = ({ field }) => {
  console.log(field);
  return (
    <div className="contact-form__input-box">
      <label className="contact-form__label">{field.label}</label>
      <div className="contact-form__radio-list">
        {field.options.map((option, index) => (
          <div className="contact-form__radio" key={index}>
            <label className="contact-form__radio-label">{option.label}</label>
            <input type="radio" id={option.value} value={option.value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
