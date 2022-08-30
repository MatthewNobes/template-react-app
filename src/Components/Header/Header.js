import css from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Typography } from "@mui/material";

export const Header = (props) => {
  const navigate = useNavigate();

  const returnHome = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  return (
    <header onClick={() => returnHome()}>
      <Typography component="span" variant="h2" className={css.Header}>
        {props.headerText}
      </Typography>
    </header>
  );
};
