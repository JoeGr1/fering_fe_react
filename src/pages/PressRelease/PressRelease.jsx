import React from "react";

import "./PressRelease.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import Banner from "../../components/Banner/Banner";

import { GET_PAGE } from "../../utils/apiCalls";
import PressIntro from "../../components/PressRelease/PressIntro/PressIntro";
import PressContent from "../../components/PressRelease/PressContent/PressContent";
import PressDownloads from "../../components/PressRelease/PressDownloads/PressDownloads";
import ContactForm from "../../components/ContactForm/ContactForm";

const PressRelease = ({ id }) => {
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
      {gotPage && <PressIntro acf={acf} />}
      {gotPage && <PressContent acf={acf} />}
      {gotPage && <PressDownloads acf={acf} />}
      {gotPage && <ContactForm />}
    </div>
  );
};

export default PressRelease;
