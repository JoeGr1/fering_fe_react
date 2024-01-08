import React from "react";

const InputColumns = ({ field, classLoc }) => {
  return (
    <div className={`${classLoc}-form__input-box-split`}>
      <div className={`${classLoc}-form__input-box`}>
        <label className={`${classLoc}-form__label`}>{field.label_1}</label>
        <input
          type="text"
          className={`${classLoc}-form__input`}
          placeholder={field.placeholder_text_1}
        />
      </div>
      <div className={`${classLoc}-form__input-box`}>
        <label className={`${classLoc}-form__label`}>{field.label_2}</label>
        <input
          type="text"
          className={`${classLoc}-form__input`}
          placeholder={field.placeholder_text_2}
        />
      </div>
    </div>
  );
};

export default InputColumns;
