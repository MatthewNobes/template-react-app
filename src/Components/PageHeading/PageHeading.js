import { Typography } from "@mui/material";

export const PageHeading = (props) => {
  return (
    <Typography component="h2" variant="h3">
      {props.pageHeading}
    </Typography>
  );
};
