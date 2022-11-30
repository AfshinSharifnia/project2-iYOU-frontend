import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Cohort = ({ user }) => {
  const [profileList, setProfileList] = useState({});
  // loadingPage to check for fetch return before rendering textfields with defaultvalues
  const [loadingPage, setLoadingPage] = useState(true);
  // ON LOAD, GET DB PROFILE AND POPULATE ANSWERS
  useEffect(() => {
    async function getProfileList() {
      console.log("getProfileList called");
      const response = await fetch(`/api/profile/getList`);
      if (response.ok) {
        const profileDBList = await response.json();
        setProfileList(profileDBList);
        console.log("getprofilelist response: ", profileDBList);
        setLoadingPage(false);
      }
    }
    if (user) getProfileList();
  }, [user]);
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

  return (
    <div>
      <h2>Cohort</h2>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {loadingPage ? (
          <p>loading...</p>
        ) : (
          profileList.map((element, index) => (
            <div>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <img
                    src={userInfo.avatar_url}
                    alt="avatar"
                    className="avatar"
                  />
                </ListItemAvatar>
                <p>{profileList[index].displayName}</p>
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))
        )}
      </List>
    </div>
  );
};

export default Cohort;
