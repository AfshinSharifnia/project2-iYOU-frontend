import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";

const EditProfile = ({ user }) => {
  // TO DO: USE EFFECT ON PAGE LOAD TO GET QUESTION ANSWERS FROM DB AND POPULATE FIELDS
  const [loading, setLoading] = React.useState(true);
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
    // loading ? setLoading(false) : setLoading(true);
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
      <h2>Icebreaker Questions</h2>

      <p>
        Please take some time to answer the following questions. They will be
        shared on your profile page.
      </p>
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
      {questions.map((currQ, index) => (
        <TextField
          id={`q${index}`}
          label={currQ}
          maxRows={3}
          defaultValue={profileDB[`q${index}`]}
          value={answers[`q${index}`]}
          onChange={(event) =>
            setAnswers((answers) => ({
              ...answers,
              [`q${index}`]: event.target.value,
            }))
          }
        />
      ))}
    </Box>
  );
};

export default EditProfile;
