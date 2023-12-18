import React from "react";

import "./Dropdown.scss";

const Dropdown = ({ field }) => {
  console.log(field);
  return (
    <div className="contact-form__input-box">
      <label className="contact-form__label">{field.label}</label>
      <select className="contact-form__select">
        {field.options.map((option, index) => (
          <option
            value={option.value}
            className="contact-form__dropdown"
            key={index}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
