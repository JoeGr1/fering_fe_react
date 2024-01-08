import React from "react";

import { parseWysiwyg } from "../../../utils/helperFunctions";

const Text = ({ field, classLoc }) => {
  return (
    <div className={`${classLoc}-form__input-box`}>
      <div className={`${classLoc}-form__text`}>{parseWysiwyg(field.text)}</div>
    </div>
  );
};

export default Text;
