import React from "react";

import "./ReserveForm.scss";

import { GET_OPTIONS_ACF } from "../../../utils/apiCalls";
import Input from "../../FormParts/Input/Input";
import InputColumns from "../../FormParts/InputColumns/InputColumns";
import TextArea from "../../FormParts/TextArea/TextArea";
import Text from "../../FormParts/Text/Text";
import Dropdown from "../../FormParts/Dropdown/Dropdown";
import Radio from "../../FormParts/Radio/Radio";
import Checkbox from "../../FormParts/Checkbox/Checkbox";
import Submit from "../../FormParts/Submit/Submit";

const ReserveForm = ({ acf }) => {
  console.log(acf);
  const renderFormFields = () => {
    return acf.form_content.map((field, index) => {
      switch (field.acf_fc_layout) {
        case "text_input":
          return <Input key={index} field={field} classLoc={"reserve"} />;
        case "text_input_column":
          return (
            <InputColumns key={index} field={field} classLoc={"reserve"} />
          );
        case "textarea":
          return <TextArea key={index} field={field} classLoc={"reserve"} />;
        case "text":
          return <Text key={index} field={field} classLoc={"reserve"} />;
        case "radio":
          return <Radio key={index} field={field} classLoc={"reserve"} />;
        case "checkbox":
          return <Checkbox key={index} field={field} classLoc={"reserve"} />;
        case "dropdown":
          return <Dropdown key={index} field={field} classLoc={"reserve"} />;
        case "submit":
          return <Submit key={index} field={field} classLoc={"reserve"} />;
        default:
          return null;
      }
    });
    return null;
  };
  return (
    <section className="reserve-form">
      <div className="reserve-form__container container">
        {acf && (
          <form className="reserve-form__form">{renderFormFields()}</form>
        )}
      </div>
    </section>
  );
};

export default ReserveForm;
