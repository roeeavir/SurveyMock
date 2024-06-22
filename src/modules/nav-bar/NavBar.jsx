import React from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/user-context/UserContext";

const NavBar = () => {
  const { user, logout } = useUserContext();

  const userContent =
    user != null ? (
      <React.Fragment>
        <div>{user.userName}</div>
        <button onClick={logout}>Log out</button>
      </React.Fragment>
    ) : (
      <NavLink to={`/login`}>Log in</NavLink>
    );

  return (
    <div className="nav-bar">
      <nav className="links-list">
        <ul>
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/surveys`}>Surveys</NavLink>
          </li>
          <li>
            <NavLink to={`/results`}>Results</NavLink>
          </li>
        </ul>
      </nav>
      <div className="user-field">{userContent}</div>
    </div>
  );
};

export default NavBar;
