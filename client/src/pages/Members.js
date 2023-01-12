/** @format */

import React from "react";
import "../styles/Members.css";
const member1 = require("../images/member1.jpeg");
const member2 = require("../images/member2.jpeg");
const member3 = require("../images/member3.jpeg");
const member4 = require("../images/member4.jpeg");
const member5 = require("../images/member5.jpeg");
const member6 = require("../images/member6.jpeg");
const member7 = require("../images/member7.jpeg");
const member8 = require("../images/member8.jpeg");
const member9 = require("../images/member9.jpeg");

function Members() {
  return (
    <div id="membersSection">
      <div>
        <h1>Members</h1>
      </div>
      <div id="membersInfoDiv">
        <div id="membersInfoDivLeft">
          <img src={member1} width="30%" id="memberImgLeft"></img>
          <div id="memberInfoTextDiv">
            <h2>Jihyo</h2>
            <h5>some random info and facts can go here a askd akld kalsf o9ipew kdkgdlf opwoef ofkd owerkf</h5>
          </div>
        </div>
        <div id="membersInfoDivRight">
          <img src={member2} width="30%" id="memberImgRight"></img>
          <div id="memberInfoTextDiv">
            <h2>Nayeon</h2>
            <h5>some random info and facts can go here a askd akld kalsf o9ipew kdkgdlf opwoef ofkd owerkf</h5>
          </div>
        </div>
        <div id="membersInfoDivLeft">
          <img src={member3} width="30%" id="memberImgLeft"></img>
          <div id="memberInfoTextDiv">
            <h2>Jeongyeon</h2>
            <h5>some random info and facts can go here a askd akld kalsf o9ipew kdkgdlf opwoef ofkd owerkf</h5>
          </div>
        </div>
        <div id="membersInfoDivRight">
          <img src={member4} width="30%" id="memberImgRight"></img>
          <div id="memberInfoTextDiv">
            <h2>Momo</h2>
            <h5>some random info and facts can go here a askd akld kalsf o9ipew kdkgdlf opwoef ofkd owerkf</h5>
          </div>
        </div>
        <div id="membersInfoDivLeft">
          <img src={member5} width="30%" id="memberImgLeft"></img>
          <div id="memberInfoTextDiv">
            <h2>Sana</h2>
            <h5>some random info and facts can go here a askd akld kalsf o9ipew kdkgdlf opwoef ofkd owerkf</h5>
          </div>
        </div>
        <div id="membersInfoDivRight">
          <img src={member6} width="30%" id="memberImgRight"></img>
          <div id="memberInfoTextDiv">
            <h2>Mina</h2>
            <h5>some random info and facts can go here a askd akld kalsf o9ipew kdkgdlf opwoef ofkd owerkf</h5>
          </div>
        </div>
        <div id="membersInfoDivLeft">
          <img src={member7} width="30%" id="memberImgLeft"></img>
          <div id="memberInfoTextDiv">
            <h2>Dahyun</h2>
            <h5>some random info and facts can go here a askd akld kalsf o9ipew kdkgdlf opwoef ofkd owerkf</h5>
          </div>
        </div>
        <div id="membersInfoDivRight">
          <img src={member8} width="30%" id="memberImgRight"></img>
          <div id="memberInfoTextDiv">
            <h2>Chaeyoung</h2>
            <h5>some random info and facts can go here a askd akld kalsf o9ipew kdkgdlf opwoef ofkd owerkf</h5>
          </div>
        </div>
        <div id="membersInfoDivLeft">
          <img src={member9} width="30%" id="memberImgLeft"></img>
          <div id="memberInfoTextDiv">
            <h2>Tzuyu</h2>
            <h5>some random info and facts can go here a askd akld kalsf o9ipew kdkgdlf opwoef ofkd owerkf</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
