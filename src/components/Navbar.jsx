import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = async () => {
    window.open("http://localhost:4000/api/auth/logout", "_self");
    // const response = await fetch("/api/auth/logout"); //PROXY??
    // if (response.ok) {
    //   user = null;
    // }
  };
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          iYou
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listitem">
            <img
              src="https://images.unsplash.com/photo-1514845505178-849cebf1a91d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="avatar"
              className="avatar"
            />
          </li>
          <li className="listitem">Greg Gregger</li>
          <li className="listitem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
