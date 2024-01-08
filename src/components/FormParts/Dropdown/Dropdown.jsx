import React from "react";

const Dropdown = ({ field, classLoc }) => {
  return (
    <div className={`${classLoc}-form__input-box`}>
      <label className={`${classLoc}-form__label`}>{field.label}</label>
      <select className={`${classLoc}-form__select`}>
        {field.options.map((option, index) => (
          <option
            value={option.value}
            className={`${classLoc}-form__dropdown`}
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
