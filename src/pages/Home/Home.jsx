import React from "react";

import "./Home.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import Banner from "../../components/Banner/Banner";
import Intro from "../../components/Home/Intro/Intro";
import SpecList from "../../components/Home/SpecList/SpecList";
import Story from "../../components/Home/Story/Story";
import HomeBreak from "../../components/Home/HomeBreak/HomeBreak";
import VehiclePioneering from "../../components/Home/VehiclePioneering/VehiclePioneering";
import SingleBanner from "../../components/Home/SingleBanner/SingleBanner";

import { GET_PAGE } from "../../utils/apiCalls";

const Home = ({ id }) => {
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
      <p>{!gotPage && "Loading..."}</p>
      {gotPage && <Banner acf={acf} />}
      {gotPage && <Intro acf={acf} />}
      {gotPage && <SpecList acf={acf} />}
      {gotPage && <Story acf={acf} />}
      {gotPage && <HomeBreak acf={acf} />}
      {gotPage && <VehiclePioneering acf={acf} />}
      {gotPage && <SingleBanner acf={acf} />}
    </div>
  );
};

export default Home;
