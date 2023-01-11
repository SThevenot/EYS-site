/** @format */

import React from "react";
import Hamburger from "./Hamburger";

function NavTab() {
  return (
    <div id="navTabSection">
      <div id="navHeaderDiv">
      <h2>EYS  |  MNY</h2>
      <ul id="navList">
        <li id="navListItem">Facebook</li>
        <li id="navListItem">Instagram</li>
      </ul>
      </div>
      <Hamburger/>
    </div>
  );
}

export default NavTab;
