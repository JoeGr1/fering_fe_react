import React from "react";

import "./OurStory.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import Banner from "../../components/Banner/Banner";
import StoryIntro from "../../components/OurStory/StoryIntro/StoryIntro";
import StoryBreak from "../../components/OurStory/StoryBreak/StoryBreak";

import { GET_PAGE } from "../../utils/apiCalls";

const OurStory = ({ id }) => {
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
      {gotPage && <StoryIntro acf={acf} />}
      {gotPage && <StoryBreak acf={acf} />}
    </div>
  );
};

export default OurStory;
