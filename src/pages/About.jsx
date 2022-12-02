import React from "react";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import VinceImage from '../assets/images/vince.jpg'
import "../pages/About.css"
import AfshinImage from '../assets/images/afshin.jpg'
import ChelseaImage from '../assets/images/chelsea.jpg'
import AshishImage from '../assets/images/ashish.jpeg'
import { Link } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));


const About = () => {
  return <div className="about-background-image">
    <Typography variant="h2">
      Team Wingin It !
    </Typography>
    <Typography variant="h6" display="block">
        Team Wingin it ! is a team from Cohort 9 at InceptionU, Calgary. iYou! is a platform for cohort learners to interact, share and celebrate and get to know each other quickly. 
      </Typography>
      <div className='buttons text-center'>
          <Link to='/'>
            <button className='primary-button'>
              Back to Login
            </button>
          </Link>
        </div>
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, marginTop: "5%",}}>
    <StyledPaper className="chelsea-box">
        <Grid container  spacing={3}>
          <Grid item>
            <img className="about-image" src={ChelseaImage} alt="chelsea"/>
          </Grid>
          <Grid item xs>
          <Typography variant="h5">Chelsea M.</Typography>
            <Typography variant="p">Chelsea was born and raised in Edmonton. 
              She moved to Black Diamond in June of 2020 to live the small town life. 
              Chelsea has 3 children. She enjoys hockey, hiking and road trips. 
              She hopes to one day earn a Degree in Religious studies.
       </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
       className="afshin-box"
      >
        <Grid container  spacing={3}>
          <Grid item>
            <img className="about-image" src={AfshinImage} alt="afshin"/>
          </Grid>
          <Grid item xs>
          <Typography variant="h5">Afshin S.</Typography>
            <Typography variant="p">Afshin is an Iranian-Canadian who has immigrated to Canada in 2015.
              Afshin also makes his home in Calgary with his wife and two boys. 
              He is spending most of his free time with family and also enjoys playing volleyball and ping pong.
       </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
       className="vince-box"
      >
        <Grid container  spacing={3}>
          <Grid item>
            <img className="about-image" src={VinceImage} alt="vince"/>
          </Grid>
          <Grid item xs>
          <Typography variant="h5">Vince I.</Typography>
            <Typography variant="p">Vince is a first generation Canadian, son of Italian immigrants who made their home in Calgary more than 50 years ago.
               Vince also makes his home here with his husband and daughter, Cedar. 
               The three of them like to get lost in the Rocky Mountains regularly with their dog Janet.

            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
      className="ashish-box"
      >
        <Grid container  spacing={3}>
          <Grid item>
            <img className="about-image" src={AshishImage} alt="ashish"/>
          </Grid>
          <Grid item xs>
            <Typography variant="h5">Ashish V.</Typography>
            <Typography variant="p">Ashish is originally from India and immigrated to Canada in 2013. He is now a proud Canadian.
              Ashish has a deep love for photography and one day wants to travel around the world taking pictures. He loves riding 
              motorcycles and wants to do a trans Canada trip on a motorcycle. 
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
      
  </div>;
};

export default About;
