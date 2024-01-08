import React from "react";

const Checkbox = ({ field, classLoc }) => {
  return (
    <div className={`${classLoc}-form__input-box`}>
      <label className={`${classLoc}-form__label`}>{field.label}</label>
      <div className={`${classLoc}-form__checkbox-list`}>
        {field.options.map((option, index) => (
          <div className={`${classLoc}-form__checkbox`} key={index}>
            <label className={`${classLoc}-form__checkbox-label`}>
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
