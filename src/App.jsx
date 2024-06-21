import React, { useState } from "react";
import NavBar from "./modules/nav-bar/NavBar";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/user-context/UserContext";

const App = () => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserProvider initialValue={{ user, login, logout }}>
      <NavBar onLogout={logout} />
      <Outlet />
    </UserProvider>
  );
};

export default App;
