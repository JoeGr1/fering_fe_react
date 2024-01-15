import React from "react";

import "./Privacy.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import Banner from "../../components/Banner/Banner";
import PrivacyContent from "../../components/Privacy/PrivacyContent";

import { GET_PAGE } from "../../utils/apiCalls";
import ContactForm from "../../components/ContactForm/ContactForm";

const Privacy = ({ id }) => {
  const [page, setPage] = useState(null);
  const [gotPage, setGotPage] = useState(false);
  const [acf, setAcf] = useState(null);

  const getPage = async () => {
    try {
      const response = await GET_PAGE(id);
      setPage(response.data);
      setGotPage("true");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      getPage();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      if (page !== null) {
        setAcf(page.acf);
      }
    } catch (err) {
      console.log(err);
    }
  }, [page]);

  return (
    <div>
      {!gotPage && <p className="loading-tag">Loading...</p>}
      {gotPage && <Banner acf={acf} />}
      {gotPage && <PrivacyContent acf={acf} />}
      {gotPage && <ContactForm />}
    </div>
  );
};

export default Privacy;
