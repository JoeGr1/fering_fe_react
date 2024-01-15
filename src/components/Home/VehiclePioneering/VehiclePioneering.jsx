import React from "react";

import "./VehiclePioneering.scss";

import { useState, useEffect } from "react";
import axios from "axios";
import { GET_IMAGE_URL } from "../../../utils/apiCalls";
import { parseWysiwyg } from "../../../utils/helperFunctions";

import Aos from "aos";
import "aos/dist/aos.css";

const VehiclePioneering = ({ acf }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="vp">
      <div className="vp__container container">
        {acf && <p className="vp__title">{acf.vp_title}</p>}
        {acf && <p className="vp__heading">{acf.vp_heading}</p>}
        {acf && (
          <div
            className="vp__lists-box"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="vp__sub-list-left">
              <ul className="vp__sub-list">
                {acf &&
                  acf.vp_spec_list[0].sub_list.map((item, index) => (
                    <li className="vp__spec-item" key={index}>
                      <div className="vp__spec-item-text">
                        {parseWysiwyg(item.text)}
                      </div>
                      <div className="vp__spec-item-number">
                        {parseWysiwyg(item.number)}
                      </div>
                    </li>
                  ))}
              </ul>
              <ul className="vp__sub-list">
                {acf &&
                  acf.vp_spec_list[1].sub_list.map((item, index) => (
                    <li className="vp__spec-item" key={index}>
                      <div className="vp__spec-item-text">
                        {parseWysiwyg(item.text)}
                      </div>
                      <div className="vp__spec-item-number">
                        {parseWysiwyg(item.number)}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="vp__sub-list-right">
              <ul className="vp__sub-list">
                {" "}
                {acf &&
                  acf.vp_spec_list[2].sub_list.map((item, index) => (
                    <li className="vp__spec-item" key={index}>
                      <div className="vp__spec-item-text">
                        {parseWysiwyg(item.text)}
                      </div>
                      <div className="vp__spec-item-number">
                        {parseWysiwyg(item.number)}
                      </div>
                    </li>
                  ))}
              </ul>
              <ul className="vp__sub-list">
                {acf &&
                  acf.vp_spec_list[3].sub_list.map((item, index) => (
                    <li className="vp__spec-item" key={index}>
                      <div className="vp__spec-item-text">
                        {parseWysiwyg(item.text)}
                      </div>
                      <div className="vp__spec-item-number">
                        {parseWysiwyg(item.number)}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VehiclePioneering;
