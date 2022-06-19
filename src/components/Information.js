import React from "react";
import brand from "../images/icon-brand-recognition.svg";
import detail from "../images/icon-detailed-records.svg";
import custom from "../images/icon-fully-customizable.svg";
import "./Information.css";

const Information = () => {
  return (
    <div className="info container">
      <h1 className="title">Advanced Statistics</h1>
      <p className="desc">
        Track how your links are performing the web with out advanced statistic
        dashboard
      </p>
      <div className="items">
        <div className="info item">
          <img src={brand} alt="" />
          <h2>Brand Recognition</h2>
          <p className="desc">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="info item">
          <img src={detail} alt="" />
          <h2>Detailed Records</h2>
          <p className="desc">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="info item">
          <img src={custom} alt="" />
          <h2>Fully Customizable</h2>
          <p className="desc">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
