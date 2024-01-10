import React, { useState, useEffect } from "react";

import "./ContactForm.scss";

import { GET_OPTIONS_ACF } from "../../utils/apiCalls";
import Input from "../FormParts/Input/Input";
import InputColumns from "../FormParts/InputColumns/InputColumns";
import TextArea from "../FormParts/TextArea/TextArea";
import Text from "../FormParts/Text/Text";
import Dropdown from "../FormParts/Dropdown/Dropdown";
import Radio from "../FormParts/Radio/Radio";
import Checkbox from "../FormParts/Checkbox/Checkbox";
import Submit from "../FormParts/Submit/Submit";

const ContactForm = () => {
  const [formAcf, setFormAcf] = useState(null);

  const getForm = async () => {
    try {
      const response = await GET_OPTIONS_ACF();
      setFormAcf(response.data.acf);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      getForm();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const renderFormFields = () => {
    if (formAcf && formAcf.form_content) {
      return formAcf.form_content.map((field, index) => {
        switch (field.acf_fc_layout) {
          case "text_input":
            return <Input key={index} field={field} classLoc={"contact"} />;
          case "text_input_column":
            return (
              <InputColumns key={index} field={field} classLoc={"contact"} />
            );
          case "textarea":
            return <TextArea key={index} field={field} classLoc={"contact"} />;
          case "text":
            return <Text key={index} field={field} classLoc={"contect"} />;
          case "radio":
            return <Radio key={index} field={field} classLoc={"contact"} />;
          case "checkbox":
            return <Checkbox key={index} field={field} classLoc={"contact"} />;
          case "dropdown":
            return <Dropdown key={index} field={field} classLoc={"contact"} />;
          case "submit":
            return <Submit key={index} field={field} classLoc={"contact"} />;
          default:
            return null;
        }
      });
    }
    return null;
  };

  return (
    <section className="contact-form">
      <div className="contact-form__bg-over"></div>
      <div className="contact-form__container container">
        {formAcf && (
          <p className="contact-form__title">{formAcf.contact_title}</p>
        )}
        {formAcf && (
          <form className="contact-form__form">{renderFormFields()}</form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
