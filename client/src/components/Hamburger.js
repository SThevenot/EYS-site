import React from "react";
import { NavLink } from "react-router-dom";

import { slide as Menu } from 'react-burger-menu'

function Hamburger() {
    return (
        <Menu right>
            <ul id="list">
                <li>
                  <NavLink to="/members" className="links">Members</NavLink>
                </li>
                <li>
                  <NavLink to="/upcoming-events" className="links">Upcoming Events</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us" className="links">Contact Us</NavLink>
                </li>
              </ul>
        </Menu>
    )
}

export default Hamburger;
