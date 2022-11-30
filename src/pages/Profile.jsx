import React, { useEffect, useState } from "react";
import "./profile.css";
import "../App.css";

const Profile = ({ user }) => {
  // loadingPage to check for fetch return before rendering textfields with defaultvalues
  const [loadingPage, setLoadingPage] = React.useState(true);
  const [answers, setAnswers] = React.useState({});
  const [profileDB, setProfileDB] = React.useState({});

  // ON LOAD, GET DB PROFILE AND POPULATE ANSWERS
  useEffect(() => {
    async function getProfileDB() {
      console.log("getProfileDB called");
      const response = await fetch(
        `/api/profile/myProfileDB?userId=${user.basecampId}`,
      );
      if (response.ok) {
        const profileDBData = await response.json();
        setProfileDB(profileDBData);
        console.log("getprofiledb response: ", profileDBData);
        console.log(profileDB);
        console.log(profileDB.firstName);
        setLoadingPage(false);
      }
    }
    getProfileDB();
  }, [user]);

  return (
    <div className="student-profile py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent text-center">
                <img
                  className="profile_img"
                  src="https://source.unsplash.com/600x300/?student"
                />
                <h3>{profileDB.displayName}</h3>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  <strong className="pr-1">Student ID:</strong>321000001
                </p>
                <p className="mb-0">
                  <strong className="pr-1">className:</strong>4
                </p>
                <p className="mb-0">
                  <strong className="pr-1">Section:</strong>A
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0"></div>
              <div className="card-body pt-0">
                <table className="table table-bordered">
                  <tr>
                    <th width="30%">Roll</th>
                    <td width="2%">:</td>
                    <td>125</td>
                  </tr>
                  <tr>
                    <th width="30%">Hometown</th>
                    <td width="2%">:</td>
                    <td>Edmonton</td>
                  </tr>
                  <tr>
                    <th width="30%">Favorite Food</th>
                    <td width="2%">:</td>
                    <td>Anything Asian Inspired</td>
                  </tr>
                  <tr>
                    <th width="30%">Background</th>
                    <td width="2%">:</td>
                    <td>Woman Empowerment</td>
                  </tr>
                  <tr>
                    <th width="30%">Age</th>
                    <td width="2%">:</td>
                    <td>39</td>
                  </tr>
                </table>
              </div>
            </div>

            <div style={{ height: "26px" }}></div>

            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i class="far fa-clone pr-1"></i>Other Information
                </h3>
              </div>

              <div className="card-body pt-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
