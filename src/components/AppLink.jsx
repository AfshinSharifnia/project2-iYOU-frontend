import { Box, Typography } from "@mui/material";

const AppLink = (props) => {
  const text = props.text;
  const url = props.url;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ padding: 1, backgroundColor: "cyan" }}>
        <Typography variant="h6"> {text} </Typography>
      </Box>
      <Box>{url}</Box>
    </Box>
  );
};

export default AppLink;
