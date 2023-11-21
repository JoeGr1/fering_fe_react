import React from "react";

import "./SpecList.scss";

const SpecList = ({ acf }) => {
  return (
    <section className="spec-list">
      <div className="spec-list__container container">
        {acf &&
          acf.spec_list.map((item, i) => (
            <div key={i} className="spec-list_item">
              <div className="spec-list__number-box">
                <div className="spec-list__number">{item.number}</div>
                <div className="spec-list__measurement">{item.measurement}</div>
              </div>
              <div className="spec-list__text">{item.text}</div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SpecList;
