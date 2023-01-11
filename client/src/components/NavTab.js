/** @format */

import React from "react";
import Hamburger from "./Hamburger";
import {BsFacebook, BsInstagram} from "react-icons/bs";


function NavTab() {
  return (
    <div id="navTabSection">
      <div id="navHeaderDiv">
      <h2>EYS  |  MNY</h2>
      <ul id="navList">
        <li id="navListItem"><button>
          <a href="https://www.facebook.com/217kpop/" target="_blank" rel="noreferrer">
            <BsFacebook />
          </a>
        </button></li>
        <li id="navListItem"><button>
          <a href="https://www.instagram.com/eysdance/?hl=en" target="_blank" rel="noreferrer">
            <BsInstagram />
          </a>
        </button></li>
      </ul>
      </div>
      <Hamburger/>
    </div>
  );
}

export default NavTab;
