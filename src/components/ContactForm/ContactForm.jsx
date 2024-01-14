import React, { useState, useEffect } from "react";

import "./ContactForm.scss";

import { GET_OPTIONS_ACF } from "../../utils/apiCalls";
import { parseWysiwyg } from "../../utils/helperFunctions";

import Aos from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [formAcf, setFormAcf] = useState(null);
  const [form, setForm] = useState(null);

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

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="contact-form">
      <div className="contact-form__bg-over"></div>
      <div
        className="contact-form__container container"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {formAcf && (
          <p className="contact-form__title">{formAcf.contact_title}</p>
        )}
        {formAcf && (
          <form className="contact-form__form">
            {parseWysiwyg(formAcf.contact_form_iframe)}
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
