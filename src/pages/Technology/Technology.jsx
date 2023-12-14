import React from "react";

import "./Technology.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import Banner from "../../components/Banner/Banner";

import { GET_PAGE } from "../../utils/apiCalls";
import ModularConstruction from "../../components/Technology/ModularConstruction/ModularConstruction";
import TechBreak from "../../components/Technology/TechBreak/TechBreak";
import TechSpecInfo from "../../components/Technology/TechSpecInfo/TechSpecInfo";
import ContactForm from "../../components/ContactForm/ContactForm";

const Technology = ({ id }) => {
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
      {gotPage && <ModularConstruction acf={acf} />}
      {gotPage && <TechBreak acf={acf} />}
      {gotPage && <TechSpecInfo acf={acf} />}
      {gotPage && <ContactForm />}
    </div>
  );
};

export default Technology;
