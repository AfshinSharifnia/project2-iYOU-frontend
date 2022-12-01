import React, { useEffect, useState } from "react";
import "./profile.css";
import "../App.css";
import { useParams } from "react-router-dom";

const Profile = ({ props }) => {
  // loadingPage to check for fetch return before rendering textfields with defaultvalues
  const [loadingPage, setLoadingPage] = React.useState(true);
  const [answers, setAnswers] = React.useState({});
  // FROM THE DATABASE: profileDB is the user object
  // example: {profileDB.pronouns} would show pronouns
  const [profileDB, setProfileDB] = React.useState({});
  const params = useParams();
  const basecampId = params.id;
  console.log("id being passed: ", basecampId);
  // ON LOAD, GET DB PROFILE AND POPULATE ANSWERS
  useEffect(() => {
    async function getProfileDB() {
      console.log("getProfileDB called");
      const response = await fetch(
        `/api/profile//profilePage?userId=${basecampId}`,
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
  }, []);

  // ICEBREAKER QUESTIONS ARRAY
  const icebreakerQs = [
    `What’s something new or interesting you’ve learned recently?`,
    `What was your favorite recent meal and why?`,
    `What’s your favorite self-care activity?`,
    `Where did you grow up?`,
    `What’s the best book you’ve ever read? Why?`,
    `If you had to give a lecture on one thing, what would it be?`,
    `What’s a favorite movie you always recommend to people? Why do you love it?`,
    `What’s an unusual family or cultural tradition you have?`,
    `What’s something people don’t know about you?`,
    `What’s one thing that brings you energy and joy?`,
    `What’s the most interesting place you’ve ever done a virtual meeting from?`,
    `What is your favorite smell and why?`,
  ];

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
                    <th width="30%">{icebreakerQs[0]}</th>
                    <td width="2%">:</td>
                    <td>{profileDB.q0}</td>
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
                  <i class="far fa-clone pr-1"></i>Career Blueprint
                </h3>
              </div>

              <div className="card-body pt-0">
                <p>{profileDB.careerBlueprint}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
