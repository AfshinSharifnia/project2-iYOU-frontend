import React from "react";
import Basecamp from "../img/bc3.png";

const Login = () => {
  const basecamp = () => {
    window.open("http://localhost:4000/api/auth/37signals", "_self");
  };
  return (
    <div>
      <h1 className="loginTitle">Log in with Basecamp</h1>
      {/* <a href="http://localhost:5002/auth/37signals" target="_blank"> */}
      <div className="loginButton" onClick={basecamp}>
        <img src={Basecamp} alt="Basecamp logo" className="icon" />
        Basecamp
      </div>
      {/* </a> */}
    </div>
  );
};

export default Login;
