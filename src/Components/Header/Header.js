import css from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export const Header = (props) => {
	const navigate = useNavigate();

	const returnHome = useCallback(
		() => navigate("/", { replace: true }),
		[navigate],
	);

	return (
		<header onClick={() => returnHome()}>
			<Typography
				component="span"
				variant="h2"
				className={css.Header}
				align="center"
			>
				{props.headerText}
			</Typography>
		</header>
	);
};

Header.propTypes = {
	headerText: PropTypes.string.isRequired,
};
