import { Box, Typography } from "@mui/material";

const AppLink = (props) => {
  const text = props.text;
  const url = props.url;

  return (
    <Box sx={{ padding: 5, backgroundColor: "cyan" }}>
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
};

export default AppLink;
