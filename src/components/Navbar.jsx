import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarLogo from "../img/HeaderLogo.png";

const Navbar = ({ user }) => {
  ///
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    async function getInfo() {
      console.log("getinfo called");
      const response = await fetch(
        // `http://localhost:4000/api/profile/myProfile`,
        `/api/profile/myProfile?userId=${user.basecampId}`, //pass basecampID
        // `/api/profile/myProfile`,
      );
      if (response.ok) {
        const userInfoData = await response.json();
        setUserInfo(userInfoData);
        console.log("getinfo response: ", userInfoData);
      }
    }
    if (user) getInfo();
  }, [user]);
  ///

  const logout = async () => {
    window.open("http://localhost:4000/api/auth/logout", "_self");
    // const response = await fetch("/api/auth/logout"); //PROXY??
    // if (response.ok) {
    //   user = null;
    // }
  };

  return (
    <header className="navbar">
      <Link to="/dashboard">
        <img className="iyoulogo" src={NavbarLogo} alt="iyou" />
      </Link>

      {/* CHECK IF USER IS LOGGED IN */}
      {user ? (
        // IF USER IS LOGGED IN, SHOW AVATAR AND NAME
        <ul className="list">
          <li className="listitem">
            <Link className="link" to="profile">
              <img src={userInfo.avatar_url} alt="avatar" className="avatar" />
            </Link>
          </li>
          <li className="listitem">
            <Link className="link" to="admin">
              {userInfo.name}
            </Link>
          </li>
          <li className="listitem">
            <Link className="link" to="edit">
              Edit
            </Link>
          </li>
          <li className="listitem">
            <Link className="link" to="cohort">
              Cohort
            </Link>
          </li>
          <li className="listitem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        // IF USER IS LOGGED OUT, SHOW LOG IN LINK
        <Link className="link" to="login"></Link>
      )}
    </header>
  );
};

export default Navbar;
