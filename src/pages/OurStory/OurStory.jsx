import React from "react";

import "./OurStory.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import Banner from "../../components/Banner/Banner";

const OurStory = ({ id }) => {
  const [page, setPage] = useState(null);
  const [gotPage, setGotPage] = useState(false);
  const [acf, setAcf] = useState(null);

  const getPage = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_WORDPRESS_API_URL}/pages/${id}`
      );
      setPage(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      getPage();
      setGotPage("true");
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
      <p>{!acf && "Loading..."}</p>
      <p>{acf && acf.story_intro_title.one}</p>
      <p>{acf && acf.story_intro_title.two}</p>
      <p>{acf && acf.story_intro_title.three}</p>
    </div>
  );
};

export default OurStory;
