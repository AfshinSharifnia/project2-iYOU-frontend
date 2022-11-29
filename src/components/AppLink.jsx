import { Box, Typography } from "@mui/material";

const AppLink = (props) => {
  const text = props.text;
  // const url = props.url;

  return (
    <Box sx={{ padding: 2, backgroundColor: "cyan" }}>
      <Typography variant="h6"> {text} </Typography>
    </Box>
  );
};

export default AppLink;
