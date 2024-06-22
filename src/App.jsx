import React, { useState } from "react";
import NavBar from "./modules/nav-bar/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { UserProvider } from "./context/user-context/UserContext";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const navigator = useNavigate();

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigator("/");
  };

  return (
    <UserProvider initialValue={{ user, login, logout }}>
      <NavBar onLogout={logout} />
      <Outlet />
    </UserProvider>
  );
};

export default App;
