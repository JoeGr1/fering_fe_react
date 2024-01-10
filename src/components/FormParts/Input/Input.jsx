import React from "react";

const Input = ({ field, classLoc }) => {
  return (
    <div className={`${classLoc}-form__input-box`}>
      <label className={`${classLoc}-form__label`}>{field.label}</label>
      <input
        type="text"
        className={`${classLoc}-form__input`}
        placeholder={field.placeholder_text}
      />
    </div>
  );
};

export default Input;
