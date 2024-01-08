import React from "react";

const Radio = ({ field, classLoc }) => {
  return (
    <div className={`${classLoc}-form__input-box`}>
      <label className={`${classLoc}-form__label`}>{field.label}</label>
      <div className={`${classLoc}-form__radio-list`}>
        {field.options.map((option, index) => (
          <div className={`${classLoc}-form__radio`} key={index}>
            <label className={`${classLoc}-form__radio-label`}>
              {option.label}
            </label>
            <input type="radio" id={option.value} value={option.value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
