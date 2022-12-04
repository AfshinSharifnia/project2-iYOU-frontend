import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/images/LoginBG.png";
import Basecamp from "../img/bc3.png";
import "../App.css";
import Navbar from "../components/Navbar.jsx";
import { Box } from "@mui/system";

const SignInPage = ({ user }) => {
  const basecamp = () => {
    window.open("http://localhost:4000/api/auth/37signals", "_self");
  };
  return (
    <div style={HeaderStyle}>
      
      <Navbar sx={{marginTop: '0'}} user={user} />
      <Box sx={{paddingTop: '5%'}}>
        <h2>Sign in to iYOU!</h2>
        <form action="/dashboard">
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
        <p className="contact-iu-admin">Contact your InceptionU Admin to gain access</p>
        <div className="buttons text-center">
          <Link to="/">
            <button className="primary-button">Back</button>
          </Link>
        </div>
        </Box>
      </div>
  );
};
const HeaderStyle = {
  width: "100vw",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};
export default SignInPage;


