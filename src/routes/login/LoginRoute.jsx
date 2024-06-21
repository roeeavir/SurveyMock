import React from "react";
import './LoginRoute.css';
import { useUserContext } from "../../context/user-context/UserContext";
import Login from "../../modules/user/login/Login";

const LoginRoute = () => {
  const { user, logout } = useUserContext();

  let loginContent;

  if (user != null) {
      loginContent = <React.Fragment>
             `You are logged in as ${user.userName}`
        <button onClick={logout}>Logout</button>
      </React.Fragment>
  } else {
    loginContent = <Login />;
  }

  return <div className="login-route">
    {loginContent}
  </div>
};

export default LoginRoute;
