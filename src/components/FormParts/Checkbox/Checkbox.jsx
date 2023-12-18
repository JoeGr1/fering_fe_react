import React from "react";

import "./Checkbox.scss";

const Checkbox = ({ field }) => {
  console.log(field);
  return (
    <div className="contact-form__input-box">
      <label className="contact-form__label">{field.label}</label>
      <div className="contact-form__checkbox-list">
        {field.options.map((option, index) => (
          <div className="contact-form__checkbox" key={index}>
            <label className="contact-form__checkbox-label">
              {option.label}
            </label>
            <input type="checkbox" id={option.value} value={option.value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;
