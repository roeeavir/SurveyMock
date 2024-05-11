import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="links-list">
        <ul>
          <li>
            <NavLink to={`/`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/surveys/developers`}>
              Developers Survey
            </NavLink>
          </li>
          <li>
            <NavLink to={`/surveys/mika-dadosh`}>
              Mika Dadosh
            </NavLink>
          </li>
        </ul>
      </nav>
      <p>User</p>
    </div>
  );
};

export default NavBar;
