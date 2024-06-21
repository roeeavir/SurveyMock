import React from "react";
import './SpecificLinks.css';
import { NavLink } from "react-router-dom";

const SpecificLinks = ({ listOfLinks }) => {
  return (
    <nav className="specific-links">
      <ul>
        {listOfLinks?.map?.((link) => (
          <li key={link.title}>
            <NavLink to={link?.to}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SpecificLinks;
