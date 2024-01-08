import React from "react";

const Submit = ({ field, classLoc }) => {
  return (
    <div className={`${classLoc}-form__submit-box`}>
      <button className={`${classLoc}-form__submit`} type="submit">
        {field.text}
      </button>
    </div>
  );
};

export default Submit;
