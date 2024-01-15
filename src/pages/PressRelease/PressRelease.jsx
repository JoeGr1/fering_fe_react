import React from "react";

import "./PressRelease.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import Banner from "../../components/Banner/Banner";
import { GET_PAGE } from "../../utils/apiCalls";
import { handlePasswordProtected } from "../../utils/helperFunctions";
import { handlePasswordProtectedForm } from "../../utils/helperFunctions";

import PressIntro from "../../components/PressRelease/PressIntro/PressIntro";
import PressContent from "../../components/PressRelease/PressContent/PressContent";
import PressDownloads from "../../components/PressRelease/PressDownloads/PressDownloads";
import ContactForm from "../../components/ContactForm/ContactForm";
import PasswordProtected from "../../components/PasswordProtected/PasswordProtected";

const PressRelease = ({ id }) => {
  const [page, setPage] = useState(null);
  const [gotPage, setGotPage] = useState(false);
  const [acf, setAcf] = useState(null);
  const [isPasswordProtected, setIsPasswordProtected] = useState(true);

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
        handlePasswordProtected(setIsPasswordProtected, page);
      }
    } catch (err) {
      console.log(err);
    }
  }, [page]);

  return (
    <div>
      {!gotPage && <p className="loading-tag">Loading...</p>}
      {gotPage &&
        !sessionStorage.getItem("passwordEntered") &&
        isPasswordProtected && (
          <PasswordProtected
            acf={acf}
            handlePasswordProtectedForm={handlePasswordProtectedForm}
            setIsPasswordProtected={setIsPasswordProtected}
          />
        )}
      {gotPage &&
        sessionStorage.getItem("passwordEntered") &&
        isPasswordProtected && <Banner acf={acf} />}
      {gotPage &&
        sessionStorage.getItem("passwordEntered") &&
        isPasswordProtected && <PressIntro acf={acf} />}
      {gotPage &&
        sessionStorage.getItem("passwordEntered") &&
        isPasswordProtected && <PressContent acf={acf} />}
      {gotPage &&
        sessionStorage.getItem("passwordEntered") &&
        isPasswordProtected && <PressDownloads acf={acf} />}
      {gotPage &&
        sessionStorage.getItem("passwordEntered") &&
        isPasswordProtected && <ContactForm />}

      {gotPage && !isPasswordProtected && <Banner acf={acf} />}
      {gotPage && !isPasswordProtected && <PressIntro acf={acf} />}
      {gotPage && !isPasswordProtected && <PressContent acf={acf} />}
      {gotPage && !isPasswordProtected && <PressDownloads acf={acf} />}
      {gotPage && !isPasswordProtected && <ContactForm />}
    </div>
  );
};

export default PressRelease;
