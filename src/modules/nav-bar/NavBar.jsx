import React from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="links-list">
        <ul>
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/surveys/developers`}>Developers Survey</NavLink>
          </li>
          <li>
            <NavLink to={`/results/developers`}>Developers Results</NavLink>
          </li>
          <li>
            <NavLink to={`/surveys/product_managers`}>Mika Dadosh</NavLink>
          </li>
          <li>
            <NavLink to={`/results/product_managers`}>Mika Dadosh Results</NavLink>
          </li>
        </ul>
      </nav>
      <p>User</p>
    </div>
  );
};

export default NavBar;
