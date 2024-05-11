import React from "react";
import NavBar from "./modules/nav-bar/NavBar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
