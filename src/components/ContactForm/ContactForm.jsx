import React, { useState, useEffect } from "react";

import "./ContactForm.scss";

import { GET_OPTIONS_ACF } from "../../utils/apiCalls";

import { parseiFrame } from "../../utils/helperFunctions";

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

  return (
    <section className="contact-form">
      <div className="contact-form__container container">
        {formAcf && (
          <p className="contact-form__title">{formAcf.contact_title}</p>
        )}
        {formAcf && (
          <div className="contact-form__form">
            {parseiFrame(formAcf.contact_form)}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
