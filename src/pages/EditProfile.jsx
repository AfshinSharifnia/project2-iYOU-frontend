import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";

const EditProfile = ({ user }) => {
  // loading for save button
  const [loading, setLoading] = React.useState(true);
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
        setLoadingPage(false);
      }
      for (const key in profileDB) {
        setAnswers((qanswers) => `{...qanswers, ${key}: ${profileDB[key]}}`);
      }
      console.log("ANSWERS: ", answers);
    }
    getProfileDB();
  }, [user]);

  // SAVE FUNCTION, GET ANSWERS AND UPDATE DB RECORD
  async function handleClick() {
    // AFTER FIRST SAVE, user will not be send to edit profile page after login
    answers.firstLogin = "false";
    console.log(answers);
    for (const q in answers) {
      setLoading(false);
      console.log(`${q}: ${answers[q]}`);
      const response = await fetch(
        `/api/profile/updateProfile?field=${q}&fieldData=${answers[q]}`,
      );
      const reply = await response.json();
      console.log(reply);
      setLoading(true);
    }
  }

  /*
  TO DO:

  - POSSIBLE** - photos upload??

  */

  // ICEBREAKER QUESTIONS ARRAY
  const questions = [
    `What’s something new or interesting you’ve learned recently?`,
    `What was your favorite recent meal and why?`,
    `What’s your favorite self-care activity?`,
    `Where did you grow up?`,
    `What’s the best book you’ve ever read? Why?`,
  ];

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "70vmax",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Edit Profile</h1>
      {/* //SHOW THIS ON FIRST LOGIN (UNTIL FIRST SAVE) */}
      {profileDB.firstLogin === "true" ? (
        <div>
          {" "}
          <h3>
            {" "}
            Welcome to iYou, the <strong>Inception YOU</strong> social app.
          </h3>
          <p>
            iYou gives you a place to share all about yourself AND learn about
            your peers in the Inception U cohort and staff.{" "}
          </p>
          <p>
            Below are some Icebreaker questions to answer and share, as well as
            a chance to link to your LinkedIn, Github pages, as well as your
            Lumina portrait. Enjoy!!
          </p>{" "}
        </div>
      ) : (
        <div />
      )}
      <Box sx={{ "& > button": { m: 1 } }}>
        <LoadingButton
          size="small"
          color="secondary"
          onClick={handleClick}
          loading={!loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Save
        </LoadingButton>
      </Box>
      <h2>Icebreaker Questions</h2>
      <p>
        Please take some time to answer the following questions. They will be
        shared on your profile page.
      </p>
      {loadingPage ? (
        <p>loading...</p>
      ) : (
        icebreakerQs.map((currQ, index) => (
          <TextField
            id={`q${index}`}
            label={currQ}
            maxRows={3}
            defaultValue={profileDB[`q${index}`]}
            // value={answers[`q${index}`]}
            onChange={(event) =>
              setAnswers((answers) => ({
                ...answers,
                [`q${index}`]: event.target.value,
              }))
            }
          />
        ))
      )}
      <h2>Links and more about {profileDB.firstName}</h2>
      {loadingPage ? (
        <p>loading...</p>
      ) : (
        <Box>
          <TextField
            id={"linkedInURL"}
            label={"LinkedIn URL"}
            maxRows={3}
            defaultValue={profileDB.linkedInURL}
            onChange={(event) =>
              setAnswers((answers) => ({
                ...answers,
                linkedInURL: event.target.value,
              }))
            }
          />
          <TextField
            id={"githubURL"}
            label={"Github URL"}
            maxRows={3}
            defaultValue={profileDB.githubURL}
            onChange={(event) =>
              setAnswers((answers) => ({
                ...answers,
                githubURL: event.target.value,
              }))
            }
          />
          <TextField
            id={"luminaURL"}
            label={"Lumina URL"}
            maxRows={3}
            defaultValue={profileDB.luminaURL}
            onChange={(event) =>
              setAnswers((answers) => ({
                ...answers,
                luminaURL: event.target.value,
              }))
            }
          />
          <TextField
            id={"pronouns"}
            label={"Pronouns (ex. She/Her, They/Them, etc.)"}
            maxRows={3}
            defaultValue={profileDB.pronouns}
            onChange={(event) =>
              setAnswers((answers) => ({
                ...answers,
                basecampURL: event.target.value,
              }))
            }
          />
          <TextField
            id={"tagline"}
            label={"Personal Tagline / Slogan"}
            maxRows={3}
            defaultValue={profileDB.tagline}
            onChange={(event) =>
              setAnswers((answers) => ({
                ...answers,
                basecampURL: event.target.value,
              }))
            }
          />
          <TextField
            id={"careerBlueprint"}
            label={"Lifepath Career Blueprint"}
            maxRows={30}
            multiline
            defaultValue={profileDB.careerBlueprint}
            onChange={(event) =>
              setAnswers((answers) => ({
                ...answers,
                careerBlueprint: event.target.value,
              }))
            }
          />
        </Box>
      )}
    </Box>
  );
};

export default EditProfile;
