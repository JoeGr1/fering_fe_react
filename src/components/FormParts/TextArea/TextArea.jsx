import React from "react";

const TextArea = ({ field, classLoc }) => {
  return (
    <div className={`${classLoc}-form__input-box`}>
      <label className={`${classLoc}-form__label`}>{field.label}</label>
      <textarea
        rows="6"
        className={`${classLoc}-form__textarea`}
        placeholder={field.placeholder}
      />
    </div>
  );
};

export default TextArea;
