import { Box, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AppLink = (props) => {
  const text = props.text;
  const url = props.url;

  return (
    <Link><Card sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
      <Typography variant="body1">{text}{url}</Typography>
    </Card>
    </Link>
    
  );
};

export default AppLink;
