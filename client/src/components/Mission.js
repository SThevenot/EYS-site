/** @format */

import React from "react";
import "../styles/HomePage.css";
const twiceold = require("../images/twiceold.jpg");
const twicerecent = require("../images/twicerecent.jpg");
const twicenew = require("../images/twicenew.jpeg");

function Mission() {
  return (
    <div id="missionSection">
      <div id="missionStatementDiv">
        <h4>
          We are Twice! We are a 9-member group who are passionate about
          performing and showcasing our talents with the world.
        </h4>
      </div>
      <div id="groupPhotosDiv">
        <div>
          <img src={twiceold}></img>
          <h4>2015</h4>
        </div>
        <div>
          <img src={twicerecent}></img>
          <h4>2019</h4>
        </div>
        <div>
          <img src={twicenew}></img>
          <h4>2023</h4>
        </div>
      </div>
    </div>
  );
}

export default Mission;
