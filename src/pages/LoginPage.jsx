import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/images/LoginBG.png";
import Basecamp from "../img/bc3.png";
import "../App.css";
import Navbar from "../components/Navbar.jsx";

const SignInPage = ({ user }) => {
  const basecamp = () => {
    window.open("http://localhost:4000/api/auth/37signals", "_self");
  };
  return (
    <header style={HeaderStyle}>
      <Navbar user={user} />
      <div className="text-center m-5-auto">
        <h2>Sign in to iYOU!</h2>
        <form action="/home">
          <p>
            <label>Login with your Basecamp ID</label>
            <br />
          </p>
          <p>
            <a className="loginButton" onClick={basecamp}>
              <img src={Basecamp} alt="Basecamp logo" className="icon" />
              Basecamp
            </a>
          </p>
        </form>
        <footer>
          <p>Contact your InceptionU Admin to gain access</p>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </header>
  );
};
const HeaderStyle = {
  width: "100vw",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
export default SignInPage;
