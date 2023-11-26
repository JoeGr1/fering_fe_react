import React from "react";

import "./Excellence.scss";

import { useState, useEffect } from "react";
import { GET_IMAGE_URL } from "../../../utils/apiCalls";

const Excellence = ({ acf }) => {
  useEffect(() => {
    if (acf) {
      console.log(acf);
    }
  }, [acf]);
  return (
    <section className="excellence">
      <div className="excellence__container container">
        {acf && <p className="excellence__title">{acf.excellence_title}</p>}

        <div className="excellence__table">
          {acf && (
            <div className="excellence__table-titles">
              <p className="excellence__table-title">
                {acf.kerb_mass_table_title}
              </p>
              <p className="excellence__table-title">
                {acf.payload_table_title}
              </p>
              <p className="excellence__table-title">
                {acf.wading_depth_table_title}
              </p>
              <p className="excellence__table-title">{acf.range_table_title}</p>
            </div>
          )}

          {acf &&
            acf.table_values.map((item, index) => (
              <div className="excellence__table-values-list" key={index}>
                <div
                  className={`excellence__table-value-item item-${index + 1}`}
                >
                  <p className="excellence__table-vehicle">{item.vehicle}</p>
                  <p className="excellence__table-value">{item.kerb_mass}</p>
                  <p className="excellence__table-value">{item.payload}</p>
                  <p className="excellence__table-value">{item.wading_depth}</p>
                  <p className="excellence__table-value">{item.range}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Excellence;
