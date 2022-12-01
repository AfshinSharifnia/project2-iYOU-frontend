import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <h2>Cohort</h2>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          // display: "flex",
          // alignItems: "center",
        }}
      >
        {loadingPage ? (
          <p>loading...</p>
        ) : (
          profileList.map((element, index) => (
            <div>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Link to={`/profile/${profileList[index].basecampId}`}>
                    <img
                      src={profileList[index].avatarURL}
                      alt="avatar"
                      className="avatar"
                    />
                  </Link>
                </ListItemAvatar>
                <Box>{profileList[index].displayName}</Box>
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
