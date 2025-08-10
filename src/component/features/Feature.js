import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

import "./features.css";

export default function Feature() {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            -11.4 <FaArrowDown className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Sales</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            -1.4 <FaArrowDown className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Cost</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            +2.4 <FaArrowUp className="featureIcon" />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
    </div>
  );
}
