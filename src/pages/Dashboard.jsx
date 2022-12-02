import { useEffect } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import AppLink from "../components/AppLink";
import PageBackground from '../assets/images/PageBackground.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';


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
    <div style={HeadStyle}> 
    <h1 className="dashboard"> Dashboard</h1>
    <Box sx={{display: "flex", flexDirection: "column", gap: 5, alignItems: "center", textAlign: "left", marginRight: '78%'}}>
          <p className="linkedIn">
            LinkedIn :
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
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center", marginLeft: "78%" }}>
    <Card sx={{ maxWidth: 345 }}>

      <CardActions>
        <Button variant="contained" size="small" color="primary" target="_blank" href="https://3.basecamp.com/3951314/buckets/28568639/schedules/5155144919">
          Schedule
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>

<CardActions>
  <Button variant="contained" size="small" color="primary" target="_blank" href="https://3.basecamp.com/3951314/buckets/28568639/vaults/5329969960">
    Tech Slides
  </Button>
</CardActions>
</Card>
<Card sx={{ maxWidth: 345 }}>

<CardActions>
  <Button variant="contained" size="small" color="primary" target="_blank" href="https://3.basecamp.com/3951314/buckets/28568639/message_boards/5155144910">
    Message Board
  </Button>
</CardActions>
</Card>
<Card sx={{ maxWidth: 345 }}>

<CardActions>
  <Button variant="contained" size="small" color="primary" target="_blank" href="https://3.basecamp.com/3951314/buckets/28568639/todolists/5481269450">
    Home Work
  </Button>
</CardActions>
</Card>
        </Box>
      </div>
  );
}

const HeadStyle = {
  width: '100vw',
  height: '100vh',
  background: `url(${PageBackground})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed'
};

export default Dashboard;
