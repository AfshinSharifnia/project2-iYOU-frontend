import { useEffect } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import AppLink from "../components/AppLink";

function Dashboard({ user }) {
  const [profileDB, setProfileDB] = useState({});

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
      }
    }
    if (user) getProfileDB();
  }, [user]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <h1 className="dashboard"> Dashboard</h1>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <p className="linkedIn">
            LinkedIn :{" "}
            <a href={profileDB.linkedInURL}>{profileDB.linkedInURL}</a>
          </p>

          <p className="github">
            Github : <a href={profileDB.githubURL}>{profileDB.githubURL}</a>
          </p>
          <p className="lumina">
            Lumina : <a href={profileDB.luminaURL}>{profileDB.luminaURL}</a>
          </p>
          <p className="basecamp">
            Basecamp :{" "}
            <a href={profileDB.basecampURL}>{profileDB.basecampURL}</a>
          </p>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <AppLink text="Schedule" url="" />
        <AppLink text="Events" url="" />
        <AppLink text="Tech Slides" url="" />
        <AppLink text="Homework" url="" />
        <AppLink text="Daily Challenge" url="" />
        <AppLink text="Survey" url="" />
      </Box>
    </Box>
  );
}

export default Dashboard;
