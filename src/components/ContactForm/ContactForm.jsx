import React, { useState, useEffect } from "react";

import "./ContactForm.scss";

import { GET_OPTIONS_ACF } from "../../utils/apiCalls";
import Input from "../FormParts/Input/Input";
import TextArea from "../FormParts/TextArea/TextArea";
import Dropdown from "../FormParts/Dropdown/Dropdown";
import Radio from "../FormParts/Radio/Radio";
import Checkbox from "../FormParts/Checkbox/Checkbox";
import Submit from "../FormParts/Submit/Submit";

const ContactForm = () => {
  const [formAcf, setFormAcf] = useState(null);

  const getForm = async () => {
    try {
      const response = await GET_OPTIONS_ACF();

      console.log(response.data.acf);
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
      console.log(formAcf.form_content);
      return formAcf.form_content.map((field, index) => {
        switch (field.acf_fc_layout) {
          case "text_input":
            return <Input key={index} field={field} />;
          case "textarea":
            return <TextArea key={index} field={field} />;
          case "radio":
            return <Radio key={index} field={field} />;
          case "checkbox":
            return <Checkbox key={index} field={field} />;
          case "dropdown":
            return <Dropdown key={index} field={field} />;
          case "submit":
            return <Submit key={index} field={field} />;
          default:
            return null;
        }
      });
    }
    return null;
  };

  return (
    <section className="contact-form">
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
